import { getConnectedUser } from '../store/userStore';
import { getMessages } from '../services/contact';

export function genererHeader(contact) {
    return `
        <div class="flex justify-between bg-main">
            <div class="flex gap-3 ">
                <img src="https://i.pravatar.cc/40?u=${contact.id}" alt="avatar" class="w-14 h-14 rounded-full" />
                <div class="flex flex-col flex-1">
                <span class="font-bold">${contact.prenom} ${contact.nom}</span>
                <span class="font-sm">en ligne</span>
                </div>
            </div>
            <div class="flex gap-5">
                <i data-lucide="search" class="text-2xl mt-1"></i>
                <i class="fas fa-ellipsis-v text-2xl hover:text-white cursor-pointer"></i>
            </div>
        </div>
    `;
}

export function genererZoneMessages() {
    return `
        <div id="discussion-messages" class="messages flex flex-col flex-1 overflow-y-auto px-4 py-2 space-y-4"></div>
    `;
}

export function genererFormulaire() {
    return `
        <div class="w-full relative">
            <form action="" id="form-message">
                <i data-lucide="plus" class="absolute left-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"></i>

                <i data-lucide="smile" class="absolute left-10 top-1/2 -translate-y-1/2 text-white cursor-pointer"></i>

                <input id="message-input" type="text" placeholder="Entrer un message"
                    class="w-full pl-20 pr-12 py-3 rounded-full bg-[#242626] text-white placeholder:text-white focus:outline-none" />

                <i data-lucide="mic" class="absolute right-4 top-1/2 -translate-y-1/2 text-white cursor-pointer"></i>
        
            </form>
        </div>
    `;
}