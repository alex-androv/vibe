<template>
  <div>
    <afisha-item v-for="(item, index) in afishaItems" :item="item" :key="index" :id="index"/>
  </div>
</template>

<script>
import AfishaItem from '@/components/AfishaItem'
export default {
  name: 'Home',
  components: {
    AfishaItem,
  },
  computed: {
    afishaItems() {
      return this.$store.getters.afishaItems;
      },
    } 
}
</script>

<style>
.buy-ticket:active {
  background: linear-gradient(99.26deg, #E278FB 6.53%, rgba(222, 81, 29, 0.97) 51.82%, rgba(234, 169, 40, 0.94) 89.27%);
}
.afisha-item:first-child {
  border-top: 1px solid rgb(49 46 129);
}
</style>
