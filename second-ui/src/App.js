import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/First-Page/Home";
import Smart from "./Components/Second-Page/Smart";
import Choose from "./Components/Third-Page/Choose";
import Last from "./Components/Forth-Page/Last";
import Laptop from "./Components/Forth-Page/laptop";

function App() {
  return (
    <div>
      <Home />
      <Smart />
      <Choose />
      <Last />
      <Laptop />
    </div>
  );
}

export default App;
