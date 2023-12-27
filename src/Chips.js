// import React from 'react';

// function Chips() {
//     return (
//         <div>
//             <h1>Time for some chips!</h1>
//       </div>
//     )
// }

// export default Chips;

import React from "react";
import { Link } from "react-router-dom";

function Chips() {
    return (
        <div>
          <h1>Chips</h1>
          <p>Deliciously crunchy chips!</p>
          <Link to="/">Go back</Link>
        </div>
    );
}

export default Chips;
