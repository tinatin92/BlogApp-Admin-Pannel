import { useParams, useNavigate } from "react-router-dom";
import BlogCreateUpdateForm from "../../components/form/create-update";
import { useQuery, useMutation } from "@tanstack/react-query";
import { getSingleBlog, updateBlog } from "../../../../supabase/blogs";

// import SkeletonForm from "../../components/form/create-update/skeleton";

type BlogValue = {
  title_ka: string;
  title_en: string;
  description_ka: string;
  description_en: string;
};
const BlogUpdateView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (values: BlogValue) => updateBlog(id as string, values),
    onSuccess: () => navigate("/blogs"),
  });

  const handleSubmit = (values: BlogValue) => {
    mutation.mutate(values);
    console.log(values);
  };

  const {
    data: blogInitialValues,
    isPending,
    isError,
  } = useQuery({
    queryKey: ["blog-user", id],
    queryFn: () => getSingleBlog(id as string),
    enabled: !!id,
  });

  if (isPending) {
    //   return <SkeletonForm />;
    return <div>pending</div>;
  }

  if (isError) {
    return <div>Error fetching user data</div>;
  }

  return (
    <BlogCreateUpdateForm
      initialValues={blogInitialValues}
      submitCallback={handleSubmit}
    />
  );
};

export default BlogUpdateView;
