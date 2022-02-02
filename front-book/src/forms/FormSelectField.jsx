import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";


const FormSelectField = ({name, label, disabled, control, errorMessage, onValueChange, values, nullable}) => {


    return (
        <FormControl
            disabled={disabled}
            variant="outlined">
            <InputLabel>{label}</InputLabel>

            <Controller
                render={({field: {onChange, onBlur, value, ref}}) => (
                    <Select label={label}
                    ref={ref}
                    onChange={(e) => {
                        onChange(e);
                        if(onValueChange) onValueChange(e.target.value);

                    }}
                    onBlur={onBlur}
                    value={value}>
                        {nullable && <MenuItem value="" />}
                        {values.map(value => 
                            (<MenuItem key={value} value={value} >{value}</MenuItem>))
                        }
                 
                    </Select>
                )}
                rules={{required: !nullable}}
                name={name}
                control={control}
                defaultValue=""
            >

            </Controller>
        </FormControl>
    );
};

export default FormSelectField;