import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../../supabase/auth";

type FieldType = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const { mutate: handleRegistration, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: login,
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    handleRegistration(values);
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <h1>Loginggg</h1>
      <Form
        name="login"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 900 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isPending}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
