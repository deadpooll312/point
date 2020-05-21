import {notification} from "antd";

export const showError = (text) => {
  notification["error"]({
    message: "Ошибка",
    duration: 3000,
    description: text || "Что-то пошло не так...",
  });
};

export const showSuccess = (text) => {
  notification["success"]({
    message: "Выполнено",
    duration: 3000,
    description: text || "Все прошло успешно",
  });
};
