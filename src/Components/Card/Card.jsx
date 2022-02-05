import React from "react";
import Button from "../Button/Button";

const Card = ({ cardTitle, cardBody, planOption, optionalText }) => {
  return (
    <div className="min-h-3/4 w-3/4 sm:w-1/2 md:max-w-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl align-middle text-lg m-auto shadow-md bg-white">
      <img
        className="rounded-t-lg"
        src={process.env.PUBLIC_URL + "/assets/images/illustration-hero.svg"}
        alt="happy dancing person wearing headphones and listening to music on their phone"
      />
      <div className="flex flex-col space-y-4 text-center">
        {/* <div className="flex flex-col space-y-4"> */}
        <span>{cardTitle}</span>
        <span>{cardBody}</span>
        {/* </div> */}
        <Button text="Proceed to Payment" />
        {optionalText && <div>{optionalText}</div>}
      </div>
    </div>
  );
};

export default Card;
