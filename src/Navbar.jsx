// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import {delData} from  "./reduxconfig/UserSlice";

// export default function Navbar()
// {
//   const user = useSelector(store=>store.user.value);
//     return<>
  
//     <header className="header_section">
//       <div className="header_bottom">
//         <div className="container-fluid">
//           <nav className="navbar navbar-expand-lg custom_nav-container ">
//             <a className="navbar-brand" href="index.html">
//               <span>
//               <img src="img/logo.png" alt="Logo" style={{height:"75px"}} />
//               </span>
//             </a>

//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className=""> </span>
//             </button>
//            {user.islogin?<LogMenu/>:<WebMenu/>}
//           </nav>
         
//         </div>
//       </div>
//     </header>
//       </>
// }


// const LogMenu = ()=>
//   {
//     const dispatch = useDispatch()
//     return <>
//                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav ">
//                   {/* <li className="nav-item active">
//                     <Link to="/" className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></Link>
                   
//                   </li> */}
                  
                  
//                   <li className="nav-item">
//                   <b to="/login" onClick={()=>dispatch(delData())} className="btn btn-primary rounded-pill py-2 px-4">Log out</b>
//                   </li>
                  
//                 </ul>
//               </div>  
//     </>
//   }
  


// const WebMenu = ()=>
// {
//   return <>
//                <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav ">
//                 <li className="nav-item active">
//                   <Link to="/" className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></Link>
                 
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/about" className="nav-link" href="about.html"> About</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/register" className="nav-link" >Become a Donor</Link>
//                 </li>
//                 <li className="nav-item">
//                 <Link to="/login"  className="btn btn-primary rounded-pill py-2 px-4">Login</Link>
//                 </li>
                
//               </ul>
//             </div>  
//   </>
// }

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delData } from "./reduxconfig/UserSlice";
import { useState } from "react";

export default function Navbar() {
  const user = useSelector((store) => store.user.value);
  return (
    <>
      <header className="header_section">
        <div className="header_bottom">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" to="/">
                <img src="img/logo.png" alt="Logo" style={{ height: "75px" }} />
              </Link>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                {user.islogin ? <LogMenu /> : <WebMenu />}
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

const LogMenu = () => {
  const dispatch = useDispatch();
  return (
    <>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <button
            className="btn btn-primary rounded-pill py-2 px-4"
            onClick={() => dispatch(delData())}
          >
            Log out
          </button>
        </li>
      </ul>
    </>
  );
};

const WebMenu = () => {
  return (
    <>
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Become a Donor
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">
            Login
          </Link>
        </li>
      </ul>
    </>
  );
};








// export default function Navbar()
// {
//     return <>
//           <nav classNameName="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
//             <a href="" classNameName="navbar-brand p-0">
//                 {/* <h1 classNameName="text-primary m-0"><i classNameName="fa fa-map-marker-alt me-3"></i>Tourist</h1> */}
//                  <img src="img/logo.png" alt="Logo"  />
//             </a>
//             <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                 <span classNameName="fa fa-bars"></span>
//             </button>
//             <div classNameName="collapse navbar-collapse" id="navbarCollapse">
//                 <div classNameName="navbar-nav ms-auto py-0">
//                     <Link to="/" classNameName="nav-item nav-link active">Home</Link>
//                     <Link to="/about" classNameName="nav-item nav-link">About</Link>
//                     {/* <Link to="/contact" classNameName="nav-item nav-link">Contact</Link> */}
//                     <Link to="/register" classNameName="nav-item nav-link">Become a Donor</Link>
//                 </div>
//                 <Link to="/login" classNameName="btn btn-primary rounded-pill py-2 px-4">Login</Link>
//             </div>
//         </nav>
//     </>
// }