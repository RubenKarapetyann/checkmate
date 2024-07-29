import { ChangeEvent, FormEvent, useState } from "react"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { login, selectError, selectLoading } from "../features/authentication/authenticationSlice"

const useLogin = ()=>{
    const [fields, setFields] = useState({
        username : "",
        password : "",
    })

    const error = useAppSelector(selectError)
    const isLoading = useAppSelector(selectLoading)
    const dispatch = useAppDispatch()

    const onChange = (event: ChangeEvent<HTMLInputElement>, field: "username" | "password")=>{
        setFields(fields=>({...fields, [field] : event.target.value}))
    }


    const onSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        dispatch(login(fields))
    }

    return { fields, error, isLoading, onChange, onSubmit }
}

export default useLogin