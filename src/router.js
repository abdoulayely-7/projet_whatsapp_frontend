import { getConnectedUser } from "./store/userStore";
import { renderLogin } from "./views/loginView";
export function router()
{
  const app = document.querySelector("#app")
  app.innerHTML=''
  const user = getConnectedUser()
  if (!user)
  {
    renderLogin(app)
  }
  else{
    renderHome(app,user)
  }
}