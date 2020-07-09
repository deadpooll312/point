import React, {useCallback, useEffect, useState} from "react";
import {inject, observer} from "mobx-react";
import {Radio} from "antd";
import "react-datepicker/dist/react-datepicker.css";
import {RangeComponent} from "../../../components/date-range";
import {ResetIcon} from "../../../icons/reset.icon";

export const GetReport = inject("store")(
  observer(({store: {parks}}) => {
    const periodName = "За период";
    const [type, setType] = useState(1);
    const [nameCurrentType, setNameCurrentType] = useState(periodName);

    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const initDate = useCallback(() => {
      const today = new Date();
      const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
      const dateFrom = date + " 00:00:00";
      const dateTo =
        date +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds();

      parks.updateReportDate({dateFrom, dateTo});
    }, []);

    useEffect(() => {
      initDate();
    }, []);

    useEffect(() => {
      updateNameCurrentType();
    }, [startDate, endDate]);

    const onChange = useCallback((e) => {
      setType(e.target.value);
      if (e.target.value === 1) {
        setNameCurrentType(periodName);
        initDate();
      }
    }, []);

    const updateNameCurrentType = useCallback(() => {
      if (startDate && endDate) {
        setNameCurrentType(
          `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
        );
      }
    }, [startDate, endDate]);

    const reset = useCallback((e) => {
      e.preventDefault();
      setType(1);
      setNameCurrentType(periodName);
      initDate();
      setStartDate();
      setEndDate();
    }, []);

    return (
      <div className="get-report">
        <h4>Найстойки отчёта</h4>
        <Radio.Group onChange={onChange} value={type}>
          <Radio value={1}>На текущий момент</Radio>
          <Radio value={2}>
            {nameCurrentType}
            {nameCurrentType !== periodName && (
              <ResetIcon onClick={reset} className="icon" />
            )}
          </Radio>
        </Radio.Group>

        <div
          className={type === 2 ? `get-report__calendar show` : `get-report__calendar`}
        >
          <RangeComponent
            startDate={startDate}
            endDate={endDate}
            handleChangeStart={(date) => {
              const dateFrom =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate() +
                " 00:00:00";
              setStartDate(date);
              parks.updateReportDate({dateFrom});
            }}
            handleChangeEnd={(date) => {
              const dateTo =
                date.getFullYear() +
                "-" +
                (date.getMonth() + 1) +
                "-" +
                date.getDate() +
                " 23:59:59";
              setEndDate(date);
              parks.updateReportDate({dateTo});
            }}
            inline
          />
        </div>
      </div>
    );
  })
);
