<template>
  <div class="w-1/2">
    <div class="mini p-4 rounded overflow-hidden shadow-lg">
      <div class="font-light text-xs mb-2">{{ title }}</div>
      <div>
        <img
          class="object-scale-down h-16 w-full mt-2"
          :src="require(`@/assets/icons/${setIcon}`)"
          alt="Covid
        Confirm"
        />
      </div>
      <div class="font-bold text-base mb-2 mt-4">{{ number }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MiniCard',
  props: {
    number: {
      type: Number,
      default() {
        return 0
      }
    },
    title: {
      type: String,
      default() {
        return ''
      }
    },
    setIcon: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.mini {
  background: white;
  border-radius: 1rem;
  width: 9rem;
  margin: 0.8rem 0rem 0.6rem 0.6rem;
}
</style>
