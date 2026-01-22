import React, { useState, useEffect } from "react";
import { ColorPicker } from "fe-pilot/ColorPicker";

export default function ColorPickerDemo({ index }) {
  const [colorPickerVal, setColorPickerVal] = useState({});

  return (
    <React.Fragment>
      <ColorPicker
        failureCb={(props) => {
          setColorPickerVal(props);
        }}
        successCb={(props) => {
          setColorPickerVal(props);
        }}
      >
        <div className="grid-item">
          🎨 &nbsp; Color Picker (Web Only)
          <div className="heading">
            <div className="padding-right-36">✅</div>
            <div>✅</div>
          </div>
        </div>
      </ColorPicker>
      {colorPickerVal.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setColorPickerVal({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{colorPickerVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{colorPickerVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{colorPickerVal.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{JSON.stringify(colorPickerVal.data)}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {colorPickerVal.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setColorPickerVal({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{colorPickerVal.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{colorPickerVal.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{colorPickerVal.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
