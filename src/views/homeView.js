import { renderAside } from "../components/aside";
import { renderSection } from "../components/section";
import { renderMain } from "../components/maine";
import { afficherContact } from "../controllers/ContactController";
export function showHome(app) {
  app.innerHTML = '';
  const aside = renderAside()
  const section = renderSection()
  const main = renderMain()
  app.appendChild(aside)
  app.appendChild(section)
  app.appendChild(main)

  afficherContact()

}
