import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Donate=()  => {
    return(<>
    <div className="my-5">
        <h3 className="display-6" align="center">You can Help them!</h3>
        <div className="container-fluid mb-5">
          <div className='row'>
            <div className="col-10 mx-auto">
              <div className='row gy-4'>
              {
                Sdata.map((val,ind)=>{
                return <Card
                imgsrc={val.imgsrc}
                title={val.title} />})
              }
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
    );
};

export default Donate;