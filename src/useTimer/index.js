import { useEffect, useState } from "react";

function useTimer(startDateTime) {
  const [time, setTime] = useState("");

  useEffect(() => {
    function updateClock() {
      const startStamp = startDateTime.getTime();
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
  }, [startDateTime]);

  return time;
}

export default useTimer;
