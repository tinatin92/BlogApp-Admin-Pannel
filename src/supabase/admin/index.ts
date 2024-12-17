import { supabase } from ".."; // Import your supabase client

export const getUsers = async (): Promise<Users[]> => {
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    throw new Error(error.message); 
  }


  return data.users?.map((user) => ({
    createdAt: user?.created_at || "", 
    email: user?.email || "", 
    id: user?.id || "", 
    phone: user?.phone || "",
    lastSignedIn:user?.last_sign_in_at || ""
  }));
};


export type Users = {
  aud: string;
  confirmation_sent_at: string | undefined;
  confirmed_at: string | undefined;
  created_at: string;
  email: string | undefined;
  email_confirmed_at: string | undefined;
  id: string;
  identities: UserIdentity[] | null; 
  is_anonymous: false;
  last_sign_in_at: string;
  phone: string;
  role: string;
  updated_at: string;
  user_metadata: object;
  app_metadata: {
    provider: string;
    providers: [string];
  };
};
export type UserIdentity = {
  provider: string;
  provider_id: string;
};
