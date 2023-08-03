import PropTypes from "prop-types";
//Form
import { useFormContext, Controller } from "react-hook-form";
//mui
import { Autocomplete, TextField } from "@mui/material";

RHFAutocomplete.propTypes = {
  name: PropTypes.string,
  lable: PropTypes.string,
  helperText: PropTypes.node,
};

export default function RHFAutocomplete({ name, lable, helperText, ...other }) {
  const { control, setValue } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          onChange={(event, newValue) =>
            setValue(name, newValue, { shouldValidate: true })
          }
          {...other}
          renderInput={(params) => (
            <TextField
              label={lable}
              error={!!error}
              helperText={error ? error.message : helperText}
              {...params}
            />
          )}
        />
      )}
    />
  );
}
