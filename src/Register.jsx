import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS for any additional styles
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';



export default function Register()
    {
        const nameRef = useRef()
        const mobRef = useRef()
        const mailRef = useRef()
        const genderRef = useRef()
        const bloodRef = useRef()


        const register = (event)=>{
            event.preventDefault();
            const data = {
             name : nameRef.current.value,
             mobile : mobRef.current.value,
             email : mailRef.current.value,
            gender : genderRef.current.value,
            bloodGroup : bloodRef.current.value
            }
            fetch("http://localhost:8989/noauth/register" ,
                {
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
              } else{
                toast.error(result.msg)
              }           
            })
    
         }

        return <>
         <div className="container" >
                <div className="bg-light rounded">
           
            <div className="row">
            <div className="col-md-6 offset-md-3">
           <div className="signup-form">
                 <form onSubmit={register}>
                    <div className="row g-3">
                        <div className="col-sm-6">
                            <div className="form-floating">
                                <input type="text" className="form-control border-0" id="gname" placeholder=" Please Enter Your Name" ref={nameRef}  required/>
                                <label for="gname" className="text-dark" >Name </label>
                                </div>
                                 </div>
                <div className="col-sm-6">
                        <div className="form-floating">
                                <input type="number" className="form-control border-0" id="gmail" placeholder="Mobile Number" maxLength={"10"} minLength={"10"}  ref={mobRef}  required/>
                                <label for="mobile" className="text-dark">Mobile Number</label>
                        </div>
                </div>
                </div>
<br/>
                               
                <div className="row g-3">
                    <div className="col-sm-6">
                    <div className="form-floating">
                             <input type="email" className="form-control border-0" id="gname" placeholder="Email"  ref={mailRef}  required/>
                             <label htmlFor="gname" className="text-dark" >Email </label>
                            </div>
                            </div>
                             <div className="col-sm-6">
        <div className="mb-3 col-md-12">
         <select className="form-control"  ref={genderRef} required>
            <option value="">Choose Your Gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>  
        </select>
     </div>
 </div>

     <div className="mb-3 col-md-12">
          <select className="form-control"  ref={bloodRef} required>
              <option value="">Choose Blood Group</option>
              <option value="1">A+</option>
              <option value="2">A-</option>
              <option value="3">AB+</option>
              <option value="4">AB-</option>
              <option value="5">B+</option>
              <option value="6">B-</option>
              <option value="7">O+</option>
              <option value="8">O-</option>  
         </select>
      </div>
                                  
                                  
     <div className="col-12">
     <button className="btn btn-primary w-100 py-3" type="submit">Register</button>
     <div className="login-footer">
     Already have an Account? <Link to="/login" className="register-link">Login now</Link>
    </div>
        </div>
        </div>
        </form>
         </div>
        </div>
         </div>
          
        </div>
        </div>
        
        
        </>
    }





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'; // Custom CSS for any additional styles

// const App = () => {
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="col-md-6 offset-md-3">
//                     <div className="signup-form">
                       
// <form className="mt-5 border p-4 bg-light rounded">
// <div className="text-center">
//     <img src="img/img 5.jpeg" alt="Blood Donation" height="200" width="200" />
// </div>
// <br />
// <h4 className="mb-4 text-secondary" align="center">Create Your Account</h4>
// <div className="row">
//     <div className="mb-3 col-md-6">
//         <label>Name</label>
//         <input type="text" className="form-control" placeholder="Your Name" />
//     </div>

//     <div className="mb-3 col-md-6">
//         <label>Mobile</label>
//         <input type="text" className="form-control" placeholder="XXXXXXXXXX" />
//     </div>

//     <div className="mb-3 col-md-6">
//         <label>Email</label>
//         <input type="email" className="form-control" placeholder="abc@gmail.com" />
//     </div>

//     <div className="mb-3 col-md-6">
//         <label>Gender</label>
//         <input type="text" className="form-control" placeholder="Your Gender" />
//     </div>

//     <div className="mb-3 col-md-12">
//         <label>Choose Blood Group</label>
//         <select className="form-control">
//             <option value="">Choose Blood Group</option>
//             <option value="1">A+</option>
//             <option value="2">A-</option>
//             <option value="3">AB+</option>
//             <option value="4">AB-</option>
//             <option value="5">B+</option>
//             <option value="6">B-</option>
//             <option value="7">O+</option>
//             <option value="8">O-</option>
//         </select>
//     </div>

//     <div className="text-center">
//         <button className="btn btn-danger">Register</button>
//     </div>
// </div>
// </form>


//                     </div>
//                 </div>
//             </div>
          
//         </div>
//     );
// };

// export default App;

