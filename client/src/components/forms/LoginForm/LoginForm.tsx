import { Button, FormControl, FormHelperText, TextField } from "@mui/material"
import { ChangeEvent } from "react"
import { inputConfig } from "../globalProps"
import useLogin from "../../../hooks/forms/useLogin"

export default function LoginForm(){
    const { fields, onChange, onSubmit, error, isLoading } = useLogin()

    return (
        <form onSubmit={onSubmit}>
            <FormControl sx={{ padding : "50px" }}>
                <TextField
                    label="Username"
                    {...inputConfig}
                    value={fields.username}
                    error={Boolean(error)}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>onChange(e, "username")}
                />
                <TextField
                    label="Password"
                    type="password"
                    error={Boolean(error)}
                    {...inputConfig}
                    value={fields.password}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>onChange(e, "password")}
                />
                {error && <FormHelperText sx={{color : "red"}}>{error}</FormHelperText>}
                <br />
                <Button
                    variant="contained"
                    type="submit"
                    disabled={isLoading}
                >Sign in</Button>
            </FormControl>
        </form>
    )
}