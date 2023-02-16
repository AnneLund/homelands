import React, { useEffect, useState } from "react";
import AppService from "../../../Components/Appservices/Appservice";
import styled from "styled-components";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import { useParams } from "react-router-dom";
import { ButtonStyled } from "../../../Styles/PartialsStyled/Button_Styled";
import { AdminStyled } from "../AdminStyled";

export const UserComment = styled.figure`
  display: flex;
  border: grey 1px solid;
  padding: 1em;
  color: black;
  text-align: left;
  margin-bottom: 1em;

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
  figcaption {
    padding: 0 1em;
    h4 {
      margin: 0;
    }

    .created {
      font-size: 0.7em;
      margin-bottom: 1.5em;
    }

    p {
      font-weight: 100;
    }
  }

  button {
    width: 10%;
    background-color: #ff00005f;
  }

  img {
    width: 10%;
  }
`;
const Comments = ({ reviewID }) => {
  const { userInfo, loggedIn, setLoggedIn } = useLoginStore();
  const [comments, setComments] = useState([]);
  const [deleted, setDeleted] = useState(false);
  console.log(reviewID);

  useEffect(() => {
    const renderComments = async () => {
      try {
        const response = await AppService.GetList("reviews");
        if (response.data) {
          setComments(response.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    };

    renderComments();
  }, [deleted, reviewID]);

  return (
    <>
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
              {comments?.map((item) => {
                if (item.user_id.includes(userInfo.user_id)) {
                  return (
                    <tr key={item.id}>
                      <td>{item.title}</td>
                      <td>{item.created_friendly}</td>
                      <td>
                        <button className="red">Rediger</button>
                        <button
                          className="delete"
                          value={item.id}
                          onClick={() => {
                            AppService.Delete("reviews", item.id);
                            setDeleted(() => !deleted);
                          }}>
                          Slet
                        </button>
                      </td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
        </article>

        <div>
          <h4>Du er logget ind som {userInfo.firstname} </h4>
          {loggedIn ? (
            <li
              onClick={() => {
                setLoggedIn(false, "", "", "");
              }}>
              <ButtonStyled>Log ud</ButtonStyled>
            </li>
          ) : null}
        </div>
      </AdminStyled>
    </>
  );
};

export default Comments;
