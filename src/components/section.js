export function renderSection() {
  const section = document.createElement("section")
  section.className = 'flex flex-col w-[30%] bg-section p-4 border-2 border-color rounded-tl-lg h-full'
  section.id = "main-section";
  section.innerHTML = `
    <div class="flex justify-between">
        <h2 class="text-2xl font-bold mb-4">WhatsApp</h2>
        <div class="flex gap-10 mr-5">
          <i data-lucide="message-square-diff" id="btn-add" class="text-xl mt-1 hover:text-white cursor-pointer"
            style="transform: rotateX(180deg)"></i>
          <i class="fas fa-ellipsis-v text-2xl hover:text-white cursor-pointer"></i>
        </div>
      </div>

      <div class="w-full relative">
        <i data-lucide="search" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
        <input class="pl-14 p-3 w-full bg-[#2E2F2F] rounded-full placeholder:text-gray-400 focus:outline-none"
          type="text" placeholder="Rechercher ou commencer une discussion" />
      </div>

      <div class="flex gap-2 mt-2">
        <div
          class="rounded-full bg-[#103529] py-2 px-3 text-white text-sm font-medium cursor-pointer hover:text-green-500">
          Toutes
        </div>
        <div
          class="rounded-full p-1 border-2 py-2 px-3 border-color text-white text-sm font-medium cursor-pointer hover:text-green-500">
          Non lues
        </div>
        <div
          class="rounded-full p-1 border-2 py-2 px-3 border-color text-white text-sm font-medium cursor-pointer hover:text-green-500">
          Favories
        </div>
        <div
          class="rounded-full p-1 border-2 py-2 px-3 border-color text-white text-sm font-medium cursor-pointer hover:text-green-500">
          Groupes
        </div>
      </div>

      <ul id="liste-contacts" class="space-y-4 mt-2 overflow-y-auto">
        
      </ul>
      
  `
  return section
}






