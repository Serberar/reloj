import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState("");
  const [countDownDate, setCountDownDate] = useState(null);

  const handleCountDownDateChange = (e) => {
    const date = new Date(e.target.value).getTime();
    setCountDownDate(date);
  };

  useEffect(() => {
    let x = null;
    if (countDownDate) {
      x = setInterval(() => {
        let now = new Date().getTime();

        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTime(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");

        if (distance < 0) {
          clearInterval(x);
          setTime("La cuenta atras a finalizado");
        }
      }, 1000);
    }

    return () => clearInterval(x);
  }, [countDownDate]);

  return (
    <div className="countdown">
      <input type="datetime-local" onChange={handleCountDownDateChange} />
      {countDownDate ? <h2>{time}</h2> : <p>Insertar fecha</p>}
    </div>
  );
};

export default Countdown;
