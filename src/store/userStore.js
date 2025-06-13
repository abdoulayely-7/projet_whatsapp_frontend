let connectedUser = null

export function setConnectedUser(user)
{
  connectedUser = user
  localStorage.setItem('connectedUser',user)
}
export function getConnectedUser()
{
  return connectedUser
}
export  function restoreConnectedUser()
{
  const userJson  = localStorage.getItem('connectedUser')
  if (userJson) connectedUser = (userJson)
}