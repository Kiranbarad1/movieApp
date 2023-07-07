import React from 'react';
import TimerOut from './TimerOut';
import DownloadButton from './DownloadButton';
const FinalDownloadPage480p = () => {
    return (
        <>
            <p>To download the movie click below</p>
      <p>Generating the Fast-Download movie link </p>
      <TimerOut />
      <p>Generated the movie link </p>
      
      <DownloadButton />
        </>
    );
}

export default FinalDownloadPage480p;
