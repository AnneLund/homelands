import { Page } from "../../Layout/Page";
import { useLoginStore } from "../Login/useLoginStore";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Appservice from "../../Components/Appservices/Appservice";
import Comments from "./Comments/Comments";
import Transitions from "../../Styles/Transition";
import { useParams } from "react-router-dom";
import { useModalStore } from "../../Components/Modal/useModalStore";
import { ButtonStyled } from "../../Styles/PartialsStyled/Button_Styled";
import { SendReview } from "./SendReview";
import { AiOutlineClose } from "react-icons/ai";
import useFlashMessageStore from "../../Components/FlashMessages/useFlashMessageStore";

const Admin = () => {
  const { userInfo } = useLoginStore();
  const [reviewID, setReviewID] = useState(1);
  const { id } = useParams();
  const { setModalPayload, setToggleModal } = useModalStore();
  const { setFlashMessage } = useFlashMessageStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const postData = {
      user_id: data.user_id,
      id: id,
      title: data.title,
      content: data.content,
    };

    try {
      const response = await Appservice.Create("reviews", postData);
      if (response.status) {
        setReviewID(response.data.new_id);
        setFlashMessage("Sendt!");
        setTimeout(() => {
          setToggleModal("none");
        }, 2000);
        reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Transitions>
      <Page title="Administration">
        <Comments reviewID={reviewID} />
        <ButtonStyled
          onClick={() =>
            setModalPayload(
              <SendReview>
                <AiOutlineClose onClick={() => setToggleModal("none")} className="close" size={25} />
                <h2>Skriv en ny anmeldelse</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input type="hidden" {...register("id")} value={reviewID} />
                  <input type="hidden" {...register("user_id")} value={userInfo.user_id} />

                  {errors.title?.type === "required" && <p role="alert">Titlen er påkrævet</p>}
                  <input type="text" {...register("title")} placeholder="Titel" />

                  <textarea rows={5} {...register("content", { required: true })} id="content" placeholder="Din anmeldelse" />
                  <button type="submit">Send</button>
                </form>
              </SendReview>
            )
          }>
          Skriv en ny anmeldelse
        </ButtonStyled>
      </Page>
    </Transitions>
  );
};

export default Admin;
