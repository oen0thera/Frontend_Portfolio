import Icons from "@/components/Icons/Icons";
import styles from "./EmailForm.module.scss";
import { init, sendForm } from "emailjs-com";
import { IconsType } from "@/type/Icons/Icons.type";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { publicEncrypt } from "crypto";

export default function EmailForm() {
  const [email, setEmail] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    init("wjsj1015@naver.com");
  }, []);

  useEffect(() => {}, [email]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (emailRef.current) {
      emailRef.current.setCustomValidity(" ");
    }
    setEmail(e.target.value);
  };

  const onSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailRef.current?.validity.valueMissing) {
      emailRef.current.setCustomValidity("이메일을 입력해주세요");
      emailRef.current.reportValidity();
    } else if (emailRef.current?.validity.typeMismatch) {
      emailRef.current.setCustomValidity(
        "이메일 형식(email@address.com)에 맞춰 입력해주세요"
      );
      emailRef.current.reportValidity();
    } else {
      if (formRef.current) {
        sendForm(
          "service_f7tdkoq",
          "template_c6pf18w",
          formRef.current,
          "mfwH9aUrn_iBkEOok"
        );
      } else {
        window.alert("Form error");
      }
    }
  };

  return (
    <div className={styles.email_form_container}>
      <form onSubmit={onSendEmail} ref={formRef} noValidate>
        <div className={styles.email_form_contents}>
          <div className={styles.email_form_inputs}>
            <div className={styles.email_form_row}>
              <h2>From : </h2>
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                value={email}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                ref={emailRef}
                required
              ></input>
            </div>
            <div className={styles.email_form_row}>
              <h2>To : </h2>
              <input type="email" value={"wjsj1015@naver.com"} disabled></input>
            </div>
          </div>
          <button className={styles.email_button} type="submit">
            <div className={styles.email_button_content}>
              <Icons src={IconsType.email} size={20} />
              {"Send Email"}
            </div>
          </button>
        </div>

        <div className={styles.email_form_text}>
          <textarea name="message"></textarea>
        </div>
      </form>
    </div>
  );
}
