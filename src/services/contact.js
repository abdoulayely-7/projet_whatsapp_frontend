import { BASE_URL } from '../environnement.js'
import { getConnectedUser } from '../store/userStore.js';
import { findUserById, getUsers } from './api.js';

export async function loadContacts() {
  try {
    const connectedUserId = getConnectedUser();

    const user = await findUserById(connectedUserId)

    console.log(user);

    const connectedUser = user[0];

    if (!connectedUser || !connectedUser.contact || connectedUser.contact.length === 0) {
      return [];
    }

    const allUsers = await getUsers();

    const contacts = allUsers.filter(user => connectedUser.contact.includes(user.id));

    return contacts;

  } catch (error) {
    console.log("Erreur lors du chargement des contacts :", error);
    return [];
  }
}
