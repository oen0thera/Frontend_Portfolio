"use client";
import ContactItem from "@/components/Section/Contact/ContactItem";
import styles from "./contact.module.scss";
import sectionStyles from "@/components/Section/Section/section.module.scss";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_title}>
        <div className={styles.title_container}>
          <h1 className={sectionStyles.reveal}>Contact</h1>
        </div>
      </div>

      <div className={styles.contact_container}>
        <div className={sectionStyles.reveal}>
          <ContactItem type="github" />
        </div>
        <div className={sectionStyles.reveal}>
          <ContactItem type="email" />
        </div>
      </div>
    </div>
  );
}
