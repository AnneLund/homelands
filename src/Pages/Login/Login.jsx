import { useState } from "react";
import { useLoginStore } from "./useLoginStore";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";
import { FormStyled } from "../../Styles/Form_Styled";
import Transitions from "../../Styles/Transition";
import { Page } from "../../Layout/Page";
import { ButtonStyled } from "../../Styles/PartialsStyled/Button_Styled";
import { Input } from "../../Styles/PartialsStyled/InputStyled";
import Admin from "../Admin/Admin";

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

  const LogMeIn = (e) => {
    e.preventDefault();

    const endPoint = "https://api.mediehuset.net/token";
    const username = user.username;
    const password = user.password;
    const data = { username, password };

    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "Ok") {
          setFlashMessage("Velkommen");
          data.user.user_id = data.user_id;
          setLoggedIn(true, data.user, data.username, data.access_token);
        } else {
          setFlashMessage("Ingen brugere med disse kriterier");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return !loggedIn ? (
    <Transitions>
      <Page title="Login">
        <h2>Login</h2>
        <h3>Indtast dit brugernavn og adgangskode for at logge ind</h3>

        <FormStyled onSubmit={LogMeIn}>
          <Input placeholder="Brugernavn" type="text" name="username" onChange={(e) => handleChange(e)} />
          <Input placeholder="Adgangskode" type="password" name="password" onChange={(e) => handleChange(e)} />
          <div>
            <ButtonStyled>Log ind</ButtonStyled>
            <ButtonStyled>Annullér</ButtonStyled>
          </div>
        </FormStyled>
      </Page>
    </Transitions>
  ) : (
    <Admin />
  );
};

export default Login;
