<template>
  <div class="container">
    <div class="top-card">
      <card :number="confirmCase" />
      <div class="flex content-start flex-wrap h-48">
        <mini-card
          title="Recovered"
          :number="recovered"
          set-icon="male-patient.svg"
        />
        <mini-card title="Deaths" :number="deaths" set-icon="warning.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Card from '../components/Card'
import MiniCard from '../components/MiniCard'
import {
  STORENAME as GLOBAL_NAMESPACE,
  ACTION_TYPES as GLOBAL_ACTION
} from '~/store/covid-global'
export default {
  components: {
    Card,
    MiniCard
  },
  data: () => {
    return {
      confirmCase: 0,
      recovered: 0,
      deaths: 0
    }
  },
  computed: {
    ...mapState(GLOBAL_NAMESPACE, ['covidData'])
  },
  mounted() {
    this.callApi()
  },
  methods: {
    async callApi() {
      const storeParam = 'covid-global/GET_DATA'
      const list = await this.$store.dispatch(
        storeParam,
        GLOBAL_ACTION.GET_DATA
      )
      this.confirmCase = list?.confirmed?.value
      this.recovered = list?.recovered?.value
      this.deaths = list?.deaths?.value
    }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
