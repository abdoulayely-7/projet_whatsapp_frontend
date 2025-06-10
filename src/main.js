import './style.css'
import './index.css'
import { CONTACTS } from './const'
import { createIcons, icons } from 'lucide'

createIcons({ icons });

const svgAccueil = document.getElementById('svg-accueil');
const discussion = document.getElementById('discussion');
const liste = document.getElementById('liste-contacts');
const iconStatut = document.querySelector('#icon-statut')
let contactActif = null

const connectedUser = localStorage.getItem('connectedUser');

if (!connectedUser) {
  window.location.href = '/login.html';
}

console.log(connectedUser);



iconStatut.addEventListener("click", ()=>{
  console.log("ok");
  location.href="statut"
  
})

CONTACTS.forEach(contact => {
  const li = document.createElement('li');
  li.className = "contact-click flex items-center gap-3 cursor-pointer hover:bg-[#242626] p-2 rounded";

  li.innerHTML = `
    <img src="${contact.avatar}" alt="avatar" class="w-14 h-14 rounded-full">
    <div class="flex flex-col flex-1">
      <span class="font-medium">${contact.nom}</span>
      <span class="text-sm text-gray-400">${contact.message}</span>
    </div>
    <div class="ml-auto text-right">
      <p class="text-xs text-gray-400">${contact.heure}</p>
      ${contact.nonLus > 0 ? `
        <span class="bg-green-500 ml-3 text-gray-900 text-[13px] font-bold px-2 py-0.5 rounded-full">
          ${contact.nonLus}
        </span>` : ''}
    </div>
  `;

  liste.appendChild(li);
  li.addEventListener('click', () => {
    svgAccueil.classList.add('hidden');
    discussion.classList.remove('hidden');
  });
});

const input = document.getElementById("message-input");
// const sendBtn = document.getElementById("send-btn");
const messageContainer = document.querySelector(".messages");

// Fonction pour ajouter un message
function ajouterMessage(texte) {
  const message = document.createElement("div");
  message.className = "bg-[#144D37] p-3 rounded-lg text-white max-w-xs self-end";
  message.innerHTML = `
    <div class="flex justify-between items-end gap-3">
      <p>${texte}</p>
      <span class="text-xs text-gray-300 whitespace-nowrap">
        ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </span>
        <i data-lucide="check-check"  class="w-3 h-3  -ml-2"></i>

    </div>
  `;
  messageContainer.appendChild(message);
  // messageContainer.scrollTop = messageContainer.scrollHeight; 
createIcons({ icons });

}



// Aussi à la touche Entrée
input.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    const texte = input.value.trim();
    ajouterMessage(texte)
    input.value = "";

  }
});



