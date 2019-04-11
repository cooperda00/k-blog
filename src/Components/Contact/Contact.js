//Modules
import React, { useState } from "react";
//SASS
import styles from "./Contact.module.scss";

const Contact = () => {
  //STATE
  //Inputs
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [message, updateMessage] = useState("");
  //Placeholder control on focus
  const [nameFocus, updateNameFocus] = useState(true);
  const [emailFocus, updateEmailFocus] = useState(true);
  const [messageFocus, updateMessageFocus] = useState(true);
  //Messages to display
  const [error, displayError] = useState(false);
  const [sent, displaySent] = useState(false);

  return (
    <div className={styles.Contact}>
      <h1>Contact Me:</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (name && email && message) {
            //If all fields okay, send to backend
            console.log(
              `To get sent to backend: Name: ${name} Email: ${email} Message: ${message} `
            );
            //Display sent message
            displayError(false);
            displaySent(true);
            //Clear input fields
            updateName("");
            updateEmail("");
            updateMessage("");
            //Reset message after 5 secs
            setTimeout(() => {
              displaySent(false);
            }, 5000);
          } else {
            displayError(true);
          }
        }}
      >
        <label htmlFor="name">
          Name:
          <input
            name="name"
            type="text"
            placeholder={nameFocus ? "John Snow" : undefined}
            onFocus={() => {
              updateNameFocus(false);
            }}
            onBlur={() => {
              updateNameFocus(true);
            }}
            onChange={e => {
              updateName(e.target.value);
            }}
            value={name}
          />
        </label>

        <label htmlFor="email">
          Email:
          <input
            name="email"
            type="email"
            placeholder={emailFocus ? "johnS@westeros.got" : undefined}
            onFocus={() => {
              updateEmailFocus(false);
            }}
            onBlur={() => {
              updateEmailFocus(true);
            }}
            onChange={e => {
              updateEmail(e.target.value);
            }}
            value={email}
          />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            name="message"
            placeholder={
              messageFocus
                ? "I just want to let you know that you are great"
                : undefined
            }
            onFocus={() => {
              updateMessageFocus(false);
            }}
            onBlur={() => {
              updateMessageFocus(true);
            }}
            onChange={e => {
              updateMessage(e.target.value);
            }}
            value={message}
          />
        </label>
        <button>Submit</button>
      </form>
      {error ? (
        <p>Please fill out all fields</p>
      ) : sent ? (
        <h1>Thanks</h1>
      ) : (
        <p>
          Send me a message using the form above and I will endeavour to get
          back to you ASAP.
        </p>
      )}
    </div>
  );
};

export default Contact;
