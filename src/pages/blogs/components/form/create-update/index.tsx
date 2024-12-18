import { Button, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect } from "react";

const { Item } = Form;


type FormValue = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
};

type FormInitialValues = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
};

const BlogCreateUpdateForm: React.FC<{
  initialValues?: FormInitialValues;
  submitCallback: (values: FormValue) => void;
}> = ({ submitCallback, initialValues }) => {
  const [form] = useForm<FormInitialValues>();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    }
  }, [initialValues, form]);

  return (
    <Form
      form={form}
      onFinish={submitCallback}
      name="blogForm"
      labelCol={{ flex: "110px" }}
      labelAlign="left"
      labelWrap
      wrapperCol={{ flex: 1 }}
      colon={false}
      style={{ maxWidth: 600 }}
    >
      <Item
        label="Title (KA)"
        name="title_ka"
        rules={[{ required: false}]}
      >
        <Input placeholder="Enter title in Georgian" />
      </Item>

      <Item
        label="Title (EN)"
        name="title_en"
        rules={[{ required: false}]}
      >
        <Input placeholder="Enter title in English" />
      </Item>

      <Item
        label="Description (KA)"
        name="description_ka"
        rules={[{ required: false}]}
      >
        <Input.TextArea placeholder="Enter description in Georgian" />
      </Item>

      <Item
        label="Description (EN)"
        name="description_en"
        rules={[{ required: false }]}
      >
        <Input.TextArea placeholder="Enter description in English" />
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
