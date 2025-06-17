import { renderAside } from "../components/aside";
import { renderSection } from "../components/section";
import { renderMain } from "../components/maine";
import { afficherContact, showBtnClick } from "../controllers/ContactController";
import { renderFormAddContact } from "../components/add.contact";
import { renderBtnAdd } from "../components/btnAdd";
import { createIcons, icons } from 'lucide';
export function showHome(app) {
  app.innerHTML = '';
  const aside = renderAside()
  const section = renderSection()
  const main = renderMain()
  // const addContact = renderFormAddContact()
  // const btnAdd = renderBtnAdd()
  app.appendChild(aside)
  app.appendChild(section)
  app.appendChild(main)

  afficherContact()
  showBtnClick(section)







}
