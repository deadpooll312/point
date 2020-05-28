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
    title: "Статус",
    width: 80,
    dataIndex: "available",
    isActive: true,
    render: (value) => {
      return value ? <PositiveIcon/> : <NegativeIcon/>;
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
  {
    title: "MAX посетителей",
    width: 80,
    dataIndex: "maxVisitor",
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
    render: () => <PhotoIcon/>,
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
