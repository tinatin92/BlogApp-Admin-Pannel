import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createUser, updateUser } from "../../../supabase/admin";

export type UserInput = {
    email: string;
    phone: string;
  };


export const useCreateUserMutation = ({
  queryOptions,
}: {
  queryOptions?:UseMutationOptions<null, unknown, UserInput>;
}) => {
  return useMutation<null, unknown, UserInput>({

    mutationFn: (values:UserInput) => createUser(values),
    ...queryOptions
  });
};


export const useUpdateUserMutation = ({
    queryOptions,
  }: {
    queryOptions?: UseMutationOptions<null, unknown, { id: string; values: UserInput }>;
  }) => {
    return useMutation<null, unknown, { id: string; values: UserInput }>({
      mutationFn: ({ id, values }) => updateUser(id, values),
      ...queryOptions,
    });
  };

  

