import React, { useState } from "react";
import { db } from "./Firebase";

const Feedback=()  => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("feedback")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your feedback has been submitted");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };


    return(<>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">

                <form className="form" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email adress</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Feedback/Suggestions</label>
                    <textarea class="form-control" value={message} onChange={(e) => setMessage(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                 <button type="submit" className="btn" style={{ background: loader ? "#fff" : "#efddff" }}>Submit</button>
               </form>
               <br></br>
            </div>
        </div>
    </div>
    </>
    );
};

export default Feedback;