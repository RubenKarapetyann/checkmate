import { Button, FormControl, FormHelperText, TextField } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"
import { useSelector } from "react-redux"
import { selectError, selectLoading } from "../../../features/authentication/authenticationSlice"

const generalProps = {
    size : "small" as "small",
    required : true,
    margin : "normal" as "normal"
}

export default function LoginForm(){
    const [fields, setFields] = useState({
        "username" : "",
        "password" : "",
    })
    const error = useSelector(selectError)
    const isLoading = useSelector(selectLoading)

    const onChange = (event: ChangeEvent<HTMLInputElement>, field: "username" | "password")=>{
        setFields(fields=>({...fields, [field] : event.target.value}))
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(fields)
    }

    return (
        <form onSubmit={onSubmit}>
            <FormControl sx={{ padding : "50px" }}>
                <TextField
                    label="Username"
                    {...generalProps}
                    value={fields.username}
                    error={Boolean(error)}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>onChange(e, "username")}
                />
                <TextField
                    label="Password"
                    type="password"
                    error={Boolean(error)}
                    {...generalProps}
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