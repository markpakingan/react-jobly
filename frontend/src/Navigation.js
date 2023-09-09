// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import UserContext from "../auth/UserContext"; // Import UserContext

// function Navigation() {
//   // Access the currentUser from UserContext
//   const { currentUser } = useContext(UserContext);

//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         {currentUser ? (
//           // If a user is logged in, display a "Logout" link
//           <li>
//             <Link to="/logout">Logout</Link>
//           </li>
//         ) : (
//           // If no user is logged in, display "Login" and "Signup" links
//           <>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/signup">Signup</Link>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navigation;
