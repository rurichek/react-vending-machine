// import React from 'react';

// function Sardines() {
//     return (
//         <div>
//             <h1>Time for some sardines!</h1>
//       </div>
//     )
// }

// export default Sardines;

import React from "react";
import { Link } from "react-router-dom";

function Sardines() {
    return (
        <div>
          <h1>Sardines</h1>
          <p>Rich in omega3 and protein</p>
          <Link to="/">Go back</Link>
        </div>
    );
}

export default Sardines;
