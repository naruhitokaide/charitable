import React, { useState } from "react";
import { db } from "./Firebase";

const Fundraiser=()  => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [cause, setCause] = useState("");
  const [file, setFile] = React.useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("fundraiser")
      .add({
        name: name,
        email: email,
        number: number,
        amount: amount,
        cause: cause,
        file: file
      })
      .then(() => {
        setLoader(false);
        alert("Your fundraiser request has been submitted. Once verification is done, we will reach out to you for further details. Thank You!");
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
    setFile([]);
  };

    return(<>
    <div className="my-5">
        <h3 className="display-6" align="center">Start a fundraiser!</h3>
        <p align="center">Help us with following information...</p>
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
                    <label for="exampleFormControlInput1" class="form-label">Amount Required</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Amount required for your fundaraiser"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Phone No</label>
                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Enter your Phone No"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Explain your cause</label>
                    <textarea class="form-control" value={cause} onChange={(e) => setCause(e.target.value)} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Upload your medical documents and aadhar card here</label>
                    <input type="file" value={file} onChange={(e) => setFile(e.target.value)} id="myFile" name="filename"/>
                    <br></br>
                    <br></br>
                    <center>
                    <button type="submit" className="btn" style={{ background: loader ? "#fff" : "#efddff" }}>Submit</button>
                    </center>
                </div>
                </form>
                <br></br>
            </div>
        </div>
    </div>
    </>
    );
};

export default Fundraiser;