import { defineStore } from 'pinia'
import { login } from '@/api/sys'
import { getItem, setItem } from '@/utils/storage'
import { TOKEN } from '@/constant/index'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: getItem(TOKEN) || '',
    }
  },
  getters: {
    getToken: (state) => {
      return state.token
    },
  },
  actions: {
    login(username, password) {
      return new Promise((resolve, reject) => {
        login({ username, password })
          .then((data) => {
            this.token = data.token
            setItem(TOKEN, data.token)
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
