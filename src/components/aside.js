export function renderAside() {
  const aside = document.createElement('aside')
  aside.className = "w-[3%] p-4 flex flex-col justify-between h-full items-center"
  aside.innerHTML = `
    <div class="flex flex-col gap-6 items-center">
        <i class="fas fa-comment-dots text-xl hover:text-white cursor-pointer"></i>
        <i id="icon-statut" data-lucide="circle-fading-plus" class="text-xl hover:text-white cursor-pointer"></i>
        <i data-lucide="message-circle-code" class="text-xl hover:text-white cursor-pointer"></i>
        <i class="fas fa-users text-xl hover:text-white cursor-pointer"></i>
      </div>

      <div class="flex flex-col gap-6 items-center">
        <div class="w-full border-2 border-color"></div>

        <i class="fa-solid fa-gear text-xl hover:text-white cursor-pointer"></i>

        <div class="w-10 h-10 rounded-full overflow-hidden">
          <img src="/pp.jpg" loading="lazy" width="40" height="40" class="w-10 h-10 object-cover" />
        </div>
      </div>
  `
  return aside
}