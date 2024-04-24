import React from "react";

import LimittingPaymentInfoImg from "../images/LimittingPaymentInfo.webp";
import WhatsappBubbleImage from "../images/WhatsappBubble.webp";
import RupeeBubble from "../images/RupeeBubble.webp";
import AntivirusBubble from "../images/AntivirusBubble.webp";

const LimittingPaymentInfoAndAdditionalInfo = () => {
  return (
    <div className="limittingPaymentInfoAndAdditionalInfo">
      <div className="instantCreditInfo">
        <div className="instantCreditInfoLeftBody">
          <h1 className="instantCreditTextInfo">With Uni,</h1>
          <h1 className="instantCreditTextInfoHeader">
            you’re always in control.
          </h1>
          <span className="instantCreditTextInfo">
            Set your own payment limits. Choose how and where you spend. Lock
            and unlock your card. All right from the app.
          </span>
        </div>
        <div className="onePercentCashbackInfoRightBody">
          <img
            className="onePercentCashbackInfoImg"
            src={LimittingPaymentInfoImg}
            alt="onePercentCashbackInfoImg"
          />
        </div>
      </div>
      <div className="additionalInfoWrapper">
        <div className="additionalInfo">
          <img
            className="additionalInfoImg"
            alt="AdditionalInfo"
            src={WhatsappBubbleImage}
          />
          <h1 className="additionalInfoHeader">
            Help, just a WhatsApp away. Anytime, Anyday.
          </h1>
          <span className="additionalInfoHeader">
            During hectic work hours. On lazy sunday mornings. In the thick of
            night. Anytime.
          </span>
        </div>
        <div className="additionalInfo">
          <img
            className="additionalInfoImg"
            alt="AdditionalInfo"
            src={RupeeBubble}
          />
          <h1 className="additionalInfoHeader">
            No hidden charges, no last minute surprises.
          </h1>
          <span className="additionalInfoHeader">
            100% money back guarantee if a charge is applied without your
            knowledge.{" "}
          </span>
        </div>
        <div className="additionalInfo">
          <img
            className="additionalInfoImg"
            alt="AdditionalInfo"
            src={AntivirusBubble}
          />
          <h1 className="additionalInfoHeader">
            Super secure. Because we care about your money.{" "}
          </h1>
          <img className="compliantImg" alt="compliantImg" src="https://www.uni.cards/images/pcidss_cert.svg" />
        </div>
      </div>
    </div>
  );
};

export default LimittingPaymentInfoAndAdditionalInfo;
