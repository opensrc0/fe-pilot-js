import React, { useState } from "react";
import {
  networkMonitor,
  NetworkMonitor,
  OnlineToast,
  OfflineToast,
} from "fe-pilot/NetworkMonitor";

export default function NetworkMonitorDemo({ index }) {
  const [networkMonitorVal, setNetworkMonitorVal] = useState({});
  const failureCb = (props) => {
    setNetworkMonitorVal(props);
  };

  const successCb = (props) => {
    setNetworkMonitorVal(props);
  };

  return (
    <React.Fragment>
      <NetworkMonitor>
        <OnlineToast />
        <OfflineToast />
      </NetworkMonitor>
      <div
        className="grid-item"
        onClick={() => networkMonitor({ failureCb, successCb })}
      >
        📶 &nbsp; Network Monitor
        <div className="heading">
          <div className="padding-right-36">✅</div>
          <div>✅</div>
        </div>
      </div>
      {networkMonitorVal.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setNetworkMonitorVal({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{networkMonitorVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{networkMonitorVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{networkMonitorVal.msg}</td>
              </tr>
              <tr>
                <td>isOnline:</td>
                <td>{JSON.stringify(networkMonitorVal.data.isOnline)}</td>
              </tr>
              <tr>
                <td>type:</td>
                <td>{networkMonitorVal.data.type}</td>
              </tr>
              <tr>
                <td>effectiveType:</td>
                <td>{networkMonitorVal.data.effectiveType}</td>
              </tr>
              <tr>
                <td>downlink:</td>
                <td>{networkMonitorVal.data.downlink}</td>
              </tr>
              <tr>
                <td>rtt:</td>
                <td>{networkMonitorVal.data.rtt}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {networkMonitorVal.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setNetworkMonitorVal({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{networkMonitorVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{networkMonitorVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{networkMonitorVal.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
