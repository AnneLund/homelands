import React, { useEffect, useState } from "react";
import AppService from "../../../Components/Appservices/Appservice";
import { useLoginStore } from "../../../Pages/Login/useLoginStore";
import { ButtonStyled } from "../../../Styles/PartialsStyled/Button_Styled";
import { AdminStyled } from "../AdminStyled";
import Transitions from "../../../Styles/Transition";
import { useNavigate } from "react-router-dom";

const Comments = ({ reviewID }) => {
  const { userInfo, loggedIn, setLoggedIn } = useLoginStore();
  const [comments, setComments] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const navigate = useNavigate();

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
    <Transitions>
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
                            setDeleted((prevDeleted) => !prevDeleted);
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
                navigate("/login");
              }}>
              <ButtonStyled>Log ud</ButtonStyled>
            </li>
          ) : null}
        </div>
      </AdminStyled>
    </Transitions>
  );
};

export default Comments;
