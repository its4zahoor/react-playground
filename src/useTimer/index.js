import React, { useEffect, useState } from "react";

function CountUpTimer(props) {
  const startDateTime = new Date(2020, 8, 30, 12, 57, 59, 0); // YYYY (M-1) D H m s ms (start time and date from DB)
  const startStamp = startDateTime.getTime();

  const [time, setTime] = useState("");

  useEffect(() => {
    function updateClock() {
      const newDate = new Date();
      const newStamp = newDate.getTime();
      let diff = Math.round((newStamp - startStamp) / 1000);

      const d = Math.floor(diff / (24 * 60 * 60));
      diff = diff - d * 24 * 60 * 60;
      const h = Math.floor(diff / (60 * 60));
      diff = diff - h * 60 * 60;
      const m = Math.floor(diff / 60);
      diff = diff - m * 60;
      const s = diff;

      let strTime = "";
      strTime += d ? `${d}d ` : "";
      strTime += h ? `${h}h ` : "";
      strTime += m ? `${m}m ` : "";
      strTime += `${s}s`;
      setTime(strTime);
    }
    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  return <div>{time}</div>;
}

export default CountUpTimer;
