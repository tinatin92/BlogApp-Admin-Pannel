import { supabase } from ".."; 


export const getBlogInfo = async () => {
    try {
      const { data, error } = await supabase.from("blogs").select("*").throwOnError();
      if (error) {
        console.error("Error fetching blog info:", error);
        throw error;
      }
      console.log("Fetched Blogs:", data);
      return data;
    } catch (error) {
      console.error("Error in getBlogInfo:", error);
      return [];
    }
  };
  
  export const getSingleBlog = async (id: string) => {
    const { data, error } = await supabase
      .from("blogs") 
      .select("*")
      .eq("id", id)
      .single();
  
    if (error) {
      console.error("Error fetching blog:", error);
      throw error;
    }
  
    return data;
  };

  export const updateBlog = async (id: string, payload: { 
    title_ka: string; 
    title_en: string; 
    description_ka: string; 
    description_en: string; 
  }) => {
    const { data, error } = await supabase
      .from("blogs") 
      .update(payload)
      .eq("id", id);
  
    if (error) {
      console.error("Error updating blog:", error);
      throw error;
    }
  
    return data;
  };

  export const createBlog = async (values: { 
    title_ka: string; 
    title_en: string; 
    description_ka: string; 
    description_en: string; 
  }) => {
    const { data, error } = await supabase
      .from("blogs") 
      .insert([values]); 
  
    if (error) {
      console.error("Error creating blog:", error);
      throw new Error(error.message);
    }
  
    return data;
  };