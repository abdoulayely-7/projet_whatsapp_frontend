import { addLastMsgToUser, fetchAddContact, fetchAddContacToConnectedUser, fetchSendMessages, getMessages, loadContacts, markMessageAsRead } from "../services/contactApi";
import { renderSection } from "../components/section";
import { genererFormulaire, genererHeader, genererZoneMessages } from "../components/pageDiscussion";
import { getConnectedUser } from "../store/userStore";
import { createIcons, icons } from 'lucide'
import { findUserById } from "../services/api";
import { data } from "autoprefixer";
import { renderBtnAdd } from "../components/btnAdd";
import { renderFormAddContact } from "../components/add.contact";
import { validerNom, validerPrenom, validerTelephone, validerTelephoneExistant } from "./validators";
import { renderFormAddGroup } from "../components/addGroup";



export function contactElement(contact) {
  const li = document.createElement('li');

  li.className = 'contact-click flex items-center gap-3 cursor-pointer hover:bg-[#242626] p-2 rounded'
  li.setAttribute("data", contact.id)

  li.innerHTML = `
        <img src="https://i.pravatar.cc/40?u=${contact.id}" alt="avatar" class="w-14 h-14 rounded-full" />
        <div class="flex flex-col flex-1">
          <span class="font-medium">${contact.prenom} ${contact.nom}</span>
          <span class=".dernier-message font-sm">${contact.dernierMessage || 'Aucun message'}</span>
        </div>
        <div class="ml-auto">

          <p class="text-xm text-gray-400">${contact.heure || ''}</p>
          <span class="bg-green-500 ml-3 text-gray-900 text-[15px] font-bold px-2 py-0.5 rounded-full">
            ${contact.nonLus || ''}
          </span>
        </div>
      `;
  return li;
}

export function activerContact(li, contact) {
  li.addEventListener("click", () => {
    document.querySelectorAll(".contact-click").forEach(el => {
      el.classList.remove("bg-[#242626]");
    });
    li.classList.add("bg-[#242626]");
    const svgAccueil = document.querySelector("#svg-accueil")
    const discussion = document.querySelector("#discussion")
    if (svgAccueil) svgAccueil.classList.add("hidden");
    if (discussion) discussion.classList.remove("hidden");
    afficherPageDiscussion(contact);
  });
}

export async function afficherContact() {
  const liste = document.querySelector("#liste-contacts")
  liste.innerHTML = ''
  const contacts = await loadContacts()

  contacts.forEach(contact => {
    const li = contactElement(contact);

    activerContact(li, contact);
    liste.append(li);
  });
  const inputRecherche = document.getElementById("recherche");
  inputRecherche.addEventListener("input", async () => {
    const terme = inputRecherche.value.trim().toLowerCase();
    await afficherContactFiltre(terme);
  });
}


// export async function afficherMessages(contact) {
//   const messagesContainer = document.getElementById('discussion-messages');
//   messagesContainer.innerHTML = "";

//   const connectedUserId = getConnectedUser();
//   const conversation = await getMessages(contact);

//   conversation.forEach(message => {

//     const isSent = message.auteur === connectedUserId;
//     if (!message.lu) {
//       markMessageAsRead(message.id)
//     }
//     const messageHTML = isSent
//       ? `
//       <div class="bg-[#144D37] p-2 text-white max-w-xs self-end rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-2xl">
//         <div class="flex justify-between items-end gap-3">
//           <p>${message.texte}</p>
//           <span class="text-xs text-gray-300 whitespace-nowrap">${message.heure}</span>
//           ${message.lu ? '<i data-lucide="check-check" class="w-3 h-3 -ml-2"></i>' : ''}
//         </div>
//       </div>
//       `
//       : `
//       <div class="flex justify-between items-end gap-2 bg-[#242626] p-2 rounded-tl-none rounded-bl-2xl rounded-tr-2xl rounded-br-2xl text-white max-w-xs self-start">
//         <p>${message.texte}</p>
//         <span class="text-xs">${message.heure}</span>
//         <i data-lucide="check-check" class="w-3 h-3 -ml-2"></i>
//       </div>
//       `;

