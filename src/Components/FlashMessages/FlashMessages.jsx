import { Flashmessage } from "./FloatingAlerts.Styled";
import useFlashMessageStore from "./useFlashMessageStore";

//Når FlashMessages skal bruges, skal følgende importeres i det relevante komponent:
//import { useFlashMessageStore } from "../FlashMessages/useFlashMessageStore";

//I funktionen indsættes:
// const { setFlashMessage } = useFlashMessageStore();

//Eksempel til brug:
//<button onClick={() => setFlashMessage("I am a Flash")}>Flash Me</button>


const FlashMessages = () => {
  const { flashMessages, flashDuration } = useFlashMessageStore();

  return (
    flashMessages &&
    flashMessages.map((msg, i) => (
      <Flashmessage  flashDuration={flashDuration} key={i}>
        <div >{msg}</div>
      </Flashmessage>
    ))
  );
};

export default FlashMessages;
