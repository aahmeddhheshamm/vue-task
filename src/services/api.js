import Api from '@/helper/axios'

export default {
    getUsers (pageNum) {
        return Api().get(`user?page=${pageNum}`)
    },
    getUserInfo (id) {
        return Api().get(`user/${id}`)
    },
    deleteUser (id) {
        return Api().delete(`user?page=/${id}` + id)
    }
}