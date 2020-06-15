<template>
  <div class="dropdown inline-block relative">
    <button
      class="buttons bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded items-center"
    >
      <div class="float-left">{{ country }}</div>
      <!--      <div class="mt-1 float-right">-->
      <!--        <img-->
      <!--          class="drop-icon"-->
      <!--          src="~assets/icons/down-arrow.svg"-->
      <!--          alt="search-icon"-->
      <!--          width="18"-->
      <!--          height="18"-->
      <!--        />-->
      <!--      </div>-->
    </button>
  </div>
</template>

<script>
export default {
  name: 'DropDown',
  props: {
    country: {
      type: String,
      default() {
        return ''
      }
    }
  }
}
</script>

<style scoped>
.buttons {
  width: 18rem;
}
</style>
