import React from "react";

const PaymentPlanItem = ({ text, onClick }) => {
  return (
    <button aria-label={text} type="button" className="" onClick={onClick}>
      {text}
    </button>
  );
};

export default PaymentPlanItem;
