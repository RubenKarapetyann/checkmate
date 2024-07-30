import { useAppSelector } from "../../app/hooks"
import { login, selectError, selectLoading } from "../../features/authentication/authenticationSlice"
import useForm from "./useForm"
import { LoginFormFields } from "../../types/hooks/forms"

const useLogin = ()=>{
    const { fields, onChange, onSubmit } = useForm<LoginFormFields>({
        username : "",
        password : ""
    }, login)

    const error = useAppSelector(selectError)
    const isLoading = useAppSelector(selectLoading)

    return { fields, error, isLoading, onChange, onSubmit }
}

export default useLogin