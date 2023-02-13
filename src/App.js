import { ThemeProvider } from "styled-components";
import Footer from "./Components/Partials/Footer";
import Header from "./Components/Partials/Header/Header";
import { Theme } from "./Styles/Themes/Theme";
import Router from "./Components/Router/Router";
import { Globals } from "./Styles/Globals.styled";
import Flashmessages from "./Components/FlashMessages/FlashMessages";
import Modal from "./Components/Modal/Modal";
import Breadcrumbs from "./Components/Router/BreadCrumbs/Breadcrumbs";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Header />
      <Breadcrumbs />
      <Globals />
      <Router />
      <Flashmessages />
      <Modal />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
