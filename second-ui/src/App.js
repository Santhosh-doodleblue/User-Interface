import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/First-Page/Home";
import Smart from "./Components/Second-Page/Smart";
import Choose from "./Components/Third-Page/Choose";

import Laptop from "./Components/Forth-Page/laptop";
import Digital from "./Components/Forth-Page/Last";

const App = () => (
  <div>
    <Home />
    <Smart />
    <Choose />
    <Digital />
    <Laptop />
  </div>
);

export default App;
