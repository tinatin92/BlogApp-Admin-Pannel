import { useParams, useNavigate } from "react-router-dom";
import UserCreateUpdateForm from "../../components/form/create-update";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getSingleUser, updateUser } from "../../../../supabase/admin";
import SkeletonForm from "../../components/form/create-update/skeleton";



type FormValue = {
  email: string;
  phone: string;
};
const UserUpdateView = () => {
  
  const {id} = useParams();
  const navigate =useNavigate()

  const mutation = useMutation({
    mutationFn: (values: FormValue) => updateUser(id as string, values),
    onSuccess: () => navigate('/users')
})

  const handleSubmit = (values: FormValue) => {
    mutation.mutate(values);
  };


    const {data:userInitialValues,
      isPending,
      isError
    } = useQuery({
      queryKey:['single-user', id],
      queryFn:() => getSingleUser(id as string),
      enabled: !!id, 
    })

    if (isPending) {
      return <SkeletonForm />;
    }
  
    if (isError) {
      return <div>Error fetching user data</div>;
    }
   
  return <UserCreateUpdateForm initialValues={userInitialValues} submitCallback={handleSubmit}/>;
};

export default UserUpdateView;
