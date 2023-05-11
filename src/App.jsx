import "./App.css";
import { registerUser } from "./services/registerUser";
import { useForm } from "react-hook-form";

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    registerUser(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input
          type="email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && errors.email.type === "required" && (
          <p>Email is required</p>
        )}
        {errors.email && errors.email.type === "pattern" && (
          <p>Invalid email</p>
        )}
      </div>
      <div>
        <label>Name</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <p>Name is required</p>}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          {...register("age", { required: true, min: 18 })}
        />
        {errors.age && errors.age.type === "required" && <p>Age is required</p>}
        {errors.age && errors.age.type === "min" && (
          <p>You must be over 18 years to register</p>
        )}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>Password is required</p>
        )}
        {errors.password && errors.password.type === "minLength" && (
          <p>Password is too short</p>
        )}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("passwordConfirmation", { required: true })}
        />
        {errors.passwordConfirmation && <p>Passwords do not match</p>}
      </div>
      <div>
        <input type="checkbox" {...register("terms", { required: true })} />
        <label>Accept Terms and Conditions</label>
        {errors.terms && (
          <p>
            Accept terms & conditions: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque pharetra, tortor ac placerat
            elementum, neque libero luctus mi, ut efficitur nisl mauris at nisl.
            Suspendisse non neque et neque facilisis convallis. Praesent erat
            magna, sollicitudin eu porttitor ut, tincidunt sit amet urna.
            Vestibulum congue neque metus.
          </p>
        )}
      </div>
      <button type="submit" disabled={Object.keys(errors).length > 0}>
        Register
      </button>
    </form>
  );
}
