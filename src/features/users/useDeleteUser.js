import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserApi } from "../../services/apiUsers";

export function useDeleteUser() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteUser } = useMutation({
    mutationFn: deleteUserApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
    onError: (err) => alert(err.message),
  });

  return { isDeleting, deleteUser };
}
