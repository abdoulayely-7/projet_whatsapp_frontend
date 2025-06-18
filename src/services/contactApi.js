import { Input } from 'postcss';
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

export async function getMessages(contact) {
  try {
    const res = await fetch(`${BASE_URL}/messages`)
    if (!res.ok) throw new Error("Erreur server");
    const messages = await res.json()

    const conversation = messages.filter(m =>
      (m.auteur === getConnectedUser() && m.destinataire === contact.id) ||
      (m.auteur === contact.id && m.destinataire === getConnectedUser())
    )
    return conversation
  } catch (error) {
    console.log("Erreur lors de la récuperation des messages: ", error);
    return []
  }
}

// export async function getMessages(contact) {
//   const contactId = String(contact.id)
//   const connectedUserId = String(getConnectedUser());

//   try {
//     const [sendRes, receiveRes] = await Promise.all([
//       fetch(`${BASE_URL}/messages?auteur=${connectedUserId}&destinataire=${contactId}`),
//       fetch(`${BASE_URL}/messages?auteur=${contactId}&destinataire=${connectedUserId}`)
//     ])

//     if (!sendRes.ok || !receiveRes.ok) throw new Error("Erreur lors de la récupération du json ");

//     const [send, receive] = await Promise.all([
//       sendRes.json(),
//       receiveRes.json()
//     ])

//     const conversation = [...send, ...receive].sort((a, b) => a.id - b.id)

//     return conversation

//   } catch (error) {
//     console.error("Erreur dans getMessages:", error);
//     return [];
//   }
// }

export async function fetchSendMessages(message) {

  try {
    const res = await fetch(`${BASE_URL}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    });
    if (!res.ok) throw new Error("Erreur lors de l envoie du message");

  } catch (error) {
    console.error("Erreur message:", err);
    alert("Erreur lors de l'envoi.")
  }
}

export async function markMessageAsRead(id) {
  try {
    await fetch(`${BASE_URL}/messages/${id}`, {
      method: 'PATCH',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ lu: true })
    })

  } catch (error) {
    console.error("Erreur lors de la mise à jour du message comme lu:", error);
  }
}

export async function addLastMsgToUser(id, msg) {
  try {
    await fetch(`${BASE_URL}/utilisateurs/${id}`, {
      method: 'PATCH',
      headers: { "content6Type": "application-json" },
      body: JSON.stringify({ dernierMessage: msg })
    })
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l utilisateur :", error);

  }
}
export async function fetchAddContact(contact) {
  try {
    const res = await fetch(`${BASE_URL}/utilisateurs`, {
      method: 'POST',
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(contact)
    })
    return await res.json()
  } catch (error) {
    console.error("Erreur lors de l ajout du contact : ", error);

  }
}

export async function fetchAddContacToConnectedUser(connectedUserId, contactId) {
  try {
    const res = await fetch(`${BASE_URL}/utilisateurs/${connectedUserId}`);
    const utilisateur = await res.json();

    const ancienContacts = utilisateur.contact || [];

    const nouveauxContacts = [...new Set([...ancienContacts, contactId])]; 

    await fetch(`${BASE_URL}/utilisateurs/${connectedUserId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contact: nouveauxContacts })
    });

  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'utilisateur :", error);
  }
}