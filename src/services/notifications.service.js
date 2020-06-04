import {notification} from "antd";

export const showError = (text, duration) => {
  notification["error"]({
    message: "Ошибка",
    duration: duration || 4.5,
    description: text || "Что-то пошло не так...",
  });
};

export const showSuccess = (text) => {
  notification["success"]({
    message: "Выполнено",
    description: text || "Операция прошла успешно",
  });
};
