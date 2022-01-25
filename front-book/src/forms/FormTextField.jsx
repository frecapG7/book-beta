import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";

// https://blog.logrocket.com/using-material-ui-with-react-hook-form/

const FormTextField = ({control, name, label}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: {  onChange, value } }) => (
                <TextField
                    onChange={onChange}
                    value={value}
                    label={label}
                    />
            )}
            defaultValue={""}

        />
    );
}

export default FormTextField;