export function renderLogin() {
  const divContainer = document.createElement('div');
  divContainer.className = "bg-body text-white flex items-center justify-center h-screen w-full";

  const div = document.createElement('div');
  div.className = 'flex items-center justify-center gap-4 mt-10';
  div.innerHTML = `
    <div class="bg-[#1E1E1E] p-8 rounded-lg shadow-lg w-96">
      <h1 class="text-2xl font-bold mb-6 text-center">Connexion</h1>
      <form id="login-form" class="space-y-4">
        <input type="text" id="telephone" placeholder="Numéro de téléphone"
          class="w-full p-3 rounded bg-[#2E2F2F] text-white outline-none">
        <p id="error-message" class="text-red-500 mt-4 text-center "></p>
        <button type="submit" class="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded">Se connecter</button>
      </form>
    </div>
  `;

  divContainer.appendChild(div);
  return divContainer; 
}


