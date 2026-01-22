import React, { useState } from "react";
import { autoFillOtp } from "fe-pilot/AutoFillOtp";

export default function AutoFillOtpDemo({ index }) {
  const [autoFillOTPVal, setAutoFillOTPVal] = useState({});
  const [isMsgOpen, setIsMsgOpen] = useState(false);

  const failureCb = (props) => {
    setAutoFillOTPVal(props);
  };

  const successCb = (props) => {
    setAutoFillOTPVal(props);
  };

  return (
    <React.Fragment>
      <div
        className="grid-item"
        onClick={() => {
          if (!isMsgOpen) {
            setIsMsgOpen(true);
            autoFillOtp({
              successCb,
              failureCb,
              successMsg: "Success OTP Autofill",
              failureMsg: {
                unSupported: "AutoFillOtp is not supporting in your device",
                error: "AutoFillOtp error",
              },
            });
          } else {
            setIsMsgOpen(false);
          }
        }}
      >
        🔑 &nbsp; Auto Fill OTP
        <div className="heading">
          <div className="padding-right-36">✅</div>
          <div>⛔</div>
        </div>
      </div>
      {isMsgOpen && autoFillOTPVal?.status !== "FAILURE" && (
        <React.Fragment>
          <br />
          Please send below msg to your device
          <br />
          <div className="msg-tab">
            <div className="msg">
              User, Your OTP is 123456
              {""}
              <br />
              <br />
              @6jpxdq.csb.app #123456
            </div>
          </div>
          <b>Note:</b>
          1. Msg should contain the OTP. <br />
          2. Last line of msg should be @domain-name #otp
          <br />
          3. Sender number should be saved in your device. <br />
          4. Msg should be send with in a min. <br />
          <br />
        </React.Fragment>
      )}
      {autoFillOTPVal.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div
              class="modal-close"
              onClick={() => {
                setAutoFillOTPVal({});
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
                <td>{autoFillOTPVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{autoFillOTPVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{autoFillOTPVal.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(autoFillOTPVal.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {autoFillOTPVal.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div
              class="modal-close"
              onClick={() => {
                setAutoFillOTPVal({});
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
                <td>{autoFillOTPVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{autoFillOTPVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{autoFillOTPVal?.msg?.message || autoFillOTPVal?.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
