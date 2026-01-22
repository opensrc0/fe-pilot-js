import React, { useState, useRef } from "react";
import LocateMe from "fe-pilot/LocateMe";

export default function LocateMeDemo({ index }) {
  const [pincode, setPincode] = useState({});
  const [googleKey, setGoogleKey] = useState("");

  return (
    <React.Fragment>
      <div
        className="grid-item"
        onClick={() => setPincode({ status: "ADD_GOOGLE_KEY" })}
      >
        📍 &nbsp; Get my current location
        <div className="heading">
          <div className="padding-right-36">✅</div>
          <div>✅</div>
        </div>
      </div>
      {pincode.status === "ADD_GOOGLE_KEY" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setPincode({})} />
            <div className="form">
              <input
                placeholder="Enter googleKey"
                className="input"
                onChange={(e) => {
                  console.log(e.target.value);
                  setGoogleKey(e.target.value);
                }}
              />
              <LocateMe
                index={index}
                isProdKey={false}
                googleKey={googleKey}
                successCb={(props) => {
                  setPincode(props);
                }}
                failureCb={(props) => {
                  setPincode(props);
                }}
                loadingCb={(props) => {
                  setPincode(props);
                }}
              >
                <input type="submit" className="submit" />
              </LocateMe>
            </div>
          </div>
        </div>
      )}
      {pincode.status === "LOADING" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setPincode({})} />
            <div className="loading blink_me">Loading...</div>
          </div>
        </div>
      )}
      {pincode.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setPincode({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{pincode.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{pincode.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{pincode.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(pincode.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {pincode.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setPincode({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{pincode.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{pincode.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{pincode.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
