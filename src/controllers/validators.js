import { findUserByPhone } from "../services/api";

export function validerNom(nom, erreurElement) {
  if (!nom.trim()) {
    erreurElement.textContent = "Le nom est requis.";
    return false;
  }
  return true;
}

export function validerPrenom(prenom, erreurElement) {
  if (!prenom.trim()) {
    erreurElement.textContent = "Le prénom est requis.";
    return false;
  }
  return true;
}

export function validerTelephone(numero, erreurElement) {
  if (!numero.trim()) {
    erreurElement.textContent = "Le numéro de téléphone est requis.";
    return false;
  }

  if (!/^\d+$/.test(numero)) {
    erreurElement.textContent = "Le numéro doit contenir uniquement des chiffres.";
    return false;
  }

  return true;
}

export async function validerTelephoneExistant(numero, erreurElement) {
  try {
    const users = await findUserByPhone(numero);
    if (users.length > 0) {
      erreurElement.textContent = "Ce numéro est déjà utilisé.";
      return false;
    }
    return true;
  } catch (error) {
    erreurElement.textContent = "Erreur serveur. Veuillez réessayer.";
    return false;
  }
}
