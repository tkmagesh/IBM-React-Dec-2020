import { useState, useEffect } from 'react';

function useTimer(){
    const [currentDate, setCurrentDate ] = useState(new Date());
    useEffect(() => {
        console.log('component initialized');
        const timerId =  setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            console.log('component unloaded');
            if (timerId){
                clearInterval(timerId);
            }
        };
    }, [] )
    return currentDate;
}

export default useTimer;