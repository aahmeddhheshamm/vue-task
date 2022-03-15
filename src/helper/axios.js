import axios from "axios";

export default () => {
    const apiClient = axios.create({
        baseURL : 'https://dummyapi.io/data/v1/',
        headers: {
            'app-id': '6230862df14e4c66472e4bc8',
            Accept: 'application/json'
        }
    })

    // MORA2BA
    apiClient.interceptors.response.use((response) => {
        return response
    }, (error) => {
        return Promise.reject(error)
    })
    return apiClient
}