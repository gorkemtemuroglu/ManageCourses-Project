import { useForm } from "react-hook-form";

import { useQueryClient } from "@tanstack/react-query";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";

let id = 101;
function CreateUserForm({ user: existingData, setShowForm, setCreatingUser }) {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();

  function onSubmit(data) {
    const randomNumber = Math.floor(Math.random() * 5) + 1;

    data.id = id;
    data.image = `https://robohash.org/hicveldicta.png?size=50x50&set=set${randomNumber}`;
    id++;

    const { company: companyName } = data;
    const compName = { name: companyName };
    data.company = compName;

    const updatedData = {
      users: [...existingData.users, data],

      total: existingData.total + 1,
    };

    queryClient.setQueryData(["users"], updatedData);

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
          {...register("firstName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.maxCapacity?.message}>
        <Input
          type="text"
          id="email"
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Phone" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="phone"
          {...register("phone", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Website" error={errors?.discount?.message}>
        <Input
          type="text"
          id="website"
          {...register("website", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Company Name" error={errors?.discount?.message}>
        <Input
          type="text"
          id="company"
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
              setShowForm((c) => !c);
              setCreatingUser((c) => !c);
            }}
          >
            Cancel
          </Button>
          <Button>Create</Button>
        </div>
      </FormRow>
    </Form>
  );
}

export default CreateUserForm;
