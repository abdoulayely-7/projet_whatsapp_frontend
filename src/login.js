import { BASE_URL } from './environnement.js';

const form = document.getElementById('login-form');
const errorMessage = document.getElementById('error-message');
  const tel = document.getElementById('telephone');


function estNumeroValide(telephone) {
    return /^\d+$/.test(telephone);
}
function ValidationTelephone() {
  

    tel.addEventListener("input", () => {
        const valeur = tel.value.trim();

        if (!estNumeroValide(valeur)) {
            tel.classList.add("border-red-500");
            errorMessage.textContent = "Seuls les chiffres sont autorisés.";
        } else {
            tel.classList.remove("border-red-500");
            errorMessage.textContent = "";
        }
    });
}

ValidationTelephone()

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  if (tel.value == '') {
    errorMessage.textContent = "Veuillez saisir un numéro"
    return
  }

  try {
    const res = await fetch(`${BASE_URL}/contacts?telephone=${tel}`);
    const data = await res.json();
    if (data.length === 1) {
      localStorage.setItem('connectedUserId', data[0].id);
      window.location.href = '/';
    } else {
      errorMessage.classList.remove('hidden');
      errorMessage.textContent = "Numéro incorrecte"
    }
  } catch (err) {
    errorMessage.textContent = "Erreur serveur.";
    errorMessage.textContent = `${err}`;
  }
});
