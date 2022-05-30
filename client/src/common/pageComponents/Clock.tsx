import React, { useState, useEffect } from 'react';

function Clock(){
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  function pullHours() {
    let finalHours = 0
    if (date.getHours() === 0) {
      finalHours = 12
    }
    else if (date.getHours() >= 13) {
      finalHours = date.getHours() - 12
    }
    else {
      finalHours = date.getHours()
    }
    return finalHours
  }

  function dummyZero() {
    const showZero = "0"
    if (date.getMinutes() < 10) {
      return showZero
    }
    else {
      return
    }
  }

  function pullAMPM() {
    let AMPM = ""
    if (date.getHours() >= 13) {
      AMPM = "PM"
    }
    else {
      AMPM = "AM"
    }
    return AMPM
  }

  return (
    <span className="clock-text">
      {pullHours()}:{dummyZero()}{date.getMinutes()} {pullAMPM()}
    </span>
  );
};

export default Clock;