// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import NavBar from "./NavBar";
// // import Home from "./Home";
// import Chips from "./Chips";
// import Soda from "./Soda";
// import Sardines from "./Sardines";
// import './App.css';

// function VendingMachine() {
//     return (
//         <div className="VendingMachine">
//         <BrowserRouter>
//           <NavBar />
//           <Routes>
//             <Route path="/chips" element={<Chips/>} />
//             <Route path="/soda" element={<Soda/>} />
//             <Route path="/sardines" element={<Sardines/>} />
//             {/* <Route path="/home" element={<Home/>} /> */}
//           </Routes>
//         </BrowserRouter>
//       </div>
//     )
// }

// export default VendingMachine

import React from "react";
import { Link } from "react-router-dom";
import './VendingMachine.css'; 

function VendingMachine() {
    return (
        <div className="VendingMachine">
          <h1>Welcome to the Vending Machine!</h1>
          <h2>Select a snack:</h2>
          <div className="VendingMachine-links">
            <Link to="/chips">Chips</Link>
            <Link to="/soda">Soda</Link>
            <Link to="/sardines">Sardines</Link>
          </div>
        </div>
    );
}

export default VendingMachine;
