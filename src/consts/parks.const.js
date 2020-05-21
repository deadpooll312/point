import React from "react";
import {PositiveIcon} from "../icons/positive.icon";
import {NegativeIcon} from "../icons/negative.icon";
export const tableColumns = [
  {
    title: "ID",
    dataIndex: "id",
    width: 10,
    defaultSortOrder: "descend",
    sorter: true,
    showSorterTooltip: false,
  },
  {
    title: "Название объекта",
    dataIndex: "name",
    width: 200,
    sorter: true,
    showSorterTooltip: false,
    render: (value) => value || "-",
  },
  {
    title: "Статус",
    width: 150,
    dataIndex: "status",
    sorter: true,
    showSorterTooltip: false,
    render: (value) => value || "-",
  },
  {
    title: "Тип объекта",
    width: 200,
    dataIndex: "type",
    sorter: true,
    showSorterTooltip: false,
    render: (value) => value || "-",
  },
  {
    title: "Наличие ограждений",
    width: 100,
    dataIndex: "fence",
    sorter: true,
    showSorterTooltip: false,
    render: (value) => {
      return <span>{value ? "Есть" : "Нет"}</span>;
    },
  },
  {
    title: "Возм. места скопления людей",
    width: 250,
    dataIndex: "crowPoint",
    sorter: true,
    showSorterTooltip: false,
    render: (value) => {
      return <span>{value ? "Есть" : "Нет"}</span>;
    },
  },
  {
    title: "Количество входов",
    width: 150,
    dataIndex: "enterCount",
    sorter: true,
    showSorterTooltip: false,
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
