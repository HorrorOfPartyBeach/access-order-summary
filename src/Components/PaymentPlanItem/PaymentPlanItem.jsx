import React, { useState } from "react";
import Button from "../Button/Button";

const PaymentPlanItem = ({ planIcon }) => {
  const [planType, setPlanType] = useState("Annual");
  const [planPrice, setPlanPrice] = useState("$59.99");
  const planChoice = planType === "Annual" ? "year" : "month";

  const changePlan = () => {
    if (planType === "Annual") {
      setPlanType("Monthly");
      setPlanPrice("$9.99");
    }
    if (planType === "Monthly") {
      setPlanType("Annual");
      setPlanPrice("$59.99");
    }
  };

  return (
    <section className="flex bg-gray-50 justify-between align-middle rounded-sm p-2">
      <div className="inline-flex items-center">
        <div className="pr-6">{planIcon}</div>
        <div className="block pl-4 text-left" aria-live="polite">
          <div className="font-bold text-black">{planType}</div>
          <div className="text-gray-700">{`${planPrice}/${planChoice}`}</div>
        </div>
      </div>
      <Button
        className="text-purple-800 underline font-bold hover:no-underline hover:text-purple-600"
        ariaLabel={`Change payment plan from ${
          planType === "Annual" ? "Annual" : "Monthly"
        }`}
        text="Change"
        onClick={changePlan}
      />
    </section>
  );
};

export default PaymentPlanItem;
