import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { createBlog } from "../../../../supabase/blogs";
import { BlogValue } from "../../../../pages/blogs/view/create";


export const useCreateBlogMutation = ({
  queryOptions,
}: {
  queryOptions?:UseMutationOptions<null, unknown, BlogValue>;
}) => {
  return useMutation<null, unknown, BlogValue>({

    mutationFn: (values:BlogValue) => createBlog(values),
    ...queryOptions
  });
};
