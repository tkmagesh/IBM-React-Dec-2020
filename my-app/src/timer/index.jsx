import { useState } from 'react';
import TimeDisplay from './timeDisplay';

export default function(){
    const [showTimer, setShowTimer] = useState(true);
    return(
        <div>
            <label>Show Timer : </label>
            <input 
                type="checkbox" 
                checked={showTimer} 
                onChange={ evt => setShowTimer(evt.target.checked)} 
            />
            { showTimer ? <TimeDisplay /> : null }
        </div>
    )
}