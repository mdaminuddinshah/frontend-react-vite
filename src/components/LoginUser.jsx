import { useState } from "react";
import {authLogin} from "../api/authLogin.js";

function RegisterUser() {

    const [messages, setMessages] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();

      const elements = event.target.elements;
      const username = elements.username.value;
      const password = elements.password.value;

    // call API Register here  
    const data = await authLogin({
        username,
        password,
    });

    console.log(data)
    const token = data.token;

    setMessages(data.message);

    window.localStorage.setItem("Token", token);

    event.target.reset();
    }

  return (
    <form onSubmit={handleSubmit}>
        <h3>Login</h3>
        <fieldset>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" name="username" required/>
        </fieldset>
        <fieldset>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" required/>
        </fieldset>
        <button type="submit">Submit</button>
        <p>message: {messages}</p>
    </form>
  )
}

export default RegisterUser;
