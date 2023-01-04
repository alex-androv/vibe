<template>
  <div>
    <afisha-item v-for="item in items" :item="item" :key="item.id"/>
  </div>
</template>

<script>
import AfishaItem from '@/components/AfishaItem'
export default {
  name: 'Home',
  components: {
    AfishaItem,
  },
    data: () => ({
      items: [
        {id:1, day: 'ВТ', time: '19:00', date: 13, month: 'декабрь', band: 'название группы', desc: 'Короткое описание мероприятия', link: 'https://translate.google.com/?hl=ru'},
        {id:2, day: 'ср', time: '18:00', date: 14, month: 'декабрь', band: 'ТНФ', desc: 'рок кованых сапог', link: 'https://tailwindcss.com/docs/align-items'},
    ]
    }),
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
