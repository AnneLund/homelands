import React from "react";
import { Page } from "../../Layout/Page";
import { AdminStyled } from "./AdminStyled";
import { useLoginStore } from "../Login/useLoginStore";
import { ButtonStyled } from "../../Styles/PartialsStyled/Button_Styled";

const Admin = () => {
  const { loggedIn, setLoggedIn, userInfo } = useLoginStore();
  return (
    <Page title="Administration">
      <AdminStyled>
        <article>
          <h2>Administration</h2>
          <h3>Anmeldelser</h3>
          <table>
            <thead>
              <tr>
                <th>Titel</th>
                <th>Dato</th>
                <th>Handling</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Titlen</td>
                <td>Datoen</td>
                <td>
                  <button className="red">Rediger</button>
                  <button className="delete">Slet</button>
                </td>
              </tr>
            </tbody>
          </table>
        </article>

        <div>
          <h4>Du er logget ind som {userInfo.firstname} </h4>
          {loggedIn ? (
            <>
              <li
                onClick={() => {
                  setLoggedIn(false, "", "", "");
                }}>
                <ButtonStyled>Log ud</ButtonStyled>
              </li>
            </>
          ) : null}
        </div>
      </AdminStyled>
    </Page>
  );
};

export default Admin;
