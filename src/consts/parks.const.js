import React from "react";
import {PositiveIcon} from "../icons/positive.icon";
import {NegativeIcon} from "../icons/negative.icon";
import {PhotoIcon} from "../icons/photo.icon";
export const tableColumns = [
  {
    title: "ID",
    dataIndex: "id",
    width: 10,
    isActive: true,
    defaultSortOrder: "descend",
  },
  {
    title: "Название объекта",
    dataIndex: "name",
    width: 200,
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "Статус",
    width: 150,
    dataIndex: "available",
    isActive: true,
    render: (value) => {
      return value ? <PositiveIcon /> : <NegativeIcon />;
    },
  },
  {
    title: "Округ",
    width: 200,
    dataIndex: "regionName",
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "Район",
    width: 200,
    isActive: true,
    dataIndex: "districtName",
    render: (value) => value || "-",
  },
  {
    title: "Тип объекта",
    width: 200,
    dataIndex: "type",
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "Наличие ограждений",
    width: 100,
    dataIndex: "fence",
    isActive: true,
    render: (value) => {
      return <span>{value ? "Есть" : "Нет"}</span>;
    },
  },
  {
    title: "Возм. места скопления людей",
    width: 250,
    dataIndex: "crowPoint",
    isActive: true,
    render: (value) => {
      return <span>{value ? "Есть" : "Нет"}</span>;
    },
  },
  {
    title: "Количество входов",
    width: 150,
    dataIndex: "enterCount",
    isActive: true,
    render: (value) => value || "-",
  },
  {
    title: "Требует акцепта",
    width: 10,
    dataIndex: "sysViewName",
    isActive: true,
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
    render: () => <PhotoIcon />,
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
];
