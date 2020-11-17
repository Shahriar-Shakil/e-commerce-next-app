import { notification } from "antd";

const openNotificationWithIcon = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
    duration: 1.2,
  });
};
export { openNotificationWithIcon };
