import { api } from './api'

export const getData = () => {
    return api.get("/users")
}
