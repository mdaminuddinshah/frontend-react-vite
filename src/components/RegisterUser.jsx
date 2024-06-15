import {authRegister} from "../api/authRegister.js";
import {useState} from "react";

function RegisterUser() {

    const [messages, setMessages] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();

      const elements = event.target.elements
      const email = elements.emails.value;
      const username = elements.usernames.value;
      const password = elements.passwords.value;

    // call API Register here  
    const response = await authRegister({
        email,
        username,
        password,
    });

    console.log(response.message);
    setMessages(response.message);

      event.target.reset();
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Register</h3>
        <fieldset>
            <label htmlFor="emails">Email: </label>
            <input type="email" id="emails" name="emails" required/>
        </fieldset>
        <fieldset>
            <label htmlFor="usernames">Username: </label>
            <input type="text" id="usernames" name="usernames" required/>
        </fieldset>
        <fieldset>
            <label htmlFor="passwords">Password: </label>
            <input type="password" id="passwords" name="passwords" required/>
        </fieldset>
        <button type="submit">Submit</button>
        {messages}
    </form>
  )
}

export default RegisterUser;
