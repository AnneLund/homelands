import { ThemeProvider } from "styled-components";
import Footer from "./Components/Partials/Footer/Footer";
import Header from "./Components/Partials/Header/Header";
import { Theme } from "./Styles/Themes/Theme";
import Router from "./Components/Router/Router";
import { Globals } from "./Styles/Globals.styled";
import Flashmessages from "./Components/FlashMessages/FlashMessages";
import Modal from "./Components/Modal/Modal";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Globals />
      <Router />
      <Flashmessages />
      <Modal />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
