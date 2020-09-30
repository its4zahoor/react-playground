import React from "react";
// import App from "./imageScroll";
import useTimer from "./useTimer";

function App() {
  const startDateTime = new Date(2020, 8, 30, 12, 57, 59, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
  const time = useTimer(startDateTime);
  const startDateTime2 = new Date("2020-09-29T13:42:44.108Z"); // YYYY (M-1) D H m s ms (start time and date from DB)
  const time2 = useTimer(startDateTime2);
  return (
    <div>
      {time} <br /> {time2}
    </div>
  );
}

export default App;
