import React, { useState } from "react";
import {
  VoiceRecognition,
  VoiceRecognitionIcon,
  VoiceRecognitionModal,
} from "fe-pilot/VoiceRecognition";

export default function VoiceRecognitionDemo({ index }) {
  const [voiceRecognition, setVoiceRecognition] = useState({});

  return (
    <React.Fragment>
      <VoiceRecognition
        successCb={(data) => {
          setVoiceRecognition(data);
        }}
        failureCb={(data) => setVoiceRecognition(data)}
      >
        <VoiceRecognitionIcon>
          <div className="grid-item">
            🎤 &nbsp; Voice Recongnition
            <div className="heading">
              <div className="padding-right-36">✅</div>
              <div>✅</div>
            </div>
          </div>
        </VoiceRecognitionIcon>
        <VoiceRecognitionModal>
          <div className="blink_me">...Listening, Please say something</div>
        </VoiceRecognitionModal>
      </VoiceRecognition>
      {voiceRecognition.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setVoiceRecognition({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{voiceRecognition.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{voiceRecognition.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{voiceRecognition.msg}</td>
              </tr>
              <tr>
                <td>Data:</td>
                <td>{voiceRecognition.data}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {voiceRecognition.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setVoiceRecognition({})} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{voiceRecognition.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{voiceRecognition.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{voiceRecognition.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
