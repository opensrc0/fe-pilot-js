import React, { useState, useEffect } from "react";
import { copyToClipboard, CopyToClipboard } from "fe-pilot/CopyToClipboard";

export default function CopyToClipboardDemo({ index }) {
  const [clipboard, setClipboard] = useState({});

  return (
    <React.Fragment>
      <CopyToClipboard
        elementToBeCopy={`Fe-pilot library offers component like scanner, voice search, autofill otp, phonebook, share`}
        failureCb={(props) => {
          setClipboard(props);
        }}
        successCb={(props) => {
          setClipboard(props);
        }}
      >
        <div className="grid-item">
          📋 &nbsp; Copy to Clipboard
          <div className="heading">
            <div className="padding-right-36">✅</div>
            <div>✅</div>
          </div>
        </div>
      </CopyToClipboard>
      {clipboard.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setClipboard({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{clipboard.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{clipboard.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{clipboard.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(clipboard.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {clipboard.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setClipboard({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{clipboard.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{clipboard.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{clipboard.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
