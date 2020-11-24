import React, { ReactElement, useState } from "react";
import { Tabs, Form, Input, Button, Checkbox } from "antd";
// import { useUser } from "@data/use-user";
import { login } from "@lib/authenticate";
import useUser from "@data/use-user";
const { TabPane } = Tabs;
interface Props {}

export default function Account({}: Props): ReactElement {
  //   const { user } = useUser(loginData?.username ? loginData?.username : null);
  const { user, mutateUser } = useUser({
    redirectTo: "/shop",
    redirectIfFound: true,
  });

  async function onFinish(values) {
    try {
      await login({ ...values });
      await mutateUser();
    } catch (error) {
      console.error("An unexpected error happened:", error);
    }
  }

  return (
    <div className="w-1/5 mx-auto">
      <Tabs centered>
        <TabPane tab="Login" key="1">
          <div>
            <Form onFinish={onFinish}>
              <caption className="block">Login your Account</caption>
              <Form.Item
                name="username"
                rules={[
                  { required: false, message: "Please input your Username!" },
                ]}
              >
                <Input size="large" placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: false, message: "Please input your Password!" },
                ]}
              >
                <Input size="large" type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button bg-primary border-none hover:bg-black"
                  size="large"
                  block
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </TabPane>
        <TabPane tab="Register" key="2">
          <div>
            <Form>
              <caption className="block">Register An Account</caption>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your email address!",
                  },
                ]}
              >
                <Input size="large" placeholder="Email address" type="email" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input size="large" type="password" placeholder="Password" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button bg-primary border-none hover:bg-black"
                  size="large"
                  block
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
