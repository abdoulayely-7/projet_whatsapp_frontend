import { afficherContact } from "../controllers/ContactController";

export function renderBtnAdd() {
    const div = document.createElement('div')
    div.className = 'flex flex-col w-[30%] bg-section p-4 border-2 border-vert rounded-tl-lg h-full min-h-screen'
    div.innerHTML = `
    <div class="flex items-center mb-6">
            <button id='retour' class="mr-4 hover:bg-gray-700 p-2 rounded-full transition-colors">
                <i data-lucide="arrow-left" class="w-6 h-6"></i>
            </button>
            <h1 class="text-lg font-medium">Nouvelle discussion</h1>
        </div>

        <div class="relative mb-6">
            <div class="flex items-center bg-gray-800 rounded-lg p-3 border border-green-500">
                <i data-lucide="search" class="w-5 h-5 text-gray-400 mr-3"></i>
                <input 
                    type="text" 
                    placeholder="Rechercher un nom ou un numéro"
                    class="bg-transparent text-white placeholder-gray-400 flex-1 focus:outline-none"
                >
                
            </div>
        </div>

        <div class="space-y-4 mb-6">
            <button id='btn-add-group' class="flex items-center w-full p-3 hover:bg-gray-700 rounded-lg transition-colors">
                <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i data-lucide="users" class="w-5 h-5 text-white"></i>
                </div>
                <span class="text-white">Nouveau groupe</span>
            </button>

            <button id='btn-add-contact' class="flex items-center w-full p-3 hover:bg-gray-700 rounded-lg transition-colors">
                <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i data-lucide="user-plus" class="w-5 h-5 text-white"></i>
                </div>
                <span class="text-white">Nouveau contact</span>
            </button>

            <button class="flex items-center w-full p-3 hover:bg-gray-700 rounded-lg transition-colors">
                <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <i data-lucide="users-2" class="w-5 h-5 text-white"></i>
                </div>
                <span class="text-white">Nouvelle communauté</span>
            </button>
        </div>

        <div class="flex-1">
            <h2 class="text-gray-400 text-sm font-medium mb-4">Contacts sur WhatsApp</h2>
            
            <div id='liste-contacts' class="space-y-2">
                <!-- Contact -->
                <div class="flex items-center p-3 hover:bg-gray-700 rounded-lg transition-colors cursor-pointer">
                    <div class="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face" 
                            alt="Abdoulaye ly" 
                            class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                        <h3 class="text-white font-medium">Abdoulaye ly (vous)</h3>
                        <p class="text-gray-400 text-sm">Envoyez-vous un message</p>
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    `
    setTimeout(() => {
    afficherContact()
        });


    return div
}