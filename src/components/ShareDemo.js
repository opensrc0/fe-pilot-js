import React, { useState } from "react";
import Share from "fe-pilot/Share";

export default function ShareDemo({ index }) {
  const [share, setShare] = useState({});

  return (
    <React.Fragment>
      <Share
        failureCb={(props) => {
          setShare(props);
        }}
        successCb={(props) => {
          setShare(props);
        }}
      >
        <div className="grid-item">
          🔗 &nbsp; Share
          <div className="heading">
            <div className="padding-right-36">✅</div>
            <div>✅</div>
          </div>
        </div>
      </Share>
      {share.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setShare({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{share.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{share.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{share.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(share.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {share.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setShare({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{share.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{share.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{share.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
