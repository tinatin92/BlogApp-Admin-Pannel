import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { updateBlog } from "../../../../supabase/blogs";
import { BlogValue } from "../../../../pages/blogs/view/create";


export const useUpdateBlogMutation = ({
  queryOptions,
}: {
  queryOptions?:UseMutationOptions<null, unknown, { id: string; values: BlogValue }>;
}) => {
  return useMutation<null, unknown, { id: string; values: BlogValue }>({

    mutationFn: ({ id, values }: { id: string; values: BlogValue }) => updateBlog(id,values),
    ...queryOptions
  });
};


