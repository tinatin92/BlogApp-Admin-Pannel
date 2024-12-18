import BlogCreateUpdateForm from "../../components/form/create-update";
import { useMutation } from "@tanstack/react-query";

import { useNavigate } from "react-router-dom";
import { createBlog } from "../../../../supabase/blogs";

type BlogValue = {
    title_ka: string;
    title_en: string;
    description_ka: string;
    description_en: string;
  };

const BlogCreateView = () => {
  const navigate = useNavigate()

  const mutation = useMutation({

    mutationFn: (values:BlogValue) => createBlog(values),
    onSuccess: () => navigate('/blogs'),
  });

  const handleSubmit = (values:BlogValue ) => {
    mutation.mutate(values);
  };

  return (
    <BlogCreateUpdateForm submitCallback={handleSubmit}/>
  )
}

export default BlogCreateView