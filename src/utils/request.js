import axios from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 5000,
})

service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    // 根据success状态决定业务逻辑
    if (success) { return data }
    else {
      ElMessage.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // TODO：处理TOKEN超时问题
    ElMessage.error(error.message)
    return Promise.reject(error)
  },
)

export default service
