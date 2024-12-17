import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../../../supabase/admin";
import { Table } from "antd";


const { Column } = Table



const UsersList = () => {
  const {
    data: usersData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  console.log(usersData);

  
  return (
   <Table bordered dataSource={usersData}>
    <Column title='Email' dataIndex='email'/>
    <Column title='Created At' dataIndex='createdAt'/>
    <Column title='Phone' dataIndex='phone'/>
    <Column title='Last signed in' dataIndex='lastSignedIn'/>
   </Table>
  );
};

export default UsersList;
