import dayjs from "dayjs";
import { Users } from "./admin";

export const mapUsersListFromAdmin = (users: Users[]) => {
  return users.map((user) => ({
    createdAt: dayjs(user?.created_at).format("YYYY-MM-DD HH:mm"),
    email: user?.email,
    id: user?.id,
    phone: user?.phone,
    lastSignedIn: user?.last_sign_in_at,
    key: user?.id,
  }));
};
