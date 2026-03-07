import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const baseUrl = "http://127.0.0.1:9000/api/enroll";

function PaymentSuccess() {

  const { state } = useLocation();
  const navigate = useNavigate();

 useEffect(() => {

  if(!state){
    // alert("Payment data missing");
    navigate("/dashboard");
    return;
  }

  const saveEnrollment = async () => {

    const res = await fetch(`${baseUrl}/createEnroll`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        phone: state.phone,
        courseId: state.courseId,
        userId: state.userId
      })
    });

    const data = await res.json();

    if(data.success){
      alert("Payment Successful & Course Enrolled!");
      navigate("/dashboard");
    }

  };

  saveEnrollment();

}, []);


  return <h1 className="text-center mt-20 text-2xl">Processing Payment...</h1>;
}

export default PaymentSuccess;
