export function renderFormAddGroup()
{
  return `
    <div id="sidebar-ajout-groupe"
      class="fixed top-12 left-0 h-[90%] w-[400px] bg-white shadow-lg p-6 z-50 transform -translate-x-full transition-transform duration-300">
      <h2 class="text-xl font-bold mb-4">Créer un Groupe</h2>
      <form id="form-groupe" class="space-y-4">
        <input type="text" id="groupe-nom" placeholder="Nom du groupe"
          class="w-full p-2 border  border-gray-300 rounded focus:outline-none">
        <div id="erreur-nom-groupe" class="text-red-500 text-sm mt-1"></div>
        <textarea id="groupe-description" placeholder="Description"
          class="w-full p-2 border border-gray-300 rounded focus:outline-none"></textarea>

        <div>
          <p class="font-medium text-gray-700 mb-2">Ajouter des membres :</p>
          <ul id="liste-checkbox-contacts"
            class="space-y-2 max-h-100 overflow-y-auto border p-2 rounded focus:outline-none">
            <!-- js  -->
            <div id="erreur-membres-groupe" class="text-red-500 text-sm mt-1"></div>
          </ul>
        </div>

        <div class="flex justify-end gap-3">
          <button type="button" id="cancel-groupe" class="text-gray-600 hover:underline">Annuler</button>
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Ajouter</button>
        </div>
      </form>
    </div>
  `
}