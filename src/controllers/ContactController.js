import { addLastMsgToUser, fetchAddContact, fetchAddContacToConnectedUser, fetchSendMessages, getMessages, loadContacts, markMessageAsRead } from "../services/contactApi";
import { renderSection } from "../components/section";
import { genererFormulaire, genererHeader, genererZoneMessages } from "../components/pageDiscussion";
import { getConnectedUser } from "../store/userStore";
import { createIcons, icons } from 'lucide'
import { findUserById } from "../services/api";
import { data } from "autoprefixer";
import { renderBtnAdd } from "../components/btnAdd";
import { renderFormAddContact } from "../components/add.contact";

export function contactElement(contact) {
  const li = document.createElement('li');

  li.className = 'contact-click flex items-center gap-3 cursor-pointer hover:bg-[#242626] p-2 rounded'
  li.setAttribute("data", contact.id)

  li.innerHTML = `
        <img src="https://i.pravatar.cc/40?u=${contact.id}" alt="avatar" class="w-14 h-14 rounded-full" />
        <div class="flex flex-col flex-1">
          <span class="font-medium">${contact.nom}</span>
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
}


export async function afficherMessages(contact) {
  const messagesContainer = document.getElementById('discussion-messages');
  messagesContainer.innerHTML = "";

  const connectedUserId = getConnectedUser();
  const conversation = await getMessages(contact);

  conversation.forEach(message => {

    const isSent = message.auteur === connectedUserId;
    if (!message.lu) {
      markMessageAsRead(message.id)
    }
    const messageHTML = isSent
      ? `
      <div class="bg-[#144D37] p-2 text-white max-w-xs self-end rounded-tl-2xl rounded-tr-none rounded-bl-2xl rounded-br-2xl">
        <div class="flex justify-between items-end gap-3">
          <p>${message.texte}</p>
          <span class="text-xs text-gray-300 whitespace-nowrap">${message.heure}</span>
          ${message.lu ? '<i data-lucide="check-check" class="w-3 h-3 -ml-2"></i>' : ''}
        </div>
      </div>
      `
      : `
      <div class="flex justify-between items-end gap-2 bg-[#242626] p-2 rounded-tl-none rounded-bl-2xl rounded-tr-2xl rounded-br-2xl text-white max-w-xs self-start">
        <p>${message.texte}</p>
        <span class="text-xs">${message.heure}</span>
        <i data-lucide="check-check" class="w-3 h-3 -ml-2"></i>
      </div>
      `;

    messagesContainer.insertAdjacentHTML("beforeend", messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

  });
}

export function EnvoyerMessage(contact) {
  const form = document.querySelector("#form-message");
  const input = document.querySelector("#message-input");
  const emojiContainer = document.querySelector("#emoji-container");
  const emojiPicker = emojiContainer.querySelector("emoji-picker");

  form.addEventListener("click", (e) => {
    if (e.target.closest("#emoji-icon")) emojiContainer.classList.toggle("hidden")
  })
  emojiPicker.addEventListener("emoji-click",(e)=>{
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

export async function afficherPageDiscussion(contact) {
  const discussion = document.getElementById("discussion");
  discussion.innerHTML = `
        ${genererHeader(contact)}
        ${genererZoneMessages()}
        ${genererFormulaire()}
    `;
  // initialiserBoutonsDiscussion(contact);
  // sauvegarderBrouillon(contact);
  //  setInterval(() => {
  afficherMessages(contact);
  // }, 3000); 
  EnvoyerMessage(contact);
  createIcons({ icons });
}

export function showBtnClick(section) {
  section.addEventListener("click", (e) => {
    const iconCliquee = e.target.closest("#btn-add")
    if (iconCliquee) {
      const newSectionAddOption = renderBtnAdd();
      const sideBar = renderFormAddContact()
      const oldSection = document.querySelector("#main-section");
      oldSection.replaceWith(newSectionAddOption);

      createIcons({ icons });

      newSectionAddOption.addEventListener("click", (e) => {
        const iconAddContact = e.target.closest("#btn-add-contact")
        const iconRetour = e.target.closest("#retour")
        if (iconAddContact) {
          newSectionAddOption.replaceWith(sideBar)
          const inputNom = document.querySelector('#nom-contact')
          inputNom.focus()
          createIcons({ icons });
          const form = document.querySelector("#form-ajout")
          addContact(form)
        }
        else if (iconRetour) {
          newSectionAddOption.replaceWith(oldSection)
        }
      })
    }


  });
}

function addContact(form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const inputNom = document.querySelector("#nom-contact");
    const inputPrenom = document.querySelector("#prenom-contact");
    const inputNumero = document.querySelector("#telephone-contact");

    const nom = inputNom.value.trim();
    const prenom = inputPrenom.value.trim();
    const numero = inputNumero.value.trim();
    const connectedUserId = String(getConnectedUser());

    if (!nom || !prenom || !numero) {
      alert("Veuillez remplir tous les champs.");
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
      archive: false
    };

    const contactCree = await fetchAddContact(nouveauContact);
    console.log(contactCree);

    if (contactCree?.id) {
      console.log("ok");
      await fetchAddContacToConnectedUser(connectedUserId, contactCree.id)
      alert("fait")
      viderChamps()
    } else {
      alert("Erreur : impossible d'ajouter le contact.");
    }

  });


  function viderChamps(params) {
    const inputNom = document.querySelector("#nom-contact")
    const inputPrenom = document.querySelector("#prenom-contact")
    const inputNumero = document.querySelector("#telephone-contact")
    inputNom.value = ''
    inputPrenom.value = ''
    inputNumero.value = ''
  }
}
