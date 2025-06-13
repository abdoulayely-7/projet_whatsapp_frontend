import { loadContacts } from "../services/contact";
import { contactElement, activerContact, renderSection } from "../components/section";
export async function afficherContact() {
  const sectionContact = renderSection()
  const liste = document.querySelector("#liste-contacts")

  const contacts = await loadContacts()

  contacts.forEach(contact => {
    const li = contactElement(contact);

    activerContact(li, contact);
    liste.append(li);


  });
  console.log('ul:', liste);


}