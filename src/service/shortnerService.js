import { ERROR_RESPONSE, SUCCESS_RESPONSE } from "../constants/Constants"
import Api from "./api"
import { errorHandler } from "./errorHandler"

export const shortenUrl = async (url) => {
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${url}`
    return await Api.get(apiUrl)
        .then((response) => {
            return {
                status: SUCCESS_RESPONSE,
                response: response
            }
        })
        .catch(error=>{
            return {
                status: ERROR_RESPONSE,
                error: errorHandler(error)
            }
        })
}