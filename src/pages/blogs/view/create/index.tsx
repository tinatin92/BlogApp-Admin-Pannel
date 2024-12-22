import BlogCreateUpdateForm from "../../components/form/create-update";

import { useNavigate } from "react-router-dom";

import { useCreateBlogMutation } from "../../../../react-query/mutation/blogs/create";

export type BlogValue = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
};

const BlogCreateView = () => {
  const navigate = useNavigate();

  const mutation = useCreateBlogMutation({
    queryOptions: { onSuccess: () => navigate("/blogs") },
  });

  const handleSubmit = (values: BlogValue) => {
    mutation.mutate(values);
  };

  return <BlogCreateUpdateForm submitCallback={handleSubmit} />;
};

export default BlogCreateView;
