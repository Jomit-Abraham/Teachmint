export  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes} Min :${seconds < 10 ? '0' : ''}${seconds} Sec`;
  };

  export  const calculateTimeDifference = (startTime) => {
    const currentTime = new Date();
    const difference = Math.floor((currentTime - startTime) / 1000); // in seconds
    return difference;
  };