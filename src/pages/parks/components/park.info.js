import React, {memo, Fragment, useState, useEffect} from "react";
import {Col, Row, Progress} from "antd";

// eslint-disable-next-line react/display-name
export const ParkInfo = memo(({park}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(park);
  }, [park]);

  return (
    <Fragment>
      <Row className="park-info">
        <Col span={12}>
          <div>
            <span>Округ/Район</span>
            <p>
              {data.countryName || "-"}/{data.districtName || "-"}.
            </p>
          </div>
          <div>
            <span>Балансодержатель</span>
            <p>{data.organization || "-"}</p>
          </div>
          <div>
            <span>Общая площадь</span>
            <p>{data.ssum || "-"}</p> // TODO
          </div>
        </Col>
        <Col span={12}>
          <div>
            <span>Статус</span>
            <p>{data.status || "-"}</p> // TODO
          </div>
          <div>
            <span>Состояние территории</span>
            <p>{"-"}</p> // TODO
          </div>
          <div className="park-info__outline">
            <span>MAX посетителей</span>
            <p>{data.standart || "-"}</p>
          </div>
        </Col>
      </Row>
      <br />
      <h2>Ответственные лица</h2>
      <Row>
        <Col span={12}>
          <h3>{data.respName1 || "-"}</h3>
          <div>
            <span>Телефон</span>
            <p>+{data.phone1 || "-"}</p>
          </div>
        </Col>
        <Col span={12}>
          <h3>{data.respName2 || "-"}</h3>
          <div>
            <span>Телефон</span>
            <p>+{data.phone2 || "-"}</p>
          </div>
        </Col>
      </Row>
      <br />
      <h2>Оценка загруженности территории</h2>
      <Row gutter={16}>
        <Col span={12}>
          <div>
            <span>Выявлено жителями</span>
            <p>{(data.percentInfo && data.percentInfo.user.totalTags) || 0} сообщений</p>
            <Progress percent={30} />
          </div>
          <div>
            <span>Выявлено инспектором</span>
            <p>
              {(data.percentInfo && data.percentInfo.inspector.totalTags) || 0} сообщений
            </p>
            <Progress percent={70} />
          </div>
          <div>
            <span>Выявлено балансодержателем</span>
            <p>{data.percentInfo && data.percentInfo.parkEmployee.totalTags} сообщений</p>
            <Progress percent={20} />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <span>Выявлено камерами ИНС</span>
            <p>{data.percentInfo && data.percentInfo.camCount} сообщений</p>
          </div>
          <div>
            <span>Выявлено системой Об.Конт-ля</span>
            <p>{data.percentInfo && data.percentInfo.cellularCount} сообщений</p>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
});
