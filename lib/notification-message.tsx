import { notification } from "antd";

const openNotificationWithIcon = (type, message) => {
  notification[type]({
    message: "Success",
    description: message,
    duration: 1.5,
  });
};
export { openNotificationWithIcon };
