import { Fragment } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

const textBody =
  "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!";

const App = () => {
  return (
    <Fragment>
      <div className="h-screen w-full bg-mobile-bg sm:bg-desktop-bg bg-repeat-x bg-contain bg-bottom-center">
        <Card
          cardTitle="Order Summary"
          cardBody={textBody}
          optionalText="Cancel Order"
        />
      </div>
    </Fragment>
  );
};

export default App;
