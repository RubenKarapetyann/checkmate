import { METHODS } from "../../constants/api";
import { Headers } from "./global";

export type fetchDataProps = {
    url: string,
    method?: METHODS,
    data?: Object,
    headers?: Headers
}