//     messagesContainer.insertAdjacentHTML("beforeend", messageHTML);
//     messagesContainer.scrollTop = messagesContainer.scrollHeight;

//   });
// }

export async function EnvoyerMessage(contact) {
  const form = document.querySelector("#form-message");
  const input = document.querySelector("#message-input");
  const emojiContainer = document.querySelector("#emoji-container");
  const emojiPicker = emojiContainer.querySelector("emoji-picker");

  form.addEventListener("click", (e) => {
    if (e.target.closest("#micro")) {
      sendVocal()
    }
  })

  form.addEventListener("click", (e) => {
    if (e.target.closest("#emoji-icon")) emojiContainer.classList.toggle("hidden")
  })
  emojiPicker.addEventListener("emoji-click", (e) => {
    input.value += e.detail.unicode
    input.focus()
  })

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    emojiContainer.classList.add("hidden")
    const msg = input.value.trim();
    if (!msg) return;

    const contactId = String(contact.id);
    const connectedUserId = String(getConnectedUser());

    await addLastMsgToUser(contactId, msg)
    const li = document.querySelector(`li[data-id="${contactId}"]`);
    if (li) {
      const lastMsgEl = li.querySelector(".dernier-message");
      lastMsgEl.textContent = msg;
    }


    const newMessage = {
      texte: msg,
      auteur: connectedUserId,
      destinataire: contactId,
      heure: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      envoye: true,
      lu: false
    };

    await fetchSendMessages(newMessage);
    input.value = '';

    const messagesContainer = document.querySelector('#discussion-messages');
    const messageHTML = `
      <div class="bg-[#144D37] p-2 text-white max-w-xs self-end rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-2xl">
        <div class="flex justify-between items-end gap-3">
          <p>${newMessage.texte}</p>
          <span class="text-xs text-gray-300 whitespace-nowrap">${newMessage.heure}</span>
          <i data-lucide="check" class="w-3 h-3 -ml-2"></i>
        </div>
      </div>
    `;

    messagesContainer.insertAdjacentHTML("beforeend", messageHTML);

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    createIcons({ icons });
  });
}
let isRecording = false;
let recorder = null;
let stream = null;
let timerInterval = null;
let elapsedSeconds = 0;
let audioData = [];
let micAlreadyInitialized = false;

