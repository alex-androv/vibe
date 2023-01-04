<template>
    <div class="afisha-item border-b border-indigo-900 p-4 2xl:flex 2xl:justify-between 2xl:items-center">
      <div class="flex flex-col md:flex-row md:items-start">
        <div class="date flex md:flex-col md:items-center md:mr-8">
          <p class="uppercase text-xs font-medium">{{item.day}}, {{item.time}}</p>
          <p class="uppercase text-xs font-medium mr-1 md:hidden">,</p>
          <p class="uppercase text-xs md:text-2xl font-medium md:font-semibold mr-1 md:mr-0">{{item.date}}</p>
          <p class="uppercase text-xs md:text-sm font-medium">{{item.month}}</p>
        </div>
        <div class="show-desc py-6 2xl:py-0 md:pt-0 md:mt-4 ">
          <p class="uppercase text-2xl font-semibold">{{item.band}}</p>
          <p class="uppercase text-sm font-medium">{{item.desc}}</p>
        </div>
      </div>
      <div class="flex justify-end">
        <a :href="item.link" target="blank" class="buy-ticket uppercase hover:border-red-500 transition duration-200 border-2 rounded-3xl py-2 px-8 ml-full">купить билет</a>
      </div>
    </div>
</template>

// <script>
export default {
    props: {
        item: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>
</style>