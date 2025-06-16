import { fetchSendMessages, getMessages, loadContacts, markMessageAsRead } from "../services/contact";
import { renderSection } from "../components/section";
import { genererFormulaire, genererHeader, genererZoneMessages } from "../components/pageDiscussion";
import { getConnectedUser } from "../store/userStore";
import { createIcons, icons } from 'lucide'

export function contactElement(contact) {
  const li = document.createElement('li');

  li.className = 'contact-click flex items-center gap-3 cursor-pointer hover:bg-[#242626] p-2 rounded'

  li.innerHTML = `
        <img src="https://i.pravatar.cc/40?u=${contact.id}" alt="avatar" class="w-14 h-14 rounded-full" />
        <div class="flex flex-col flex-1">
          <span class="font-medium">${contact.nom}</span>
          <span class="font-sm">${contact.dernierMessage || 'Aucun message'}</span>
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
  const sectionContact = renderSection()
  const liste = document.querySelector("#liste-contacts")

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
    if (!isSent && !message.lu) {
      markMessageAsRead(message.id)
      message.lu = true
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
  });
}

export function EnvoyerMessage(contact) {
  const form = document.querySelector("#form-message");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("#message-input");
    const msg = input.value.trim();
    if (!msg) return;

    const contactId = String(contact.id);
    const connectedUserId = String(getConnectedUser());

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
          <i data-lucide="check-check" class="w-3 h-3 -ml-2"></i>
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
  await afficherMessages(contact);
createIcons({ icons });
  EnvoyerMessage(contact);


  createIcons({ icons });

}

