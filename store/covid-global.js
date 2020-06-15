import axios from 'axios'
import { GLOBAL_API_URL } from '~/constants/api'

export const STORENAME = 'covid-global'

export const MUTATION_TYPES = {
  SET_DATA: 'SET_DATA'
}

export const ACTION_TYPES = {
  GET_DATA: 'GET_DATA'
}

export const state = () => ({
  covidData: ''
})

export const mutations = {
  [MUTATION_TYPES.SET_DATA](state, data) {
    state.covidData = data
  }
}

export const getters = {}

export const actions = {
  async [ACTION_TYPES.GET_DATA]({ commit }) {
    const response = axios.get(GLOBAL_API_URL).then((response) => {
      return response.data
    })
    await commit(MUTATION_TYPES.SET_DATA, response)
    return response
  }
}
