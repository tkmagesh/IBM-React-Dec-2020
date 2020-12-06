/*
 import { useState, useEffect } from 'react';
 export default function TimeDisplay(){
    const [currentDate, setCurrentDate ] = useState(new Date());

    useEffect(() => {
        //this is executed when the component is initialized / updated
        console.log('component initialized');
        const timerId =  setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            //this is executed when the component is uninitialized
            console.log('component unloaded');
            if (timerId){
                clearInterval(timerId);
            }
        };
    }, [])

   
    return(
        <div><strong>{currentDate.toLocaleTimeString()}</strong></div>
    )
} */

import useTimer from './useTimer';

export default function TimeDisplay(){
    const currentDate = useTimer();
    return(
        <div><strong><i>{currentDate.toLocaleTimeString()}</i></strong></div>
    )
}