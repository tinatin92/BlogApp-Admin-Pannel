import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { updateUser } from "../../../../../supabase/admin";

const { Item } = Form;

type FormValue = {
  email: string;
  phone: string;
};

type FormInitialValues = {
  email: string;
  phone: string;
};

const BlogCreateUpdateForm: React.FC<{
  initialValues: FormInitialValues;
  submitCallback: (values: FormValue) => void;
}> = ({ submitCallback, initialValues }) => {
  /*   const { id } = useParams();
  const navigate = useNavigate() */
  const [form] = useForm<FormInitialValues>();

  /*   const handleSubmit = (values: FormValue) => {
    updateUser(id as string, values);
    navigate('/users')
  }; */
  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  return (
    <Form
   
      form={form}
      onFinish={submitCallback}
      name="wrap"
      labelCol={{ flex: "110px" }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ maxWidth: 600 }}
    >
      <Item label="Email" name="email" rules={[{ required: false }]}>
        <Input placeholder="Enter Email" />
      </Item>

      <Item label="Phone Numner" name="phone" rules={[{ required: false }]}>
        <Input placeholder="Enter Phone Number" />
      </Item>

      <Item label=" ">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Item>
    </Form>
  );
};

export default BlogCreateUpdateForm;
