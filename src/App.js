import logo from "./logo.svg";
import ReactGA from "react-ga";

import Header from "./components/header";
import Hero from "./components/hero";
import Main from "./components/main";
import Footer from "./components/footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("UA-194073116-1");
    ReactGA.pageview("/");
  }, []);

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
