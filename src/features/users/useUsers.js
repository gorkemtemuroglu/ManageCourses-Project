import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/apiUsers";

export function useUsers() {
  const { isLoading, data: allUsers, error } = useQuery(["users"], getUsers);

  return { isLoading, error, allUsers };
}
