import { supabase } from ".."; 
import dayjs from 'dayjs';


export const getUsers = async (): Promise<Users[]> => {
  const { data, error } = await supabase.auth.admin.listUsers();

  if (error) {
    throw new Error(error.message); 
  }


  return data.users?.map((user) => ({
    createdAt: dayjs(user?.created_at).format("YYYY-MM-DD HH:mm"),  
    email: user?.email, 
    id: user?.id, 
    phone: user?.phone,
    lastSignedIn:user?.last_sign_in_at,
    key: user?.id
  }));
};


export const updateUser = (id: string, payload : {email:string, phone: string}) =>{
  return supabase.auth.admin.updateUserById(id,{...payload})
}

export const getSingleUser = (id:string) =>{
  return supabase.auth.admin.getUserById(id).then((res =>{
    return res.data.user
  }))
}

export const createUser = async (values: { email: string; phone: string }) => {
  const { data, error } = await supabase.auth.admin.createUser({
    email: values.email,
    phone: values.phone,
   
  });

  if (error) {
    throw new Error(error.message); // Handle error if createUser fails
  }

  return data;
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
