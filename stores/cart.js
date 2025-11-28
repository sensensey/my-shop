import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),

  getters: {
    totalCount(state) {
      return state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      )
    },

    totalPrice(state) {
      return state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    }
  },

  actions: {
    loadFromStorage() {
      if (typeof window === 'undefined') return
      const data = localStorage.getItem('cart')
      if (data) {
        this.items = JSON.parse(data)
      }
    },

    saveToStorage() {
      if (typeof window === 'undefined') return
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    addToCart(product) {
      const existing = this.items.find(
        item => item.id === product.id
      )

      if (existing) {
        existing.quantity++
      } else {
        this.items.push({
          ...product,
          quantity: 1
        })
      }

      this.saveToStorage()
    },

    removeFromCart(index) {
      this.items.splice(index, 1)
      this.saveToStorage()
    },

    incrementQuantity(index) {
      const item = this.items[index]
      if (!item) return
      item.quantity++
      this.saveToStorage()
    },

    decrementQuantity(index) {
      const item = this.items[index]
      if (!item) return

      if (item.quantity > 1) {
        item.quantity--
      } else {
        this.items.splice(index, 1)
      }

      this.saveToStorage()
    }
  }
})