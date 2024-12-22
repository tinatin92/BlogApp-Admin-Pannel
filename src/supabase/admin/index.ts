import { supabase } from ".."; 



export const getUsers = () =>{
  return supabase.auth.admin.listUsers().then((res) =>{
    return res.data.users as Users[]
  })
}


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
    throw new Error(error.message); 
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


