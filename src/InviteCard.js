/* eslint-disable no-unused-vars */
import React from 'react';
import './InviteCard.css';

import Button from "./Button";

function InviteCard() {
  const queryParameters = new URLSearchParams(window.location.search)
  // const geo = queryParameters.get("geo")

  const link1 = "tg://join?invite=4Cy7oqFi4441MjAy";
  const link2 = "tg://join?invite=CQSvbPuHJrI3OTAy";
  
  return (
    <div className="invite-card">
      <div className="invite-card-content">
        <img src={require("./logo.jpg")} alt="ESCO Agency" className="channel-logo" />
        <h1 className="channel-name">BITX Exchange 🇪🇺💸</h1>
        <p className="channel-handle">584 subscribers</p>
        <p className="channel-description">
          Покупаем и продаём USDT по всей Европе
        </p>
        <ul>
          <li>👌🏻Без скрытой комиссии</li>
          <li>♻️Доплачиваем +2% за ваш тезер</li>
        </ul>
        <p className="channel-description">
          Связь с менеджером: <strong>@bitx_support</strong>
        </p>
          <Button className="channel-link" text="перейти на канал" link={link2} type="msg" />
      </div>
    </div>
  );
}

export default InviteCard;
