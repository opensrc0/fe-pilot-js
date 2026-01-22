import React, { useState } from "react";
import { vibrate } from "fe-pilot/Vibrate";

export default function VibrateDemo({ index }) {
  const [vibrateVal, setVibrateVal] = useState({});
  const [isMsgOpen, setIsMsgOpen] = useState(false);

  const failureCb = (props) => {
    setVibrateVal(props);
  };

  const successCb = (props) => {
    setVibrateVal(props);
  };

  return (
    <React.Fragment>
      <div
        className="grid-item"
        onClick={() => {
          if (!isMsgOpen) {
            setIsMsgOpen(true);
            vibrate({
              successCb,
              failureCb,
            });
          } else {
            setIsMsgOpen(false);
          }
        }}
      >
        📳 &nbsp; Vibrate Device
        <div className="heading">
          <div className="padding-right-36">✅</div>
          <div>⛔</div>
        </div>
      </div>

      {vibrateVal.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div
              class="modal-close"
              onClick={() => {
                setVibrateVal({});
                setIsMsgOpen(false);
              }}
            />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{vibrateVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{vibrateVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{vibrateVal.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(vibrateVal.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {vibrateVal.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div
              class="modal-close"
              onClick={() => {
                setVibrateVal({});
                setIsMsgOpen(false);
              }}
            />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{vibrateVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{vibrateVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{JSON.stringify(vibrateVal.msg)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
