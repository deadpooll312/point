import React, {memo, useState, useEffect} from "react";
import {Col, Row} from "antd";
import {ProgressComponent} from "../../../components/progress";

// eslint-disable-next-line react/display-name
export const ParkInfo = memo(({park}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(park);
  }, [park]);

  return (
    <div className="park-info">
      <Row>
        <Col span={12}>
          <div className="park-info__outline">
            <span>Округ/Район</span>
            <p>
              {data.countryName || "-"}/{data.districtName || "-"}.
            </p>
          </div>
          <div className="park-info__outline">
            <span>Балансодержатель</span>
            <p>{data.organization || "-"}</p>
          </div>
          <div className="park-info__outline">
            <span>Общая площадь</span>
            <p>{data.ssum || "-"}</p> // TODO
          </div>
        </Col>
        <Col span={12}>
          <div className="park-info__outline">
            <span>Статус</span>
            <p>{data.availableName || "-"}</p>
          </div>
          <div className="park-info__outline">
            <span>Состояние территории</span>
            <p>{data.crowdColorName || "-"}</p>
          </div>
          <div className="park-info__outline">
            <span>MAX посетителей</span>
            <p>{data.maxVisitor || "-"}</p>
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
          <div className="park-info__outline">
            <span>Выявлено жителями</span>
            <p>{(data.percentInfo && data.percentInfo.user.totalTags) || 0} сообщений</p>
            <ProgressComponent
              left={data.percentInfo && data.percentInfo.user.truePercent}
              right={data.percentInfo && data.percentInfo.user.falsePercent}
            />
          </div>
          <div className="park-info__outline">
            <span>Выявлено инспектором</span>
            <p>
              {(data.percentInfo && data.percentInfo.inspector.totalTags) || 0} сообщений
            </p>
            <ProgressComponent
              left={data.percentInfo && data.percentInfo.inspector.truePercent}
              right={data.percentInfo && data.percentInfo.inspector.falsePercent}
            />
          </div>
          <div className="park-info__outline">
            <span>Выявлено балансодержателем</span>
            <p>{data.percentInfo && data.percentInfo.parkEmployee.totalTags} сообщений</p>
            <ProgressComponent
              left={data.percentInfo && data.percentInfo.parkEmployee.truePercent}
              right={data.percentInfo && data.percentInfo.parkEmployee.falsePercent}
            />
          </div>
        </Col>
        <Col span={12}>
          <div className="park-info__outline">
            <span>Выявлено камерами ИНС</span>
            <p>{data.percentInfo && data.percentInfo.camCount} сообщений</p>
          </div>
          <div className="park-info__outline">
            <span>Выявлено системой Об.Конт-ля</span>
            <p>{data.percentInfo && data.percentInfo.cellularCount} сообщений</p>
          </div>
        </Col>
      </Row>
    </div>
  );
});
