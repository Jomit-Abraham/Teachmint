import { TableCell} from '@mui/material';
import React, { useEffect, useState } from 'react';

const CustomTableCell = (props) => {
    const isActive=useState(props.isActive) 

    const [totalSeconds, setTotalSeconds] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTotalSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);
        } else if (!isActive && totalSeconds !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, totalSeconds]);
    
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes} Min :${seconds < 10 ? '0' : ''}${seconds} Sec`;
      };
  return (
    
              <TableCell>{formatTime(totalSeconds)}</TableCell>
             
  );
};

export default CustomTableCell;
