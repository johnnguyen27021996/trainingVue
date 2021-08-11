import service from "../utils/base.service";

const URL = 'todos';

export const demo = () => {
    return service({
        method: 'GET',
        url: URL,
        // param, (query param URL string)
        // data,  (data body request)
    })
}