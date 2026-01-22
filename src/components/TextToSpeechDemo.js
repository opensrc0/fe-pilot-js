import React, { useState } from "react";
import {
  TextToSpeech,
  TextToSpeechStart,
  TextToSpeechStop,
} from "fe-pilot/TextToSpeech";

export default function TextToSpeechDemo({ index }) {
  const [textToSpeech, setTextToSpeech] = useState({});

  return (
    <React.Fragment>
      <TextToSpeech
        text="Fe-pilot library offers component like scanner, voice search, autofill otp, phonebook, share and many more for a small/medium/large size web based applications"
        successCb={(data) => setTextToSpeech(data)}
        failureCb={(data) => setTextToSpeech(data)}
      >
        <TextToSpeechStart>
          <div className="grid-item">
            ▶ &nbsp; Listen Text{" "}
            <div className="heading">
              <div className="padding-right-36">✅</div>
              <div>✅</div>
            </div>
          </div>
        </TextToSpeechStart>
        <TextToSpeechStop>
          <div className="grid-item">
            ◾ &nbsp; Stop Listening
            <div className="heading">
              <div className="padding-right-36">✅</div>
              <div>✅</div>
            </div>
          </div>
        </TextToSpeechStop>
      </TextToSpeech>
      {textToSpeech.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setTextToSpeech({})}></div>
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{textToSpeech.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{textToSpeech.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{textToSpeech.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {textToSpeech.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setTextToSpeech({})}></div>
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{textToSpeech.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{textToSpeech.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{textToSpeech.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
