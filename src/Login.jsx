
// import { setData} from "./reduxconfig/UserSlice";

// import toast from "react-hot-toast";
// import { useDispatch } from "react-redux";
// import { Navigate, useNavigate } from "react-router-dom";

import { useRef } from "react"
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {setData} from "./reduxconfig/UserSlice";
import { useDispatch } from "react-redux";

export default function Login()
{
    const dispatch = useDispatch();
     const navigate = useNavigate();

     const mailRef = useRef()
     const passRef = useRef()

     const login = (event)=>{
        event.preventDefault();
        const data = {
          email : mailRef.current.value,
          password : passRef.current.value
        }
        fetch("http://localhost:8989/noauth/login",{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(result=>{
            console.log(result)
          if(result.status){
               event.target.reset()
               toast.success(result.msg)

               dispatch(setData(result.data));
              navigate(`/${result.data.role}`)
          } else{
            toast.error(result.msg)
          }           
        })

     }

    return <>
    
   
    <div className="container-xxl py-5">
            <div className="container">
                <div className="bg-light rounded">
                    <div className="row g-0">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 className="mb-4">Login User</h1>
                                <form onSubmit={login}>
                               
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control border-0" id="gname" placeholder="Email" ref={mailRef}  required/>
                                                <label htmlFor="gname" className="text-dark" >Email </label>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-floating">
                                                <input type="password" className="form-control border-0" id="gmail" placeholder="password" ref={passRef}  required/>
                                                <label htmlFor="gmail" className="text-dark">Password</label>
                                            </div>
                                        </div>
                                       
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit">Login</button>

                                            <div className="login-footer">
                     New here? <Link to="/register" className="register-link">Register now</Link>
                 </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded" src="img/appointment.jpg"></img>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </>
}


// import { useRef, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Login() {
//     const mailRef = useRef();
//     const passRef = useRef();
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const login = async (event) => {
//         event.preventDefault();
//         setLoading(true);

//         const data = {
//             email: mailRef.current.value,
//             password: passRef.current.value,
//         };

//         try {
//             const response = await fetch("http://localhost:8989/noauth/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(data),
//             });

//             if (!response.ok) {
//                 throw new Error("Login failed. Please try again.");
//             }

//             const result = await response.json();
//             alert(result.msg);

//             if (result.status) {
//                 event.target.reset();
//                 navigate("/dashboard"); // Redirect after successful login
//             }
//         } catch (err) {
//             console.error(err);
//             alert("An error occurred. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="container-xxl py-5">
//             <div className="container">
//                 <div className="bg-light rounded">
//                     <div className="row g-0">
//                         <div className="col-lg-6">
//                             <div className="h-100 d-flex flex-column justify-content-center p-5">
//                                 <h1 className="mb-4">Login User</h1>
//                                 <form onSubmit={login}>
//                                     <div className="row g-3">
//                                         <div className="col-sm-6">
//                                             <div className="form-floating">
//                                                 <input
//                                                     type="email"
//                                                     className="form-control border-0"
//                                                     id="email"
//                                                     placeholder="Email"
//                                                     ref={mailRef}
//                                                     required
//                                                 />
//                                                 <label htmlFor="email" className="text-dark">
//                                                     Email
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="col-sm-6">
//                                             <div className="form-floating">
//                                                 <input
//                                                     type="password"
//                                                     className="form-control border-0"
//                                                     id="password"
//                                                     placeholder="Password"
//                                                     ref={passRef}
//                                                     required
//                                                 />
//                                                 <label htmlFor="password" className="text-dark">
//                                                     Password
//                                                 </label>
//                                             </div>
//                                         </div>
//                                         <div className="col-12">
//                                             <button
//                                                 className="btn btn-primary w-100 py-3"
//                                                 type="submit"
//                                                 disabled={loading}
//                                             >
//                                                 {loading ? "Logging in..." : "Login"}
//                                             </button>
//                                             <div className="login-footer">
//                                                 New here?{" "}
//                                                 <Link to="/register" className="register-link">
//                                                     Register now
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                         {/* Optional image or other content */}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }





