import React from 'react';
import TimerOut from './TimerOut';
import DownloadButton from './DownloadButton';
const FinalDownloadPage1080p = () => {
    return (
        <div>
           <p>To download the movie click below</p>
      <p>Generating the Fast-Download movie link </p>
      <TimerOut />
      <p>Generated the movie link </p>
      
      <DownloadButton />
        </div>
    );
}

export default FinalDownloadPage1080p;
