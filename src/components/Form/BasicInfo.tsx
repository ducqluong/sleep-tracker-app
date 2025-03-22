import { useFormContext } from "react-hook-form";

function BasicInfo() {
  const { register } = useFormContext();

  return (
    <>
      <h2>Basic Information</h2>

      <label htmlFor="name">Name:</label>
      <input type="text" id="name" {...register("name")} />
      <br />
      <br />

      <label htmlFor="age">Age:</label>
      <input type="number" id="age" {...register("age")} />
      <br />
      <br />

      <label htmlFor="gender">Gender:</label>
      <input type="text" id="gender" {...register("gender")} />
      <br />
      <br />

      <label htmlFor="height">Height (cm):</label>
      <input type="number" id="height" {...register("height")} />
      <br />
      <br />

      <label htmlFor="weight">Weight (kg):</label>
      <input type="number" id="weight" {...register("weight")} />
      <br />
      <br />

      <label htmlFor="bedtime">Typical bedtime:</label>
      <input type="time" id="bedtime" {...register("bedtime")} />
      <br />
      <br />

      <label htmlFor="wakeup_time">Typical wakeup time:</label>
      <input type="time" id="wakeup_time" {...register("wakeup_time")} />
      <br />
      <br />

      <label htmlFor="avg_sleep">Average hours of sleep per night:</label>
      <input type="number" id="avg_sleep" {...register("avg_sleep")} />
    </>
  );
}

export default BasicInfo;
