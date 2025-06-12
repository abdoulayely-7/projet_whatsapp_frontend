import { BASE_URL } from "../environnement";

export async function findUserByPhone(telephone)
{
  const res = await fetch(`${BASE_URL}/contacts?telephone=${telephone}`)
  if (!res.ok) throw new Error("Erreur de server");
    return res.json()
}
export async function findUserById(id)
{
  const res = await fetch(`${BASE_URL}/contacts?id=${id}`)
  if (!res.ok) throw new Error("Erreur server");
    return res.json()
  
}