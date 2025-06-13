import { getConnectedUser } from "./store/userStore";
import { showLogin } from "./controllers/loginController";
import { showHome } from "./views/homeView";

export function router() {
  const app = document.querySelector("#app")
  app.innerHTML = ''
  const user = getConnectedUser()
  
  if (!user) {
    showLogin(app)
  }
  else {
    showHome(app,user)
  }
}