import { BASE_URL } from '../environnement.js';
import { setConnectedUser } from '../store/userStore.js';
import { router } from '../router.js';

export function renderLogin(container) {
  const divContainer = document.createElement('div')
  divContainer.className = "bg-body text-white flex items-center justify-center h-screen  w-full"
  const div = document.createElement('div');
  div.className = 'flex  items-center justify-center gap-4 mt-10';
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

  const form = div.querySelector("#login-form")
  console.log(div);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("send");

    const tel = form.querySelector('#telephone').value;

    try {
      const res = await fetch(`${BASE_URL}/contacts?telephone=${tel}`);
      const data = await res.json();

      if (data.length === 1) {
        setConnectedUser(data[0]);
        router();
      } else {
        form.querySelector('#error-message').classList.remove('hidden');
      }
    } catch {
      const error = form.querySelector('#error-message');
      error.textContent = 'Erreur serveur.';
      error.classList.remove('hidden');
    }
  });

  divContainer.appendChild(div);
  container.appendChild(divContainer)
}
