<template>
  <div class="card max-w-xs rounded overflow-hidden shadow-lg mt-10">
    <div class="font-bold text-2xl mb-2 pt-4">Covid - 19</div>
    <div class="images">
      <img
        class="object-scale-down h-48 w-full"
        src="~assets/images/mask-man.svg"
        alt="Covid Man"
      />
    </div>
    <div class="mt-4">
      <drop-down class="inset-y-0 left-0" country="Indonesia" />
      <div class="px-6 my-4 text-container flex">
        <div class="text-red-800 text-2xl flex-1 text-left">
          {{ number }}
        </div>
        <div class="text-red-800 text-2xl flex-1 text-right">
          Confirmed
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DropDown from './DropDown'
export default {
  name: 'Card',
  components: {
    DropDown
  },
  props: {
    number: {
      type: Number,
      default() {
        return 0
      }
    }
  }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 1rem;
}
.images {
  padding-top: 4rem;
  height: 18rem;
}
.text-container {
}
</style>
