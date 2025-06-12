import { renderAside } from "../components/aside";
import { renderSection } from "../components/section";
import { renderMain } from "../components/maine";
export function showHome(app) {
  app.innerHTML = '';
  const aside = renderAside()
  const section = renderSection()
  const main = renderMain()
  app.appendChild(aside)
  app.appendChild(section)
  app.appendChild(main)

}
