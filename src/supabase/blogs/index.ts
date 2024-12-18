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
  
  