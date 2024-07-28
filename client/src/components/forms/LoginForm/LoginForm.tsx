import { Button, FormControl, TextField } from "@mui/material"
import { ChangeEvent, FormEvent, useState } from "react"

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
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>onChange(e, "username")}
                />
                <TextField
                    label="Password"
                    type="password"
                    {...generalProps}
                    value={fields.password}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>onChange(e, "password")}
                />
                <br />
                <Button
                    variant="contained"
                    type="submit"
                >Sign in</Button>
            </FormControl>
        </form>
    )
}