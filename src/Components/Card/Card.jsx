import React from "react";
import Button from "../Button/Button";
import PaymentPlanItem from "../PaymentPlanItem/PaymentPlanItem";

const annualPrice = "$59.99";

const Card = ({ cardTitle, cardBody, planOption, optionalText }) => {
  return (
    <div className="min-h-3/4 w-3/4 sm:w-1/2 md:max-w-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl align-middle text-lg m-auto shadow-md bg-white">
      <img
        className="rounded-t-lg"
        src={process.env.PUBLIC_URL + "/assets/images/illustration-hero.svg"}
        alt="happy dancing person wearing headphones and listening to music on their phone"
      />
      <div className="flex flex-col px-6 space-y-4 text-center">
        <span className="pt-6 pb-2 text-indigo-900 text-2xl font-bold">
          {cardTitle}
        </span>
        <span className="text-slate-700 text-base font-normal">{cardBody}</span>
        <PaymentPlanItem
          planIcon={
            <img
              src={process.env.PUBLIC_URL + "/assets/images/icon-music.svg"}
              alt="music note"
            />
          }
          planType="Annual"
          planPrice={annualPrice}
        />
        <Button text="Proceed to Payment" />
        {optionalText && <div>{optionalText}</div>}
      </div>
    </div>
  );
};

export default Card;
