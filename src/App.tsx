import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
// import Footer from "./Components/Footer";
import Footer from "./Components/DaisyUI/Footer";
// import Content from "./Components/Content";
import Content from "./Components/DaisyUI/Content";

import TailwindCSS from "./Components/Practice/index";
import Header from "./Components/DaisyUI/NavBar";

function App() {
  return (
    <div className="App">
      <TailwindCSS />
      {/* <div className="">
        <Header />
        <div className="flex content-start flex-nowrap">
          <div>
            <Sidebar />
          </div>
          <div>
            <Content />
          </div>
        </div>
        <Footer />
      </div> */}
      {/* <Header />
      <Content />
      <Footer /> */}
    </div>
  );
}

export default App;
