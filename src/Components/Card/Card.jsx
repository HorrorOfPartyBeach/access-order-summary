import React from "react";
import classnames from "tailwindcss-classnames";
import Button from "../Button/Button";

const Card = ({ cardTitle, cardBody, children, className }) => {
  return (
    <div className="min-h-3/4 w-3/4 sm:w-1/2 md:max-w-400 pb-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl align-middle text-lg m-auto shadow-md bg-white">
      <img
        className="rounded-t-lg"
        src={process.env.PUBLIC_URL + "/assets/images/illustration-hero.svg"}
        alt="happy dancing person wearing headphones and listening to music on their phone"
      />
      <div className="flex flex-col px-6 space-y-4 text-center">
        <h1 className="pt-6 pb-2 text-indigo-900 text-2xl font-bold">
          {cardTitle}
        </h1>
        <section className="text-slate-700 text-base font-normal">
          {cardBody}
        </section>
        {children}
        <Button
          text="Proceed to Payment"
          className="bg-indigo-800 text-white rounded-full shadow-lg hover:bg-indigo-600 focus:bg-indigo-600"
        />
        <Button
          text="Cancel Order"
          className={classnames(
            "font-bold hover:text-black text-gray-600",
            className
          )}
        />
      </div>
    </div>
  );
};

export default Card;
