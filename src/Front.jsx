import Slider from "./slider";

export default function Front()
{
    return<>
      
      
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown"> "Donate blood, save lives" </h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown"> Being a blood donor truly makes you a hero in the eyes of those who benefit from your generosity.</p>
                        {/* <div className="position-relative w-75 mx-auto animated slideInDown">
                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Name"/><br></br>
                <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="number" placeholder="Mobile Number"/><br></br>
                <select className="form-control" >
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
                            <button type="button" className="btn btn-primary " style={{marginTop:"7px"}} >Send</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
 
   {/* Images */}
    <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item" style={{height:"400px"}}>
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/home 12.jpg" alt=""  style={{height:"250px",width:"300px"}} />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop:"-19px"}}>

                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0"> </h5>
                            <small  style={{color:"black",fontSize:"20px" }}  > "Your blood could be the reason someone smiles tomorrow. " </small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    < div className="team-item" style={{height:"400px"}}>
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/home 9.jpg" alt=""  style={{height:"250px"}} />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop:"-19px"}}>
                            
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0"> </h5>
                            <small  style={{color:"black",fontSize:"20px"  }}  >"One donation can make a world of difference. Give blood today!" </small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item" style={{height:"400px"}}>
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/home 13.jpg" alt=""  style={{height:"250px"}} />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop:"-19px"}}>
                           
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0"> </h5>
                            <small style={{color:"black" ,fontSize:"20px" }} > "Blood donation: a small act of kindness with a huge impact."</small>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item" style={{height:"400px"}}>
                        <div className="overflow-hidden">
                            <img className="img-fluid" src="img/home 10.jpeg" alt="" style={{height:"250px"}} />
                        </div>
                        <div className="position-relative d-flex justify-content-center" style={{marginTop:"-19px"}}>
                          
                        </div>
                        <div className="text-center p-4">
                            <h5 className="mb-0"></h5>
                            <small  style={{color:"black",fontSize:"20px"  }}  >"Join the movement! Your donation can change lives. "</small>
                        </div>
                    </div>
                </div>
            </div>

            <Slider/>

    </>
}