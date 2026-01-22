import React, { useState } from "react";
import SnapScanner from "fe-pilot/SnapScanner";

export default function SnapScannerDemo({ index }) {
  const [snapScannerVal, setSnapScannerVal] = useState({});

  return (
    <React.Fragment>
      <SnapScanner
        position="static"
        color="black"
        failureCb={(props) => {
          setSnapScannerVal(props);
        }}
        successCb={(props) => {
          setSnapScannerVal(props);
        }}
      >
        <div className="grid-item">
          📲🔍 Snap Scanner (Gallery)
          <div className="heading">
            <div className="padding-right-36">✅</div>
            <div>⛔</div>
          </div>
        </div>
      </SnapScanner>
      <SnapScanner
        position="static"
        color="black"
        via="camera"
        failureCb={(props) => {
          setSnapScannerVal(props);
        }}
        successCb={(props) => {
          setSnapScannerVal(props);
        }}
      >
        <div className="grid-item">
          📲🔍 Snap Scanner (Camera)
          <div className="heading">
            <div className="padding-right-36">✅</div>
            <div>⛔</div>
          </div>
        </div>
      </SnapScanner>
      {snapScannerVal.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setSnapScannerVal({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{snapScannerVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{snapScannerVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{snapScannerVal.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(snapScannerVal.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {snapScannerVal.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setSnapScannerVal({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{snapScannerVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{snapScannerVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{snapScannerVal.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
