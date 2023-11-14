// import { Link } from "react-router-dom";
import "./navbar.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">fiverr</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>English</span>
          <span>Explore</span>
          <span>Sign in</span>
          <span>Becomes a seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test1</span>
        <span>Test2</span>
      </div>
    </div>
  );
};

//export const Navbar = () => {
//   return (
//     <div className="navbar">
//       <div className="container">
//         <div className="logo">
//           <span className="text">fiverr</span>
//           <span className="dot">.</span>
//         </div>
//         <div className="links">
//           <span>Fiverr Business</span>
//           <span>English</span>
//           <span>Explore</span>
//           <span>Sign in</span>
//           <span>Becomes a seller</span>
//           <button>Join</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// .navbar {
//   .container {
//     .logo {
//       .text {
//       }
//       .dot {
//       }
//     }
//   }
//   .links {
//     span {
//     }
//   }
// }
