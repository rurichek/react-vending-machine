// import React from "react";

// import './App.css';
// import VendingMachine from './VendingMachine'

// function App() {
//   return (
//     <div className="App">
//       <VendingMachine />

//     </div>
//   );
// }
// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar"
import VendingMachine from './VendingMachine';
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/chips" element={<Chips/>} />
          <Route path="/soda" element={<Soda/>} />
          <Route path="/sardines" element={<Sardines/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

