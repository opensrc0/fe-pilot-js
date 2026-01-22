import React, { useState } from "react";
import View360 from "fe-pilot/View360";

export default function View360Demo({ index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <div className="grid-item" onClick={() => setIsOpen(true)}>
        ♻ &nbsp; View 360
        <div className="heading">
          <div className="padding-right-36">✅</div>
          <div>✅</div>
        </div>
      </div>
      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <div class="modal-close" onClick={() => setIsOpen(false)} />
            <table border={1} cellPadding={12} width={"100%"}>
              <tr>
                <View360
                  height="500px"
                  imageList={[
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(1).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(2).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(3).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(4).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(5).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(6).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(7).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(8).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(9).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(10).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(11).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(12).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(13).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(14).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(15).jpg",
                    "http://woosterwebdesign.com/experiments/images/car_slides/car_(16).jpg",
                  ]}
                />
              </tr>
            </table>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
