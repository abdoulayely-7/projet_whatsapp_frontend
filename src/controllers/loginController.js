import { findUserByPhone } from '../services/api.js';
import { setConnectedUser } from '../store/userStore.js';
import { router } from '../router.js';
import { renderLogin } from '../views/loginView.js';

export function showLogin(app) {
  const loginEl = renderLogin(); 
  app.innerHTML = ""; 
  app.appendChild(loginEl); 

  const form = loginEl.querySelector("#login-form");
  const tel = form.querySelector("#telephone");
  const erreurMessage = form.querySelector("#error-message");

  function estNumeroValide(telephone) {
    return /^\d+$/.test(telephone);
  }

  tel.addEventListener("input", () => {
    const valeur = tel.value.trim();

    if (!estNumeroValide(valeur)) {
      erreurMessage.textContent = "Seuls les chiffres sont autorisés.";
    } else {
      erreurMessage.textContent = "";
    }
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const valeur = tel.value.trim();

    if (valeur === "") {
      erreurMessage.textContent = "Veuillez saisir le numéro de téléphone.";
      return;
    }

    if (!estNumeroValide(valeur)) {
      erreurMessage.textContent = "Seuls les chiffres sont autorisés.";
      return;
    }

    try {
      const data = await findUserByPhone(valeur);

      if (data.length === 1) {
        setConnectedUser(data[0].id);
        router();
      } else {
        erreurMessage.textContent = "Aucun utilisateur trouvé avec ce numéro.";
      }
    } catch {
      erreurMessage.textContent = "Erreur serveur.";
    }
  });
}