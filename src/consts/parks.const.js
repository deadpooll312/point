import React from "react";
import {PositiveIcon} from "../icons/positive.icon";
import {NegativeIcon} from "../icons/negative.icon";
export const tableColumns = [
  {
    title: "ID",
    dataIndex: "id",
    width: 10,
    defaultSortOrder: "descend",
  },
  {
    title: "Название объекта",
    dataIndex: "name",
    width: 200,
    render: (value) => value || "-",
  },
  {
    title: "Статус",
    width: 150,
    dataIndex: "status",
    render: (value) => value || "-",
  },
  {
    title: "Тип объекта",
    width: 200,
    dataIndex: "type",
    render: (value) => value || "-",
  },
  {
    title: "Наличие ограждений",
    width: 100,
    dataIndex: "fence",
    render: (value) => {
      return <span>{value ? "Есть" : "Нет"}</span>;
    },
  },
  {
    title: "Возм. места скопления людей",
    width: 250,
    dataIndex: "crowPoint",
    render: (value) => {
      return <span>{value ? "Есть" : "Нет"}</span>;
    },
  },
  {
    title: "Количество входов",
    width: 150,
    dataIndex: "enterCount",
    render: (value) => value || "-",
  },
  {
    title: "Операции",
    width: 10,
    dataIndex: "crowPoint",
    render: (value) => {
      return value ? <PositiveIcon /> : <NegativeIcon />;
    },
  },
];
