import UserCreateUpdateForm from "../../components/form/create-update";
import { useNavigate } from "react-router-dom";
import { useCreateUserMutation } from "../../../../react-query/mutation/users";

const UserCreateView = () => {
  const navigate = useNavigate();

  const mutation = useCreateUserMutation({
    queryOptions: {
      onSuccess: () => navigate("/users"),
    },
  });

  const handleSubmit = (values: { email: string; phone: string }) => {
    mutation.mutate(values);
  };

  return <UserCreateUpdateForm  submitCallback={handleSubmit} />;
};

export default UserCreateView;
