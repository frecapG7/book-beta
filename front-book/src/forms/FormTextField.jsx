import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

// https://blog.logrocket.com/using-material-ui-with-react-hook-form/

const FormTextField = ({control, name, label, disabled, rules, errorMessage}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: {  onChange, value } }) => (
                <TextField
                    onChange={onChange}
                    value={value}
                    label={label}
                    disabled={disabled}
                    required={rules?.required ? rules.required : false}
                    inputProps={{maxLength: rules?.maxLength ? rules.maxLength : undefined}}
                    helperText={'TODO'}
                    FormHelperTextProps={{error: true}}
                    margin="normal"
                    />
            )}
            defaultValue={""}
            rules={rules}

        />
    );
}

export default FormTextField;