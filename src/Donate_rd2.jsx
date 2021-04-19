import React, { useState } from "react";
import { db } from "./Firebase";

const Donate_rd2=()  => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [cause, setCause] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("donations")
      .add({
        name: name,
        email: email,
        number: number,
        amount: amount,
        cause: cause,
      })
      .then(() => {
        setLoader(false);
        alert("Thank you for your donations!");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setNumber("");
    setAmount("");
    setCause("");
  };

    return(<>
    <div className="my-5">
        <h3 className="display-6" align="center">We are grateful for your help!</h3>
    </div>
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
                    <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone No"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Your cause</label>
                    <input type="text" value={cause} onChange={(e) => setCause(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Enter your full name"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Amount to be donated</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Amount you wish to donate"/>
                </div>

                <center><button type="submit" class="btn" style={{ background: loader ? "#fff" : "#efddff" }}>Proceed to Pay</button></center>
   
                </form>
                <br></br>
                <br></br>
            </div>
        </div>
    </div>
    </>
    );
};

export default Donate_rd2;