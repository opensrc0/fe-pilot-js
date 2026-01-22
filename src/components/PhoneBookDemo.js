import React, { useState } from "react";
import PhoneBook from "fe-pilot/PhoneBook";

export default function PhoneBookDemo({ index }) {
  const [phonebook, setPhonebook] = useState({});

  return (
    <React.Fragment>
      <PhoneBook
        failureCb={(props) => {
          setPhonebook(props);
        }}
        successCb={(props) => {
          setPhonebook(props);
        }}
        isSelectMultiple={true}
      >
        <div className="grid-item">
          {" "}
          📞 &nbsp; PhoneBook
          <div className="heading">
            <div className="padding-right-36">✅</div>
            <div>⛔</div>
          </div>
        </div>
      </PhoneBook>

      {phonebook.status === "SUCCESS" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setPhonebook({})}></div>
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{phonebook.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{phonebook.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{phonebook.msg}</td>
              </tr>
              {phonebook.data.map((item, index) => {
                return (
                  <React.Fragment>
                    <tr key={index}>
                      <th>Name{index + 1}:</th>
                      <th>{item?.name?.toString()}</th>
                    </tr>
                    <tr key={index}>
                      <td>Mobile{index + 1}: </td>
                      <td>{item?.tel?.toString()}</td>
                    </tr>
                    <tr key={index}>
                      <td>Email{index + 1}:</td>
                      <td>{item?.email?.toString()}</td>
                    </tr>
                  </React.Fragment>
                );
              })}
            </table>
          </div>
        </div>
      )}
      {phonebook.status === "FAILURE" && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setPhonebook({})}></div>
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <th>Property</th>
                <th>Value</th>
              </tr>
              <tr>
                <td>Status: </td>
                <td>{phonebook.status}</td>
              </tr>
              <tr>
                <td>Msg Type:</td>
                <td>{phonebook.msgType}</td>
              </tr>
              <tr>
                <td>Msg:</td>
                <td>{phonebook.msg}</td>
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
