import {notification} from "antd";

export const showError = (text) => {
  notification["error"]({
    message: "Ошибка",
    description: text || "Что-то пошло не так...",
  });
};

export const showSuccess = (text) => {
  notification["success"]({
    message: "Выполнено",
    description: text || "Операция прошла успешно",
  });
};
