import React from 'react';

const Results = ({ downloadSpeed, uploadSpeed, ping }) => {
  return (
    <div className="results mt-4 text-center">
      <div className="row">
        <div className="col-md-4">
          <div className="card bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">Download Speed</h5>
              <p className="card-text">
                {downloadSpeed !== null ? `${downloadSpeed} Mbps` : 'N/A'}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">Upload Speed</h5>
              <p className="card-text">
                {uploadSpeed !== null ? `${uploadSpeed} Mbps` : 'N/A'}
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card bg-light mb-3">
            <div className="card-body">
              <h5 className="card-title">Ping (Latency)</h5>
              <p className="card-text">
                {ping !== null ? `${ping} ms` : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
