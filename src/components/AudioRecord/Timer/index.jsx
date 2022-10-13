import { useState } from 'react';

const Timer = props => {
  const { currenthours, currentMinutes, currentSeconds } = props;
  // const [currenthours, setCurrentHours] = useState(0);
  // const [currentMinutes, setCurrentMinutes] = useState(0);
  // const [currentSeconds, setCurrentSeconds] = useState(0);

  // let time = 0;
  // let cron;
  // const updateTimer = () => {
  //   const checkMinutes = Math.floor(time / 60);
  //   const hours = Math.floor(time / 3600);
  //   const minutes = checkMinutes % 60;
  //   const seconds = time % 60;
  //   setCurrentHours(hours);
  //   setCurrentMinutes(minutes);
  //   setCurrentSeconds(seconds);
  //   time++;
  // };

  // if (!isRecord) {
  //   updateTimer();
  //   cron = setInterval(updateTimer, 1000);
  // }
  
  
  return (
    <h1>
      {currenthours < 10 ? `0${currenthours}` : currenthours}:{currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes}:{currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds}
    </h1>
  );
};

export default Timer;
