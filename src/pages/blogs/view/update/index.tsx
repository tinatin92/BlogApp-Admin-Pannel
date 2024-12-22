import { useParams, useNavigate } from "react-router-dom";
import BlogCreateUpdateForm from "../../components/form/create-update";

import { useUpdateBlogMutation } from "../../../../react-query/mutation/blogs/update";
import { useGetSingleBlog } from "../../../../react-query/query/blogs";

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

  const mutation = useUpdateBlogMutation({
    queryOptions: {
      onSuccess: () => navigate("/blogs"),
    },
  });

  const handleSubmit = (values: BlogValue) => {
    if (id) {
      mutation.mutate({ id, values });
    }
  };

  const {
    data: blogInitialValues,
    isPending,
    isError,
  } = useGetSingleBlog<BlogValue>({
    id: id as string,
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
