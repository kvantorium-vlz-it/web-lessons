import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useNewsStore = defineStore('news', {
    state: () => ({
        news: []
    }),

    actions: {
        pushNews(news) {
            this.news.push(news)
        },
        removeNews(news) {

        }
    },

    getters: {
        newNews: (state) => {
            return state.news.filter(n => n.date < 1)
        }
    }
})

const useSetupNewsStore = defineStore('setupNews', async () => {
    const DBNews = await fetch('requrest')

    const news = ref(DBNews)

    const getNews = (id) => {
        news.value.push(fetch(id))
    }

    const removeNews = (id) => {
        news.value.remove()
        fetch(id, {
            method: 'DELETE',
        })
    }
})