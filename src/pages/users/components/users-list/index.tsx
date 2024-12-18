import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../../supabase/admin";
import { Button, Table } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Column } = Table;

const UsersList = () => {
  const navigate = useNavigate();

  const {
    data: usersData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const handleNavigateToUsersEdit = (id: string | number) => {
    navigate(`/users/edit/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  console.log(usersData);

  return (
    <Table
      title={() => (
        <Button
          onClick={() => navigate("/user/create")}
          icon={<PlusOutlined />}
          type="primary"
        >
          Create User
        </Button>
      )}
      loading={isLoading}
      bordered
      dataSource={usersData}
    >
      <Column title="Email" dataIndex="email" />
      <Column title="Created At" dataIndex="createdAt" />
      <Column title="Phone" dataIndex="phone" />
      <Column title="Last signed in" dataIndex="lastSignedIn" />
      <Column
        title="Actions"
        render={(_, row) => {
          return (
            <EditOutlined onClick={() => handleNavigateToUsersEdit(row?.id)} />
          );
        }}
      />
    </Table>
  );
};

export default UsersList;
