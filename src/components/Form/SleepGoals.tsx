import { useFormContext } from "react-hook-form";

function SleepGoals() {
  const { register } = useFormContext();

  return (
    <>
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
    </>
  );
}

export default SleepGoals;
