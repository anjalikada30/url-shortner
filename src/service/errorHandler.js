import { ERROR_MESSAGE_1, ERROR_MESSAGE_10, ERROR_MESSAGE_2, ERROR_MESSAGE_3, ERROR_MESSAGE_4, ERROR_MESSAGE_DEFAULT } from "../constants/Constants";

export const errorHandler = (error) => {
    const { request, response } = error;
    if (response) {
        const { error_code } = response.data;
        const status = response.status;
        let message;
        switch (error_code) {
            case 1:
                message = ERROR_MESSAGE_1
                break;
            case 2:
                message = ERROR_MESSAGE_2
                break;
            case 3:
                message = ERROR_MESSAGE_3
                break;
            case 4:
                message = ERROR_MESSAGE_4
                break;
            case 10:
                message = ERROR_MESSAGE_10
                break;
            default:
                message = ERROR_MESSAGE_DEFAULT
                break;
        }
        return {
            message,
            status
        }
    } else if (request) {
        //request sent but no response received
        return {
            message: "server time out",
            status: 503,
        };
    } else {
        // Something happened in setting up the request that triggered an Error
        return { message: "opps! something went wrong while setting up request" };
    }
}