function sendVocal() {
  const micButton = document.querySelector("#micro");
  const statusBox = document.querySelector("#recording-status");

  //  Ne pas ajouter plusieurs fois l'écouteur
  if (micAlreadyInitialized) return;
  micAlreadyInitialized = true;

  micButton.addEventListener("click", async () => {
    if (!isRecording) {
      try {
        micButton.style.color = "red";

        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        recorder = new MediaRecorder(stream);
        audioData = [];

        // Affichage de l'état
        statusBox.classList.remove("hidden");
        elapsedSeconds = 0;
        statusBox.textContent = "Enregistrement : 0:00";

        timerInterval = setInterval(() => {
          elapsedSeconds++;
          const minutes = Math.floor(elapsedSeconds / 60);
          const seconds = elapsedSeconds % 60;
          statusBox.textContent = `Enregistrement : ${minutes}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);

        recorder.ondataavailable = (e) => {
          audioData.push(e.data);
        };

        recorder.onstop = () => {
          clearInterval(timerInterval);
          statusBox.classList.add("hidden");
          micButton.style.color = "white";

          const audioBlob = new Blob(audioData, { type: "audio/webm" });
          const audioUrl = URL.createObjectURL(audioBlob);

          const messageContainer = document.createElement("div");
          messageContainer.className = "flex flex-col items-end gap-1"; // Aligne à droite

          const audioPlayer = document.createElement("audio");
          audioPlayer.className = 'bg-[#144D37] p-2 text-white max-w-xs self-end rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-2xl';
          audioPlayer.controls = true;
          audioPlayer.src = audioUrl;

          const heure = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const span = document.createElement("span");
          span.className = "text-xs text-gray-300";
          span.textContent = `${heure}`;

          messageContainer.appendChild(audioPlayer);
          messageContainer.appendChild(span);

          document.querySelector("#discussion-messages").appendChild(messageContainer);

          // Libère le micro
          stream.getTracks().forEach(track => track.stop());
        };

        recorder.start();
        isRecording = true;

      } catch (error) {
        alert("Le micro n'est pas autorisé !");
        console.error(error);
      }

    } else {
      // Stop l’enregistrement
      recorder.stop();
      isRecording = false;
    }
  });
}




export async function afficherPageDiscussion(contact) {
  const discussion = document.getElementById("discussion");
  discussion.innerHTML = `
    ${genererHeader(contact)}
    ${genererZoneMessages()}
    ${genererFormulaire()}
  `;

  const messagesContainer = document.querySelector("#discussion-messages");
  const displayedMessageIds = new Set();
  console.log(displayedMessageIds);


  const messagesInitiaux = await getMessages(contact);
  messagesInitiaux.forEach(msg => {
    renderMessage(msg, messagesContainer);
    displayedMessageIds.add(msg.id);
  });

  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  // Lance la surveillance des nouveaux messages
  surveillerNouveauxMessages(contact, messagesContainer, displayedMessageIds);

  EnvoyerMessage(contact);
  createIcons({ icons });
}


function surveillerNouveauxMessages(contact, messagesContainer, displayedMessageIds) {
  setInterval(async () => {
    const allMessages = await getMessages(contact);

    const newIncomingMessages = allMessages.filter(msg =>
      !displayedMessageIds.has(msg.id) &&
      msg.auteur === contact.id &&
      msg.destinataire === getConnectedUser()
    );

    newIncomingMessages.forEach(msg => {
      renderMessage(msg, messagesContainer);
      displayedMessageIds.add(msg.id);
    });

    if (newIncomingMessages.length > 0) {
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  }, 5000);
}


function renderMessage(msg, container) {
  const isSent = msg.auteur === getConnectedUser();

  const div = document.createElement("div");
  div.className = `
    ${isSent ? "self-end bg-[#144D37] text-white" : "self-start bg-white text-black"}
    p-2 max-w-xs rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-2xl
  `;
  div.innerHTML = `
    <div class="flex justify-between items-end gap-3">
      <p>${msg.texte}</p>
      <span class="text-xs text-gray-400 whitespace-nowrap">${msg.heure}</span>
    </div>
  `;
  container.appendChild(div);
}

export function gererRetour(container, callbackRetour) {
  container.addEventListener("click", async (e) => {
    const btnRetour = e.target.closest("#retour");
    if (btnRetour) {
      await callbackRetour();
    }
  });
}


export function showBtnClick(section) {
  section.addEventListener("click", async (e) => {
    const iconCliquee = e.target.closest("#btn-add");
    if (!iconCliquee) return;

    const newSectionAddOption = renderBtnAdd();
    const formContact = renderFormAddContact();
    const formGroup = renderFormAddGroup()
    const oldSection = document.querySelector("#main-section");

    oldSection.replaceWith(newSectionAddOption);
    createIcons({ icons });

    //  Gérer retour vers la liste de contacts depuis renderBtnAdd
    gererRetour(newSectionAddOption, afficherSectionPrincipale);

    newSectionAddOption.addEventListener("click", async (e) => {
      const iconAddContact = e.target.closest("#btn-add-contact");
      const iconAddGroup = e.target.closest("#btn-add-group")
      if (!iconAddContact) return;

      newSectionAddOption.replaceWith(formContact);
      document.querySelector("#nom-contact").focus();
      createIcons({ icons });

      //  Gérer retour vers renderBtnAdd depuis renderFormAddContact
      gererRetour(formContact, () => {
        formContact.replaceWith(newSectionAddOption);
        createIcons({ icons });
      });

      const form = document.querySelector("#form-ajout");
      addContact(form);
    });
  });
}

export async function afficherSectionPrincipale() {
  const oldAjoutSection = document.querySelector("#sidebar-ajout");
  if (!oldAjoutSection) return;

  const mainSection = renderSection(); // À créer si besoin
  oldAjoutSection.replaceWith(mainSection);

  await afficherContact();
  createIcons({ icons });
  showBtnClick(mainSection);
}


function addContact(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputNom = document.querySelector("#nom-contact");
    const inputPrenom = document.querySelector("#prenom-contact");
    const inputNumero = document.querySelector("#telephone-contact");

    const erreurNom = document.querySelector("#erreur-nom");
    const erreurPrenom = document.querySelector("#erreur-prenom");
    const erreurTelephone = document.querySelector("#erreur-telephone");

    const btnAjouter = document.querySelector("#btn-ajouter-contact");

    erreurNom.textContent = "";
    erreurPrenom.textContent = "";
    erreurTelephone.textContent = "";

    const nom = inputNom.value.trim();
    const prenom = inputPrenom.value.trim();
    const numero = inputNumero.value.trim();
    const connectedUserId = String(getConnectedUser());

    const nomValide = validerNom(nom, erreurNom);
    const prenomValide = validerPrenom(prenom, erreurPrenom);
    const telValide = validerTelephone(numero, erreurTelephone);

    if (!nomValide || !prenomValide || !telValide) return;

    btnAjouter.disabled = true;
    btnAjouter.textContent = "Ajout en cours...";

    const telephoneDisponible = await validerTelephoneExistant(numero, erreurTelephone);
    if (!telephoneDisponible) {
      btnAjouter.disabled = false;
      btnAjouter.textContent = "Ajouter";
      return;
    }

    const avatar = (prenom[0] + nom[0]).toUpperCase();

    const nouveauContact = {
      nom,
      prenom,
      telephone: numero,
      dernierMessage: "",
      brouillon: "",
      noteVocale: true,
      avatar,
      contact: [connectedUserId],
      archive: false,
    };

    const contactCree = await fetchAddContact(nouveauContact);

    if (contactCree?.id) {
      await fetchAddContacToConnectedUser(connectedUserId, contactCree.id);
      viderChamps();
      await afficherSectionPrincipale();
      afficherContact()
    } else {
      erreurTelephone.textContent = "Erreur : impossible d'ajouter le contact.";
    }

    btnAjouter.disabled = false;
    btnAjouter.textContent = "Ajouter";
  });
}

function viderChamps(params) {
  const inputNom = document.querySelector("#nom-contact")
  const inputPrenom = document.querySelector("#prenom-contact")
  const inputNumero = document.querySelector("#telephone-contact")
  inputNom.value = ''
  inputPrenom.value = ''
  inputNumero.value = ''
}





async function afficherContactFiltre(recherche) {
  const liste = document.querySelector("#liste-contacts");
  let contacts = await loadContacts();

  // Filtrage par texte
  if (recherche && recherche !== "*") {
    contacts = contacts.filter(contact => {
      const nomComplet = `${contact.prenom} ${contact.nom}`.toLowerCase();
      const telephone = contact.telephone.toLowerCase();
      return nomComplet.includes(recherche) || telephone.includes(recherche);
    });
  }

  // Tri par ordre alphabétique si *
  if (recherche === "*") {
    contacts.sort((a, b) => {
      const nomA = `${a.prenom} ${a.nom}`.toLowerCase();
      const nomB = `${b.prenom} ${b.nom}`.toLowerCase();
      return nomA.localeCompare(nomB);
    });
  }

  // Affichage
  liste.innerHTML = "";
  contacts.forEach(contact => {
    const li = contactElement(contact);
    activerContact(li, contact);
    liste.appendChild(li);
  });
}
