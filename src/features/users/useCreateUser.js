import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../../services/apiUsers";

export function useCreateUser() {
  const queryClient = useQueryClient();

  const { mutate: createNewUser, isLoading: isCreating } = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => alert(err.message),
  });

  return { isCreating, createNewUser };
}
