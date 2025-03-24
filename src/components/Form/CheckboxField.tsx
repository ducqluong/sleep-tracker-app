import { useFormContext } from "react-hook-form";
import { Checkbox, FormControlLabel } from "@mui/material";

interface CheckboxFieldProps {
  id: string;
  label: string;
}

const CheckboxField = ({ id, label }: CheckboxFieldProps) => {
  const { register } = useFormContext();

  return (
    <FormControlLabel
      control={<Checkbox {...register(id)} />}
      label={label}
    />
  );
};

export default CheckboxField;
