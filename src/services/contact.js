import { BASE_URL } from '../environnement.js'
import { getConnectedUser } from '../store/userStore.js';
import { findUserById, getUsers } from './api.js';




export async function loadContacts() {
  try {
    const connectedUserId = getConnectedUser();

    const user = await findUserById(connectedUserId)

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

// export async function getMessages(contact) {
//   try {
//       const res = await fetch(`${BASE_URL}/messages`)
//       if (!res.ok) throw new Error("Erreur server");
//       const messages = await  res.json()

//       const conversation = messages.filter(m =>
//         (m.auteur === getConnectedUser() && m.destinataire === contact.id) ||
//         (m.auteur === contact.id && m.destinataire === getConnectedUser())
//       )
//       return conversation
//   } catch (error) {
//     console.log("Erreur lors de la récuperation des messages: ",error);
//     return []
//   }
// }

export async function getMessages(contact) {
  const contactId = String(contact.id)
  const connectedUserId = String(getConnectedUser());

  try {
    const [sendRes, receiveRes] = await Promise.all([
      fetch(`${BASE_URL}/messages?auteur=${connectedUserId}&destinataire=${contactId}`),
      fetch(`${BASE_URL}/messages?auteur=${contactId}&destinataire=${connectedUserId}`)
    ])

    if (!sendRes.ok || !receiveRes.ok) throw new Error("Erreur lors de la récupération du json ");

    const [send, receive] = await Promise.all([
      sendRes.json(),
      receiveRes.json()
    ])

    const conversation = [...send, ...receive].sort((a, b) => a.id - b.id)

    return conversation

  } catch (error) {
    console.error("Erreur dans getMessages:", error);
    return [];
  }
}
