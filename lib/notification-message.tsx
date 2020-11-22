import { notification } from "antd";

const openNotificationWithIcon = (
  type: string,
  message: string,
  description?: string
) => {
  notification[type]({
    message: message,
    description: description,
    duration: 1.2,
  });
};
export { openNotificationWithIcon };
