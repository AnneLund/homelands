import { useState } from "react";
import { useLoginStore } from "./useLoginStore";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";
import { Form_Styled } from "../../Styles/Form_Styled";
import Transitions from "../../Styles/Transition";
import { Navigate } from "react-router-dom";
import { Page } from "../../Layout/Page";

const Login = () => {
  const { setLoggedIn, loggedIn } = useLoginStore();
  const { setFlashMessage } = useFlashMessageStore();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  //Login funktion

  const LogMeIn = async (e) => {
    // Jeg vil forhindre at siden reloader når der trykkes på submit (default-behavior)
    e.preventDefault();

    try {
      const endPoint = "https://api.mediehuset.net/token";
      const username = user.username;
      const password = user.password;
      const data = { username, password };

      const response = await fetch(endPoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (json.status === "Ok") {
        setFlashMessage("Velkommen");
        json.user.user_id = json.user_id;
        setLoggedIn(true, json.user, json.username, json.access_token);
      } else {
        setFlashMessage("Ingen brugere med disse kriterier");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // .then((response) => response.json())
  // .then((data) => {
  //   if (data.status === "Ok") {
  //     setFlashMessage("Velkommen");
  //     data.user.user_id = data.user_id;
  //     setLoggedIn(true, data.user, data.username, data.access_token);
  //   } else {
  //     setFlashMessage("Ingen brugere med disse kriterier");
  //   }
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });

  return !loggedIn ? (
    <Transitions>
      <Page>
        <header>
          <h2>Log ind</h2>
        </header>

        <Form_Styled onSubmit={LogMeIn}>
          <input type="text" name="username" onChange={(e) => handleChange(e)} />
          <input type="password" name="password" onChange={(e) => handleChange(e)} />
          <button>Log ind</button>
        </Form_Styled>
      </Page>
    </Transitions>
  ) : (
    <Navigate to="/" />
  );
};

export default Login;
