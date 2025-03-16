import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  sleep_habits: string;
  bedtime: string;
  wakeup_time: string;
  avg_sleep: number;
  sleep_environment: string;
  sleep_aids: string;
  sleep_goals: {
    duration?: boolean;
    quality?: boolean;
    wakeups?: boolean;
    rest?: boolean;
  };
}

function Form() {
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <h1>Sleep Information Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <label htmlFor="height">Height:</label>
        <input type="text" id="height" {...register("height")} />
        <br />
        <br />

        <label htmlFor="weight">Weight:</label>
        <input type="text" id="weight" {...register("weight")} />
        <br />
        <br />

        <label htmlFor="sleep_habits">Sleep habits:</label>
        <textarea
          id="sleep_habits"
          {...register("sleep_habits")}
        ></textarea>
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

        <label htmlFor="avg_sleep">
          Average hours of sleep per night:
        </label>
        <input type="number" id="avg_sleep" {...register("avg_sleep")} />
        <br />
        <br />

        <label htmlFor="sleep_environment">
          Sleep environment (e.g., room temperature, noise level, light
          exposure):
        </label>
        <textarea
          id="sleep_environment"
          {...register("sleep_environment")}
        ></textarea>
        <br />
        <br />

        <label htmlFor="sleep_aids">
          Use of sleep aids (e.g., melatonin, sleep medications):
        </label>
        <textarea id="sleep_aids" {...register("sleep_aids")}></textarea>
        <br />
        <br />

        <h2>Sleep Goals</h2>
        <label htmlFor="goal_duration">Improve sleep duration:</label>
        <input
          type="checkbox"
          id="goal_duration"
          {...register("sleep_goals.duration")}
          value="Improve sleep duration"
        />
        <br />
        <br />

        <label htmlFor="goal_quality">Improve sleep quality:</label>
        <input
          type="checkbox"
          id="goal_quality"
          {...register("sleep_goals.quality")}
          value="Improve sleep quality"
        />
        <br />
        <br />

        <label htmlFor="goal_wakeups">
          Reduce wakeups during the night:
        </label>
        <input
          type="checkbox"
          id="goal_wakeups"
          {...register("sleep_goals.wakeups")}
          value="Reduce wakeups during the night"
        />
        <br />
        <br />

        <label htmlFor="goal_rest">Feel more rested during the day:</label>
        <input
          type="checkbox"
          id="goal_rest"
          {...register("sleep_goals.rest")}
          value="Feel more rested during the day"
        />
        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
