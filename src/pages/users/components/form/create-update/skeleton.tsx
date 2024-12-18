import { Form, Skeleton as AntdSkeleton } from "antd";

const SkeletonForm = () => {
  return (
    <Form>
      <Form.Item label="Email">
        <AntdSkeleton.Input active style={{ width: 600 }} />
      </Form.Item>
      <Form.Item label="Phone">
        <AntdSkeleton.Input active style={{ width: 600 }} />
      </Form.Item>
      <Form.Item label=''>
        <AntdSkeleton.Button active style={{ width: 100 }} />
      </Form.Item>
    </Form>
  );
};

export default SkeletonForm;
