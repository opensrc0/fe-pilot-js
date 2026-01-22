import React, { useState, useEffect } from "react";
import "./styles.css";
import constant from "./constant";
export default function App() {
  // const navigate = useNavigate();
  const [component, setComponent] = useState([]);
  const init = async () => {
    function initPaymentRequest() {
      let supportedInstruments = [
        {
          supportedMethods: "https://bobbucks.dev/pay",
        },
      ];

      let details = {
        total: {
          label: "Donation",
          amount: { currency: "USD", value: "55.00" },
        },
        displayItems: [
          {
            label: "Original donation amount",
            amount: { currency: "USD", value: "65.00" },
          },
          {
            label: "Friends and family discount",
            amount: { currency: "USD", value: "-10.00" },
          },
        ],
      };

      return new PaymentRequest(supportedInstruments, details);
    }

    function onBuyClicked(request) {
      request
        .show()
        .then(function (instrumentResponse) {
          sendPaymentToServer(instrumentResponse);
        })
        .catch(function (err) {
          console.log(err);
        });
    }

    function sendPaymentToServer(instrumentResponse) {
      window.setTimeout(function () {
        instrumentResponse
          .complete("success")
          .then(function () {
            console.log(instrumentResponse);
          })
          .catch(function (err) {
            console.log(err);
            // ChromeSamples.setStatus(err);
          });
      }, 2000);
    }
    let requesta = initPaymentRequest();

    onBuyClicked(requesta);
    requesta = initPaymentRequest();
  };
  const initNotification = () => {
    // Notification.requestPermission().then((result) => {
    //   console.log(result);
    //   const img = "/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API/desktop-notification.png";
    //   const text = `HEY! Your task is now overdue.`;
    //   const notification = new Notification("To do list", { body: text, icon: img });
    // });
  };

  const onClick = () => {};

  useEffect(() => {
    const str = window.location.search.split("?component=");
    if (str[1]) {
      setComponent([str[1] + "Demo"]);
    }

    initNotification();
  }, []);

  return (
    <React.Fragment>
      <marquee style={{ background: "black", color: "white", padding: "8px" }}>
        All the features are developed using Pure Javascript and React
      </marquee>
      <div className="heading">
        <div className="heading-item padding-right-16">
          &nbsp;&nbsp;&nbsp;Total:{component.length || constant.length}
        </div>
        <div className="heading-item padding-right-16">Android</div>
        <div className="heading-item padding-right-16">IOS</div>
      </div>
      <div className="App grid">
        {constant.map((Item, index) => {
          console.log(component[0], Item.name, component[0] === Item.name);
          if (component[0]) {
            if (component[0] === Item.name) {
              console.log(component[0] === Item.name);
              return <Item index={(index + 1).toString().padStart(2, "0")} />;
            }
          } else {
            return <Item index={(index + 1).toString().padStart(2, "0")} />;
          }
        })}
      </div>
      <br />
      <br />
      <br />
    </React.Fragment>
  );
}
