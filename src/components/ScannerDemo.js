import React, { useState } from "react";
import {
  Scanner,
  ScannerFlash,
  ScannerClose,
  ScannerScanBox,
  ScannerFacing,
} from "fe-pilot/Scanner";
export default function ScannerDemo({ index }) {
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const [scanner, setScanner] = useState({});

  return (
    <React.Fragment>
      <div onClick={() => setIsScannerOpen(true)}>
        <div className="grid-item">
          🎥 &nbsp; Scanner
          <div className="heading">
            <div className="padding-right-36">✅</div>
            <div>⛔</div>
          </div>
        </div>
      </div>
      {isScannerOpen && (
        <Scanner
          failureCb={(props) => {
            setScanner(props);
            setIsScannerOpen(false);
          }}
          failureMsg={{
            unSupported: "Scanner is not supported",
            streaming: "",
          }}
          successCb={(props) => {
            setScanner(props);
            setIsScannerOpen(false);
          }}
          onClose={() => {
            console.log("On click Called");
            setIsScannerOpen(false);
          }}
        >
          <ScannerScanBox />
          <ScannerFlash />
          <ScannerFacing />
          <ScannerClose
            onClose={() => {
              console.log("On click Called");
              setIsScannerOpen(false);
            }}
          >
            ❎ Close
          </ScannerClose>
        </Scanner>
      )}

      {scanner.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setScanner({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{scanner.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{scanner.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{scanner.msg}</td>
              </tr>
              <tr>
                <td>Bar Code Type:</td>
                <td>{scanner.data.barCodeType}</td>
              </tr>
              <tr>
                <td>Bar Code Value:</td>
                <td>{scanner.data.barCodeValue}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {scanner.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setScanner({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{scanner.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{scanner.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{scanner.msg}</td>
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
