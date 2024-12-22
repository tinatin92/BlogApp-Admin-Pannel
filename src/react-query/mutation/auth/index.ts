/* import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { login } from "../../../supabase/auth";
import { LoginInput, LoginResponse } from "";

export const useLoginMutation = ({
  mutationOptions,
}: {
  mutationOptions?: UseMutationOptions<LoginResponse, unknown, LoginInput>;
} = {}) => {
  return useMutation<LoginResponse, unknown, LoginInput>({
    mutationKey: ["login"],
    mutationFn: (credentials: LoginInput) => login(credentials),
    ...mutationOptions,
  });
};
 */