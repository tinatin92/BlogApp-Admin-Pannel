import { Button, Table } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { useGetBlogs } from "../../../../react-query/query/blogs";

const { Column } = Table;

const BlogList = () => {
  const navigate = useNavigate();

  const { data: blogData, isPending, isError } = useGetBlogs();

  // console.log("Fetched blog data:", blogData);

  if (isPending) {
   
    return <div>Loading...</div>;
  }
  if (isError) {
   
    return <div>error</div>;
  }

  const handleNavigateToBlogEdit = (id: string | number) => {
    navigate(`/blog/edit/${id}`);
  };

  const formattedData = Array.isArray(blogData)
    ? blogData.map((blog) => ({
        key: blog.id,
        createdAt: dayjs(blog.created_at).format("YYYY-MM-DD HH:mm"),
        title_ka: blog.title_ka ?? "",
        title_en: blog.title_en ?? "",
        description_ka: blog.description_ka ?? "",
        description_en: blog.description_en ?? "",
        // image_url: blog.image_url ?? "",
      }))
    : [];

  return (
    <Table
      title={() => (
        <Button
          onClick={() => navigate("/blog/create")}
          icon={<PlusOutlined />}
          type="primary"
        >
          Create Blog
        </Button>
      )}
      loading={isPending}
      bordered
      dataSource={formattedData}
    >
      <Column title="Title (KA)" dataIndex="title_ka" />
      <Column title="Title (EN)" dataIndex="title_en" />
      <Column title="Created At" dataIndex="createdAt" />
      <Column title="Description (KA)" dataIndex="description_ka" />
      <Column title="Description (EN)" dataIndex="description_en" />
      {/* <Column title="Image URL" dataIndex="image_url" /> */}
      <Column
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined onClick={() => handleNavigateToBlogEdit(row.key)} />
          );
        }}
      />
    </Table>
  );
};

export default BlogList;
