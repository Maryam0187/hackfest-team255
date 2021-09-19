import axios from 'axios';
import { httpURL} from '../environment';

const api = axios.create({
	baseURL: httpURL
});

const getHeader = (token: string, params?: any): any => {
    if(params){
        return {
            params: params,
            headers: {
                'Authorization': token
            }
        };
    } else {
        return {
            headers: {
                'Authorization': token
            }
        };
    }
}

const postCall = async (URL: string, body: any, token?:string)=> {
    try{
        if(token) {
            const header = getHeader(token);
            return await api.post(URL,body, header);
        } else {
            return await api.post(URL,body);
        }
    } catch (error) {
        return error;
    }
}

const putCall = async (URL: string, body: any, token?: string) => {
    try{
        if(token) {
            const header = getHeader(token);
            return await api.put(URL,body, header);
        } else {
            return await api.put(URL,body);
        }
    } catch (error) {
        return error;
    }
}

const getCall = async (URL: string, token?: string, params?: any)=> {
    try {
        if (token) {
            let header;
            if(params) {
                header = getHeader(token, params);
            } else {
                header = getHeader(token);
            }
            return await api.get(URL, header);
        } else {
            return await api.get(URL);
        }
    } catch (error) {
        return error;
    }
}

const deleteCall = async (URL: string, body: any, token?:string) => {
    try{
        if(token) {
            const header = getHeader(token);
            return await api.delete(URL,header);
        } else {
            return await api.delete(URL);
        }
    } catch (error) {
        return error;
    }
}

export {postCall, putCall, getCall, deleteCall}