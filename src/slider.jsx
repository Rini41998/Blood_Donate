import { useEffect } from "react"

export default function Slider()
{
    useEffect(()=>window.sliderPage(),[])
    return <>
          <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="section-title bg-white text-center text-primary px-3">Pulse Donor </h6>
                <h1 className="mb-5"> Blood Donation , Life Donation </h1>
            </div>
            <div className="owl-carousel testimonial-carousel position-relative">
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/home1.jpeg" style={{width:"80px" , height:"80px"}}/>
                    <h5 className="mb-0">     </h5>
                    <p>     </p>
                    <p className="mb-0"> Blood donation is a simple yet profoundly impactful act that can save lives, provide hope, and improve the well-being of individuals in dire need. </p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/home2.jpeg" style={{width:"80px" , height:"80px"}}/>
                    <h5 className="mb-0">     </h5>
                    <p>     </p>
                    <p className="mt-2 mb-0">Blood is a precious resource that plays a vital role in various medical procedures and emergencies, and its availability is essential for the survival of many patients.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/home3.jpeg" style={{width:"80px" , height:"80px"}}/>
                    <h5 className="mb-0">     </h5>
                    <p>     </p>
                    <p className="mt-2 mb-0">A single blood donation can be separated into various components, benefiting multiple patients. Red blood cells, plasma, and platelets are used individually to treat different medical conditions.</p>
                </div>
                <div className="testimonial-item bg-white text-center border p-4">
                    <img className="bg-white rounded-circle shadow p-1 mx-auto mb-3" src="img/home 4.jpeg" style={{width:"80px" , height:"80px"}}/>
                    <h5 className="mb-0">     </h5>
                    <p>     </p>
                    <p className="mt-2 mb-0">Blood donation is an act of unparalleled kindness and generosity, a gift of life itself. Its importance is immeasurable, and its impact reverberates throughout healthcare systems and communities worldwide. </p>
                </div>
            </div>
        </div>
    </div>
    </>
}