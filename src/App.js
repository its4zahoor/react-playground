import React from "react";
import ImageScroll from "./imageScroll";
import TextShadow from "./text/textShadow";
import Lists from "./lists";
import useTimer from "./useTimer";
import ProductList from "@bit/its4zahoor.bit-react-tutorial.product-list";

const images = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
function App() {
  const startDateTime = new Date(2020, 8, 30, 12, 57, 59, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
  const time = useTimer(startDateTime);
  const startDateTime2 = new Date("2020-09-29T13:42:44.108Z"); // YYYY (M-1) D H m s ms (start time and date from DB)
  const time2 = useTimer(startDateTime2);
  return (
    <div>
      <div className="App">
        <ProductList />
      </div>
      <div>
        {time} <br /> {time2}
      </div>
      <ImageScroll images={images} windowSize={3} />
      <Lists />
      <TextShadow />
    </div>
  );
}

export default App;
