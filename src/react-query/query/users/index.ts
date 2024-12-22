import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { getSingleUser, getUsers, Users } from "../../../supabase/admin";
import { useUsersQueryKeys } from "./hooks/useUsersQueryKeys";
import { User } from "@supabase/supabase-js";

export const useGetUsers =<T> ({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<Users[], unknown, T>, 'queryKey'>;
} = {}): UseQueryResult<T, unknown> => {
   
  const {LIST} = useUsersQueryKeys()

  return useQuery<Users[], unknown, T>({
    queryKey: [LIST],
    queryFn:getUsers,
    ...queryOptions,    
  });
};



export const useGetSingleUser = <T>({
  id,
  queryOptions,
}: {
  id: string;
  queryOptions?: Omit<UseQueryOptions<User, unknown, T>, "queryKey">;
}): UseQueryResult<T, unknown> => {
  const { SINGLE } = useUsersQueryKeys();

  return useQuery<User, unknown, T>({
    queryKey: [SINGLE, id],
    queryFn: () => getSingleUser(id),
    enabled: !!id, 
    ...queryOptions,
  });
};
