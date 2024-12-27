import ContactItem from "@/components/Section/Contact/ContactItem";
import styles from "./contact.module.scss";
import {
  ContactItemProps,
  ContactItemType,
} from "@/type/Contact/ContactItem.type";

export default function Contact() {
  const ContactLink: ContactItemProps = {
    type: ContactItemType.LINK,
  };
  const ContactDirect: ContactItemProps = {
    type: ContactItemType.CONTACT,
  };
  return (
    <div className={styles.contact}>
      <div className={styles.contact_title}>
        <div className={styles.title_container}>
          <h1>Contact</h1>
        </div>
      </div>

      <div className={styles.contact_container}>
        <ContactItem item={ContactLink} />
        <ContactItem item={ContactDirect} />
      </div>
    </div>
  );
}
