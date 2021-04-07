import logo from "./logo.svg";
import ReactGA from "react-ga";

import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./components/main";
import Footer from "./components/footer";

const TRACKING_ID = "UA-194073116-1"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />

      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default App;
