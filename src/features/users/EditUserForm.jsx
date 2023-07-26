import { useForm } from "react-hook-form";

import { useQueryClient } from "@tanstack/react-query";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import FileInput from "../../ui/FileInput";

function EditUserForm({
  user: existingData,
  userID,
  setEditUser,
  setCreatingUser,
  closeModal,
}) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  // console.log(userID);

  const queryClient = useQueryClient();

  const users1 = queryClient.getQueryData(["users"]);
  // console.log(users1);

  function onSubmit(data) {
    const { company: companyName } = data;

    const compName = { name: companyName };

    const updatedData1 = {
      users: users1.users.map((user) => {
        if (userID === user.id) {
          return {
            ...data,
            id: userID,
            image: user.image,
            company: compName,
          };
        }
        return user;
      }),
      total: users1.total + 1,
      // skip: 96,
      // limit: 100
    };

    queryClient.setQueryData(["users"], updatedData1);

    reset();
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="User name" error={errors?.name?.message}>
        <Input
          type="text"
          id="firstName"
          // disabled={isWorking}
          {...register("firstName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.maxCapacity?.message}>
        <Input
          type="text"
          id="email"
          // disabled={isWorking}
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Phone" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="phone"
          // disabled={isWorking}
          {...register("phone", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Website" error={errors?.discount?.message}>
        <Input
          type="text"
          id="website"
          // disabled={isWorking}

          {...register("website", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Company Name" error={errors?.discount?.message}>
        <Input
          type="text"
          id="company"
          // disabled={isWorking}

          {...register("company", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* <FormRow label="User photo">
        <FileInput id="image" accept="image/*" {...register("image")} />
      </FormRow> */}

      <FormRow>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginRight: "30rem",
          }}
        >
          <Button
            variation="secondary"
            type="reset"
            onClick={() => {
              setEditUser((c) => !c);
              closeModal();
              setCreatingUser((c) => !c);
            }}
          >
            Cancel
          </Button>
          <Button>Edit</Button>
        </div>
      </FormRow>
    </Form>
  );
}

export default EditUserForm;
