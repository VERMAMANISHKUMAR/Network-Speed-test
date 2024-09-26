import React, { useState } from 'react';
import Results from './Results';

const SpeedTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);
  const [ping, setPing] = useState(null);

  // Function to simulate network speed test
  const startSpeedTest = () => {
    setIsTesting(true);
    setDownloadSpeed(null);
    setUploadSpeed(null);
    setPing(null);

    // Simulate ping test (latency)
    setTimeout(() => {
      const simulatedPing = Math.floor(Math.random() * 100); // Random ping between 0-100 ms
      setPing(simulatedPing);

      // Simulate download speed test
      setTimeout(() => {
        const simulatedDownload = (Math.random() * 100).toFixed(2); // Random download speed between 0-100 Mbps
        setDownloadSpeed(simulatedDownload);

        // Simulate upload speed test
        setTimeout(() => {
          const simulatedUpload = (Math.random() * 50).toFixed(2); // Random upload speed between 0-50 Mbps
          setUploadSpeed(simulatedUpload);
          setIsTesting(false);
        }, 2000);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="speed-test">
      <div className="text-center my-4">
        <button 
          className="btn btn-primary btn-lg"
          onClick={startSpeedTest}
          disabled={isTesting}
        >
          {isTesting ? 'Testing...' : 'Start Speed Test'}
        </button>
      </div>

      <Results 
        downloadSpeed={downloadSpeed}
        uploadSpeed={uploadSpeed}
        ping={ping}
      />
    </div>
  );
};

export default SpeedTest;
