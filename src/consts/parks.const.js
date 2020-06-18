import React from "react";
import {PositiveIcon} from "../icons/positive.icon";
import {NegativeIcon} from "../icons/negative.icon";
import {PhotoIcon} from "../icons/photo.icon";

export const tableColumns = [
  {
    title: "Требует акцепта",
    width: 80,
    dataIndex: "sysViewName",
    isActive: true,
    // eslint-disable-next-line react/display-name
    render: (value) => (value === "Да" ? <b>{value}</b> : value),
  },
  {
    title: "ID",
    dataIndex: "id",
    width: 80,
    isActive: true,
    defaultSortOrder: "descend",
  },
  {
    title: "Название объекта",
    dataIndex: "name",
    width: 200,
    isActive: true,
    ellipsis: true,
    render: (value) => value || "-",
  },
  {
    title: "Положение ворот",
    width: 80,
    dataIndex: "gateOpenTagName",
    isActive: true,
    render: (value) => {
      if (value === "Открыто") {
        return <PositiveIcon />;
      } else if (value === "Закрыто") {
        return <NegativeIcon />;
      } else {
        return "-";
      }
    },
  },
  {
    title: "Округ",
    width: 80,
    dataIndex: "regionName",
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "Район",
    width: 150,
    isActive: true,
    dataIndex: "districtName",
    render: (value) => value || "-",
  },
  {
    title: "Число скоплений",
    width: 80,
    dataIndex: "congestionCount",
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "FACT посетителей",
    width: 80,
    dataIndex: "entranceCount",
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "MAX посетителей",
    width: 80,
    dataIndex: "maxVisitor",
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "Тип объекта",
    width: 80,
    dataIndex: "type",
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "Наличие ограждений",
    width: 80,
    dataIndex: "fence",
    isActive: true,
    // eslint-disable-next-line react/display-name
    render: (value) => {
      return <span>{value ? "Есть" : "Нет"}</span>;
    },
  },
  {
    title: "Возм. места скопления людей",
    width: 80,
    dataIndex: "crowPoint",
    isActive: true,
    textWrap: "word-break",
    // eslint-disable-next-line react/display-name
    render: (value) => {
      return <span>{value ? "Есть" : "Нет"}</span>;
    },
  },
  {
    title: "Количество входов",
    width: 70,
    dataIndex: "enterCount",
    isActive: true,
    render: (value) => value || "-",
  },
];

export const warningColumns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Название обьекта",
    dataIndex: "name",
    key: "id",
  },
];

export const crowdColorNames = [
  {
    value: "green",
    key: "green",
    label: "Низкий риск (Открыто)",
    className: "select-low",
  },
  {
    value: "yellow",
    key: "yellow",
    label: "Высокий риск (Нарушения)",
    className: "select-middle",
  },
  {
    value: "red",
    key: "red",
    label: "Критическое (Только выход)",
    className: "select-critical",
  },
];

export const clusterColumns = [
  {
    title: "Материалы",
    key: "recordId",
    dataIndex: "recordId",
    // eslint-disable-next-line react/display-name
    render: (value, row) => <PhotoIcon color={row.fileUrl ? "var(--green)" : null} />,
  },
  {
    title: "Источник",
    key: "providerType",
    dataIndex: "providerType",
  },
  {
    title: "Геоданные",
    key: "latitude",
    dataIndex: "latitude",
    render: (value, row) => `[${row.latitude}, ${row.longitude}]`,
  },
  {
    title: "Дата",
    key: "sourceDatetime",
    dataIndex: "sourceDatetime",
    render: (value) => {
      if (value) {
        return new Date(value).toLocaleString("ru", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        });
      } else {
        return "-";
      }
    },
  },
];

export const parkSearchTypes = [
  {
    label: "По ID парка",
    value: 0,
  },
  {
    label: "По названию парка",
    value: 1,
  },
];
