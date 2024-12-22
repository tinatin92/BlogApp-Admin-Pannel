import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "@tanstack/react-query";

import { useBLogsQueryKeys } from "./hooks";
import { getBlogInfo, getSingleBlog } from "../../../supabase/blogs";

export const useGetBlogs = <T>({
  queryOptions,
}: {
  queryOptions?: Omit<UseQueryOptions<unknown, unknown, T>, "queryKey">;
} = {}): UseQueryResult<T, unknown> => {
  const { LIST } = useBLogsQueryKeys();

  return useQuery<unknown, unknown, T>({
    queryKey: [LIST],
    queryFn: getBlogInfo,
    ...queryOptions,
  });
};

export const useGetSingleBlog = <T>({
  id,
  queryOptions,
}: {
  id: string;
  queryOptions?: Omit<UseQueryOptions<unknown, unknown, T>, "queryKey">;
}): UseQueryResult<T, unknown> => {
  const { SINGLE_BLOG } = useBLogsQueryKeys();

  return useQuery<T, unknown>({
    queryKey: [SINGLE_BLOG, id],
    queryFn: () => getSingleBlog(id),
    enabled: !!id,
    ...queryOptions,
  });
};
