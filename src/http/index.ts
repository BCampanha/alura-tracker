import axios, { AxiosInstance } from "axios"

const clienteHtpp: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000/"
})

export default clienteHtpp