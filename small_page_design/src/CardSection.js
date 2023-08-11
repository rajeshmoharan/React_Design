import React from "react";
import {MyCard,MyCardTwo,MyCardThree} from "./Card.js";


const CardSection = () => {
    return (
        <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white">
            We love new friends!
          </h2>
          <div className="row">
            <div className="col-4">
              <MyCard title="China Old Street" buttonName="Open"/>
            </div>
            <div className="col-4">
              <MyCardTwo title="Old Musium" buttonName="Visit"/>
            </div>
            <div className="col-4">
              <MyCardThree title="King Palace"  buttonName="View"/>
            </div>
          </div>
        </div>
      </section>
    )
}

export default CardSection;