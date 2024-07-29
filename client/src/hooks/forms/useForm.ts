import { ChangeEvent, FormEvent, useState } from "react"
import { Fields } from "../../types/hooks/forms"
import { useAppDispatch } from "../../app/hooks"
import { AsyncThunk } from "@reduxjs/toolkit"


const useForm = <F extends Fields>(initialFields : F, submitHandle: AsyncThunk<any, any, any>)=>{
    const [fields, setFields] = useState<F>(initialFields)
    const dispatch = useAppDispatch()

    const onChange = (event: ChangeEvent<HTMLInputElement>, field: keyof F)=>{
        setFields(fields=>({...fields, [field] : event.target.value}))
    }

    const onSubmit = (event: FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        dispatch(submitHandle(fields))
    }

    return { fields, onChange, onSubmit }
}

export default useForm