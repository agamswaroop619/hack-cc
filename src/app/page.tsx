import React from "react";
import Navbar from "./components/navbar";
import DaysLeft from "./components/daysleft";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <DaysLeft value={85} />
    </div>
  );
};

export default Home;
