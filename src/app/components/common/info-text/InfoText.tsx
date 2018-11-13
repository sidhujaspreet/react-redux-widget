import * as React from "react";
import './InfoText.scss';

export const InfoText = (props: any) => {
  return props ? (
      <p>
        <span className="info-title">{props.infoTitle}</span>
        <span className="info-text"> {props.infoText}</span>
      </p>) : null;
};