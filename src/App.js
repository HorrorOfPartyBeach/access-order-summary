import { Fragment } from "react";
import "./App.css";
import Card from "./Components/Card/Card";

const App = () => {
  return (
    <Fragment className="relative">
      <div className="h-screen w-full bg-mobile-bg sm:bg-desktop-bg bg-repeat-x bg-contain bg-bottom-center">
        <Card />
      </div>
    </Fragment>
  );
};

export default App;
