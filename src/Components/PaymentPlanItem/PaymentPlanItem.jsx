import React from "react";
import Button from "../Button/Button";

const PaymentPlanItem = ({ planIcon, planType, planPrice }) => {
  return (
    <div className="flex bg-gray-100 justify-around items-center p-2">
      <div>{planIcon}</div>
      <div className="block">
        <div>{planType}</div>
        <div>{planPrice}</div>
      </div>
      <Button className="!bg-none" text="Change" />
    </div>
  );
};

export default PaymentPlanItem;
