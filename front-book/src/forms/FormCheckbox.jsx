import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import { Controller } from "react-hook-form";

const FormCheckbox = ({ control, name, label, disabled, rules, errorMessage }) => {

    return (
        <>
            <Controller
                name={name}
                label={label}
                control={control}
                disabled={disabled}
                rules={rules}
                defaultValue={false}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                    <FormControlLabel
                        label={label}
                        disabled={disabled}
                        control={(<Checkbox
                            checked={value}
                            color="primary"
                            onChange={onChange}
                            onBlur={onBlur}
                            inputRef={ref}
                        />)} />
                )}
            />
            <FormHelperText error>{errorMessage}</FormHelperText>
        </>
    );
}

export default FormCheckbox;