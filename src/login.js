import { BASE_URL } from './environnement.js';

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const tel = document.getElementById('telephone').value;

  try {
    const res = await fetch(`${BASE_URL}/contacts?telephone=${tel}`);
    const data = await res.json();

    if (data.length === 1) {
      localStorage.setItem('connectedUserId',JSON.stringify( data[0]));
      window.location.href = '/';
      console.log(data);
      
    } else {
      errorMessage.classList.remove('hidden');
    }
  } catch (err) {
    errorMessage.textContent = "Erreur serveur.";
    errorMessage.classList.remove('hidden');
  }
});
