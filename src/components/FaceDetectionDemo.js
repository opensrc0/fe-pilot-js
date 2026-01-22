import React, { useState } from "react";
import {
  FaceDetector,
  FaceDetectorClose,
  FaceDetectorFlash,
  FaceDetectorFacing,
} from "fe-pilot/FaceDetector";

export default function FaceDetectorDemo({ index }) {
  const [isFaceDetectorOpen, setIsFaceDetectorOpen] = useState(false);
  const [faceDetector, setFaceDetector] = useState({});

  return (
    <React.Fragment>
      <div onClick={() => setIsFaceDetectorOpen(true)}>
        <div className="grid-item">
          👤🔍 Face Detection
          <div className="heading">
            <div className="padding-right-36">⛔</div>
            <div>⛔</div>
          </div>
        </div>
      </div>
      {isFaceDetectorOpen && (
        <div className="modal">
          <div style={{ position: "relative" }}>
            <FaceDetector
              failureCb={(props) => {
                setFaceDetector(props);
                setIsFaceDetectorOpen(false);
              }}
              failureMsg={{
                streaming: "",
              }}
            >
              <FaceDetectorClose
                onClose={() => {
                  console.log("On click Called");
                  setIsFaceDetectorOpen(false);
                }}
              >
                ❎ Close
              </FaceDetectorClose>
              <FaceDetectorFlash>⚡ Flash</FaceDetectorFlash>
              <FaceDetectorFacing>🔄 Toggle </FaceDetectorFacing>
            </FaceDetector>
          </div>
        </div>
      )}

      {faceDetector.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setFaceDetector({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{faceDetector.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{faceDetector.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{faceDetector.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
// barCodeType: "qr_code"
// barCodeValue : "upi://pay?pa=him25icici@ybl&pn=Himanshu%20Gupta&mc=0000&mode=02&purpose=00"
