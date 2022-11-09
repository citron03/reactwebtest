import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("firstName")} placeholder="firstname" />
      <br />
      <input
        {...register("lastName", { required: true })}
        placeholder="lastname"
      />
      {errors.lastName && <p>Last name is required.</p>}
      <br />
      <input {...register("age", { pattern: /\d+/ })} placeholder="age" />
      {errors.age && <p>Please enter number for age.</p>}
      <br />
      <input type="submit" />
    </form>
  );
}

export default Form;
