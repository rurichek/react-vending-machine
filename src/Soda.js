// import React from 'react';

// function Soda() {
//     return (
//         <div>
//             <h1>Time for some soda!</h1>
//       </div>
//     )
// }

// export default Soda;

// Soda.js
import React from "react";
import { Link } from "react-router-dom";

function Soda() {
    return (
        <div>
          <h1>Soda</h1>
          <p>Refreshing fizz and sweetness!</p>
          <Link to="/">Go back</Link>
        </div>
    );
}

export default Soda;

