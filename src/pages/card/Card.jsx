import React, { useState } from "react";
import classes from "./Card.module.css";

const Card = ({ cardInfo }) => {
  const [mouse, setMouse] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouse(true);
      }}
      onMouseLeave={() => setMouse(false)}
      className={classes.cardInfo}
    >
      <img
        src="https://pbs.twimg.com/profile_images/1488679573998948356/1wjxxmEB_400x400.png"
        alt="кот"
        style={{ width: 250, height: 250 }}
      />

      <h3>{cardInfo.name}</h3>
      <span>{cardInfo.email}</span>
      {mouse && (
        <div className={classes.cardHover}>
          <address>
            address:
            {cardInfo.address.street}
          </address>
          <p>city: {cardInfo.address.city}</p>
          <p> Company name: {cardInfo.company.name}</p>
          <q>{cardInfo.company.catchPhrase}</q>
        </div>
      )}
    </div>
  );
};

export default Card;
