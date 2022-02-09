import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";

// https://blog.logrocket.com/using-material-ui-with-react-hook-form/

const FormTextField = ({control, name, label, disabled, rules, errorMessage}) => {

    const {t} = useTranslation(['errors']);

    return (
        <Controller
            control={control}
            name={name}
            defaultValue=""
            rules={rules}
            render={({ field: {  onChange, value, onBlur, ref } }) => (
                <TextField
                    onChange={onChange}
                    value={value ? value : ""}
                    label={label}
                    disabled={disabled}
                    required={rules?.required ? rules.required : false}
                    inputProps={{maxLength: rules?.maxLength ? rules.maxLength : undefined}}
                    helperText={t(errorMessage, errorMessage)}
                    FormHelperTextProps={{error: true}}
                    margin="normal"
                    inputRef={ref}
                    onBlur={onBlur}
                    />
            )}


        />
    );
}

export default FormTextField;