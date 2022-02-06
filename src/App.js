import { Fragment } from "react";
import "./App.css";
import Card from "./Components/Card/Card";
import PaymentPlanItem from "./Components/PaymentPlanItem/PaymentPlanItem";

const cardBody =
  "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!";

const App = () => {
  return (
    <Fragment>
      <div className="font-sans h-screen w-full bg-mobile-bg sm:bg-desktop-bg bg-repeat-x bg-contain bg-bottom-center">
        <Card
          cardTitle="Order Summary"
          cardBody={cardBody}
          optionalText="Cancel Order"
        >
          <PaymentPlanItem
            planIcon={
              <img
                src={process.env.PUBLIC_URL + "/assets/images/icon-music.svg"}
                alt="music note"
              />
            }
          />
        </Card>
      </div>
    </Fragment>
  );
};

export default App;
