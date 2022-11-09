import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function Form() {
  // yup으로 유효성 검사
  const schema = yup.object({
    firstName: yup.string().required("이름을 입력해 주세요."),
    lastName: yup.string().required("성을 입력해 주세요."),
    age: yup
      .number()
      .typeError("숫자를 입력하세요.")
      .positive("나이를 입력하세요")
      .min(0, "0보다 큰 나이를 입력해주세요.")
      .max(200, "200보다 작은 나이를 입력해주세요.")
      .required("나이를 입력해 주세요."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("firstName")} placeholder="firstname" />
      {errors.firstName && <p>{errors.firstName.message}</p>}
      <br />
      <input
        {...register("lastName", { required: true })}
        placeholder="lastname"
      />
      {errors.lastName && <p>{errors.lastName.message}</p>}
      <br />
      <input {...register("age", { pattern: /\d+/ })} placeholder="age" />
      {errors.age && <p>{errors.age.message}</p>}
      <br />
      <input type="submit" />
    </form>
  );
}

export default Form;
