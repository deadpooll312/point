import React from "react";
import Button from "../../../components/Button";

const CrewCard = ({id, time, address, crewId, disabled}) => {
  const style = {
    background: crewId ? "#464AB3" : "#F64E4C",
  };
  return (
    <div style={style} className="border-wrapper">
      <div className="crew-card">
        <div className="crew-card__title">
          {crewId ? (
            <button className="crew-card__title__crew-assigned">Экипаж назначен</button>
          ) : (
            <button className="crew-card__title__new-crew">Новый</button>
          )}
          <div>
            <span>ID: {id}</span>
            <span>{time}</span>
          </div>
        </div>
        <div className="crew-card__address">
          <h4>{address}</h4>
          {crewId ? (
            <p className="crew-card__address__crew-id">
              ID экипажа: <span>{crewId}</span>
            </p>
          ) : (
            <span className="crew-card__address__error">ЧОП не подтвердил экипаж</span>
          )}
        </div>
        <div className="crew-card__assign">
          <button className="crew-card__assign__additional-info">
            Дополнительная информация
          </button>
          <Button name="Назначить" disabled={disabled} />
        </div>
      </div>
    </div>
  );
};

export default CrewCard;
