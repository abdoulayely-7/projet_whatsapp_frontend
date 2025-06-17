export function renderFormAddContact(params) {
  const div = document.createElement('div')
  div.className = 'flex flex-col w-[30%] bg-section p-7 border-2 border-vert rounded-tl-lg h-full min-h-screen'
  div.id = 'sidebar-ajout"'
  div.innerHTML = `
      <div class="flex  items-center  mb-4 ">
        <button id='retour' class="mr-4 hover:bg-gray-700 p-2 rounded-full transition-colors">
          <i data-lucide="arrow-left" class="w-6 h-6"></i>
        </button>
        <h2 class="text-xl font-bold text-green-500">Ajouter un contact</h2>
      </div>
      <form id="form-ajout" class="space-y-16">
        <div>
          <label class="text-xm font-bold text-white-700">Nom</label>
          <input autocomplete="off" type="text" name="nom" id="nom-contact"
          placeholder="Entrer le nnom du contact"
            class="w-full mt-1 p-2 bg-transparent text-white placeholder-gray-400 flex-1  border border-green-500 rounded focus:outline-none" />
          <div class="erreur text-red-500 text-sm mt-1" id="erreur-nom"></div>

        </div>
        <div>
          <label class="text-xm font-bold text-white-700">Prénom</label>
          <!-- <input type="file" id="photo-contact" class="w-full mt-1 p-2 border border-gray-300 rounded" /> -->
          <input autocomplete="off" type="text" name="nom" id="prenom-contact"
            placeholder="Entrer le nnom du contact"
            class="w-full mt-1 p-2 bg-transparent text-white placeholder-gray-400 flex-1  border border-green-500 rounded focus:outline-none" />
          <div class="erreur text-red-500 text-sm mt-1" id="erreur-prenom"></div>

        </div>

        <div>
          <label class="text-xm font-bold text-white-700">Numéro Téléphone</label>
          <input autocomplete="off" type="text" id="telephone-contact"
            placeholder="Entrer le numéro de téléphone  du contact"
            class="w-full mt-1 p-2 bg-transparent text-white placeholder-gray-400 flex-1  border border-green-500 rounded focus:outline-none" />
          <div class="erreur text-red-500 text-sm mt-1" id="erreur-telephone"></div>

        </div>
        <div class="flex justify-end gap-3 mt-6">
          <button type="button" id="btn-annuler" class=" bg-annuler text-white p-4 rounded  ">Annuler</button>
          <button type="submit" class="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700">Ajouter</button>
        </div>
      </form>
    </div>
`
  return div
}