import { defineStore } from 'pinia'
import { login } from '@/api/sys'

export const useUserStore = defineStore('user', {
  state: () => { return {} },
  getters: {},
  actions: {
    login: (username, password) => {
      return new Promise((resolve, reject) => {
        login({ username, password })
          .then((data) => {
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
