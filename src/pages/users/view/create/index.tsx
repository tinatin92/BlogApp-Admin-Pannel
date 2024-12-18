
import UserCreateUpdateForm from "../../components/form/create-update"
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../../../supabase/admin";
import { useNavigate } from "react-router-dom";


const UserCreateView = () => {
  const navigate = useNavigate()

  const mutation = useMutation({

    mutationFn: (values: { email: string; phone: string }) => createUser(values),
    onSuccess: () => navigate('/users'),
  });

  const handleSubmit = (values: { email: string; phone: string }) => {
    mutation.mutate(values);
  };

  return (
    <UserCreateUpdateForm submitCallback={handleSubmit}/>
  )
}

export default UserCreateView
