import React, { useState, useRef } from "react";
import LiveLocationTracking from "fe-pilot/LiveLocationTracking";

export default function LiveLocationTrackingDemo({ index }) {
  const [location, setLocation] = useState({});
  const [googleKey, setGoogleKey] = useState("");
  const googleKeyRef = useRef();

  console.log("googleKeyRef", googleKeyRef.current?.value);
  return (
    <React.Fragment>
      <div
        className="grid-item"
        onClick={() => setLocation({ status: "ADD_GOOGLE_KEY" })}
      >
        🕹️ &nbsp; Live Location Tracking
        <div className="heading">
          <div className="padding-right-36">✅</div>
          <div>✅</div>
        </div>
      </div>
      {location.status === "ADD_GOOGLE_KEY" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setLocation({})} />
            <div className="form">
              <input
                placeholder="Enter googleKey"
                className="input"
                ref={googleKeyRef}
              />
              <input
                type="submit"
                className="submit"
                onClick={() => {
                  setGoogleKey(googleKeyRef.current?.value);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {googleKey && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setGoogleKey("")} />
            <div className="form">
              <LiveLocationTracking
                googleKey={googleKey}
                isProdKey={false}
                destinationLatLng={{ lat: 12.9541033, lng: 77.7091133 }}
                successCb={(props) => {
                  setLocation({});
                }}
                failureCb={(props) => {
                  setLocation(props);
                }}
                loadingCb={(props) => {
                  setLocation(props);
                }}
              />
            </div>
          </div>
        </div>
      )}
      {location.status === "LOADING" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setLocation({})} />
            <div className="loading blink_me">Loading...</div>
          </div>
        </div>
      )}
      {location.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setLocation({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{location.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{location.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{location.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(location.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

// {location.status === "FAILURE" && (
//   <div className="modal">
//     <div className="modal-body">
//       <div class="modal-close" onClick={() => setLocation({})} />
//       <table border={1} cellPadding={12} width={"100%"}>
//         <tr>
//           <th>Property</th>
//           <th>Value</th>
//         </tr>
//         <tr>
//           <td>Status: </td>
//           <td>{location.status}</td>
//         </tr>
//         <tr>
//           <td>Msg Type:</td>
//           <td>{location.msgType}</td>
//         </tr>
//         <tr>
//           <td>Msg:</td>
//           <td>{location.msg}</td>
//         </tr>
//       </table>
//     </div>
//   </div>
// )}
