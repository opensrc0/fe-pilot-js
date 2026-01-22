import React, { useState } from "react";
import { Share } from "fe-pilot/Share";
import { WakeLock } from "fe-pilot/WakeLock";

export default function WakeLockDemo({ index }) {
  const [wakeLockVal, setWakeLockVal] = useState({});

  return (
    <React.Fragment>
      <WakeLock
        failureCb={(props) => {
          setWakeLockVal(props);
        }}
        successCb={(props) => {
          setWakeLockVal(props);
        }}
      >
        <div className="grid-item">
          🔋 &nbsp; WakeLock
          <div className="heading">
            <div className="padding-right-36">✅</div>
            <div>✅</div>
          </div>
        </div>
      </WakeLock>
      {wakeLockVal.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setWakeLockVal({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{wakeLockVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{wakeLockVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{wakeLockVal.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(wakeLockVal.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {wakeLockVal.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setWakeLockVal({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{wakeLockVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{wakeLockVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{wakeLockVal.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
