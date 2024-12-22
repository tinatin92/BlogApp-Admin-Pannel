import { useParams, useNavigate } from "react-router-dom";
import UserCreateUpdateForm from "../../components/form/create-update";

import SkeletonForm from "../../components/form/create-update/skeleton";
import {
  useUpdateUserMutation,
} from "../../../../react-query/mutation/users";
import { useGetSingleUser } from "../../../../react-query/query/users";

type FormValue = {
  email: string;
  phone: string;
};
const UserUpdateView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const updateMutation = useUpdateUserMutation({
    queryOptions: {
      onSuccess: () => {
        navigate("/users");
      },
      onError: (error) => {
        console.error("Failed to update user:", error);
      },
    },
  });

  const handleSubmit = (values: FormValue) => {
    if (id) {
      updateMutation.mutate({ id, values });
    }
  };



  const {data: userInitialValues, isPending, isError} = useGetSingleUser<FormValue>({id: id as string, })

  if (isPending) {
    return <SkeletonForm />;
  }

  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <UserCreateUpdateForm
      initialValues={userInitialValues}
      submitCallback={handleSubmit}
    />
  );
};

export default UserUpdateView;
