import Api from '@/helper/axios'

export default {
    getUsers (pageNum) {
        return Api().get(`user?page=${pageNum}`)
    },
    addUser (data) {
        return Api().post('user/create/', data)
    },
    getUserInfo (id) {
        return Api().get(`user/${id}`)
    },
    editUser (id , newData) {
        return Api().put(`user/${id}`, newData)
    },
    deleteUser (id) {
        return Api().delete(`user/${id}`)
    }
}