import React from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../../../supabase/auth";

type FieldType = {
  email: string; 
  password: string; 
};

const SignUpForm: React.FC = () => {

  const { mutate: handleRegistration, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: register,
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
   
    handleRegistration(values); 
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };



  return (
  
    <Form
      name="signup"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
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
  );
};

export default SignUpForm;
