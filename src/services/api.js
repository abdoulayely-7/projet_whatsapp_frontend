import { BASE_URL } from "../environnement";
import { getConnectedUser } from "../store/userStore";

export async function findUserByPhone(telephone) {
  const res = await fetch(`${BASE_URL}/utilisateurs?telephone=${telephone}`);
  if (!res.ok) throw new Error("Erreur de server");
  return res.json(); 
}

export async function findUserById(id)
{
  const res = await fetch(`${BASE_URL}/utilisateurs?id=${id}`)
  if (!res.ok) throw new Error("Erreur server");
    return res.json()
  
}

export async function getUsers()
{
const res = await fetch(`${BASE_URL}/utilisateurs`)
  if (!res.ok) throw new Error("Erreur de server");
    return res.json()
} 

