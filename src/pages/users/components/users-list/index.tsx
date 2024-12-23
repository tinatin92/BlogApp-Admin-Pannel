
import { Button, Table } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useGetUsers } from "../../../../react-query/query/users";

import { mapUsersListFromAdmin } from "../../../../supabase/utils";

const { Column } = Table;

const UsersList = () => {
  const navigate = useNavigate();

  

  const { data: usersData, isLoading, error } = useGetUsers({queryOptions:{ select:mapUsersListFromAdmin}});
  

  const handleNavigateToUsersEdit = (id: string | number) => {
    navigate(`/users/edit/${id}`);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  // console.log(usersData);

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
