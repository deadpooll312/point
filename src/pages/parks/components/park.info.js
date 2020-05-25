import React, {memo, Fragment} from "react";
import {Col, Row, Progress} from "antd";

// eslint-disable-next-line react/display-name
export const ParkInfo = memo(() => {
  return (
    <Fragment>
      <Row className="park-info">
        <Col span={12}>
          <div>
            <span>Округ/Район</span>
            <p>ЗелАО /Савелки.</p>
          </div>
          <div>
            <span>Балансодержатель</span>
            <p>ГПБУ “Мосприрода”</p>
          </div>
          <div>
            <span>Общая площадь</span>
            <p>45921,4</p>
          </div>
        </Col>
        <Col span={12}>
          <div>
            <span>Статус</span>
            <p>Открыт</p>
          </div>
          <div>
            <span>Состояние территории</span>
            <p>
              Открыто к посещению, прогулка безопасна - низкий риск нарушения социальной
              дистанции
            </p>
          </div>
          <div className="park-info__outline">
            <span>MAX посетителей</span>
            <p>24</p>
          </div>
        </Col>
      </Row>
      <br />
      <h2>Ответственные лица</h2>
      <Row>
        <Col span={12}>
          <h3>Рунов Владимир Валентинович</h3>
          <div>
            <span>Телефон</span>
            <p>8 (916) 118-29-48</p>
          </div>
        </Col>
        <Col span={12}>
          <h3>Дудин Александр Евгеньевич</h3>
          <div>
            <span>Телефон</span>
            <p>8 (916) 118-29-48</p>
          </div>
        </Col>
      </Row>
      <br />
      <h2>Оценка загруженности территории</h2>
      <Row gutter={16}>
        <Col span={12}>
          <div>
            <span>Выявлено жителями</span>
            <p>10 сообщений</p>
            <Progress percent={30} />
          </div>
          <div>
            <span>Выявлено инспектором</span>
            <p>20 сообщений</p>
            <Progress percent={70} />
          </div>
          <div>
            <span>Выявлено балансодержателем</span>
            <p>10 сообщений</p>
            <Progress percent={20} />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <span>Выявлено камерами ИНС</span>
            <p>10 сообщений</p>
          </div>
          <div>
            <span>Выявлено системой Об.Конт-ля</span>
            <p>10 сообщений</p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
});
