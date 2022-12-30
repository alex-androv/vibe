<template>
  <div>
    <div class="border-t border-b border-indigo-900 p-4 2xl:flex 2xl:justify-between 2xl:items-center">
      <div class="flex flex-col md:flex-row md:items-start">
        <div class="date flex md:flex-col md:items-center md:mr-8">
          <p class="uppercase text-xs font-medium">ВТ, 19:00</p>
          <p class="uppercase text-xs font-medium mr-1 md:hidden">,</p>
          <p class="uppercase text-xs md:text-2xl font-medium md:font-semibold mr-1 md:mr-0">13</p>
          <p class="uppercase text-xs md:text-sm font-medium">декабрь</p>
        </div>
        <div class="show-desc py-6 2xl:py-0 md:pt-0 md:mt-4 ">
          <p class="uppercase text-2xl font-semibold">название группы</p>
          <p class="uppercase text-sm font-medium">Короткое описание мероприятия</p>
        </div>
      </div>
      <div class="flex justify-end">
        <a href="" target="blank" class="buy-ticket uppercase hover:border-red-500 transition duration-200 border-2 rounded-3xl py-2 px-8 ml-full">купить билет</a>
      </div>
    </div>
    <!-- <div class="flex flex-col border-b border-indigo-900 p-4">
      <div class="flex">
        <p class="uppercase">ВТ, 19:00</p>
        <p class="uppercase mr-1 md:hidden">,</p>
        <p class="uppercase mr-1">13</p>
        <p class="uppercase">декабрь</p>
        </div>
      <div class="py-6">
        <p class="uppercase text-2xl font-semibold">название группы</p>
        <p class="uppercase text-sm font-medium">Короткое описание мероприятия</p>
      </div>
      <a href="" target="blank" class="buy-ticket uppercase hover:border-red-500 transition duration-200 border-2 rounded-3xl py-2 px-8 self-end">купить билет</a>
    </div>
    <div class="flex flex-col border-b border-indigo-900 p-4">
      <div class="flex">
        <p class="uppercase">ВТ, 19:00</p>
        <p class="uppercase mr-1 md:hidden">,</p>
        <p class="uppercase mr-1">13</p>
        <p class="uppercase">декабрь</p>
        </div>
      <div class="py-6">
        <p class="uppercase text-2xl font-semibold">название группы</p>
        <p class="uppercase text-sm font-medium">Короткое описание мероприятия</p>
      </div>
      <a href="" target="blank" class="buy-ticket uppercase hover:border-red-500 transition duration-200 border-2 rounded-3xl py-2 px-8 self-end">купить билет</a>
    </div>
    <div class="flex flex-col border-b border-indigo-900 p-4">
      <div class="flex">
        <p class="uppercase">ВТ, 19:00</p>
        <p class="uppercase mr-1 md:hidden">,</p>
        <p class="uppercase mr-1">13</p>
        <p class="uppercase">декабрь</p>
        </div>
      <div class="py-6">
        <p class="uppercase text-2xl font-semibold">название группы</p>
        <p class="uppercase text-sm font-medium">Короткое описание мероприятия</p>
      </div>
      <a href="" target="blank" class="buy-ticket uppercase hover:border-red-500 transition duration-200 border-2 rounded-3xl py-2 px-8 self-end">купить билет</a>
    </div>
    <div class="flex flex-col border-b border-indigo-900 p-4">
      <div class="flex">
        <p class="uppercase">ВТ, 19:00</p>
        <p class="uppercase mr-1 md:hidden">,</p>
        <p class="uppercase mr-1">13</p>
        <p class="uppercase">декабрь</p>
        </div>
      <div class="py-6">
        <p class="uppercase text-2xl font-semibold">название группы</p>
        <p class="uppercase text-sm font-medium">Короткое описание мероприятия</p>
      </div>
      <a href="" target="blank" class="buy-ticket uppercase hover:border-red-500 transition duration-200 border-2 rounded-3xl py-2 px-8 self-end">купить билет</a>
    </div>
    <div class="flex flex-col border-b border-indigo-900 p-4">
      <div class="flex">
        <p class="uppercase">ВТ, 19:00</p>
        <p class="uppercase mr-1 md:hidden">,</p>
        <p class="uppercase mr-1">13</p>
        <p class="uppercase">декабрь</p>
        </div>
      <div class="py-6">
        <p class="uppercase text-2xl font-semibold">название группы</p>
        <p class="uppercase text-sm font-medium">Короткое описание мероприятия</p>
      </div>
      <a href="" target="blank" class="buy-ticket uppercase hover:border-red-500 transition duration-200 border-2 rounded-3xl py-2 px-8 self-end">купить билет</a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
.buy-ticket:active {
  background: linear-gradient(99.26deg, #E278FB 6.53%, rgba(222, 81, 29, 0.97) 51.82%, rgba(234, 169, 40, 0.94) 89.27%);
}
/* @media (min-width:768px){
  .date {
    margin-right:32px;
  }
} */
/* @media (min-width:768px){
  .show-desc {
    margin-top:19px;
  }
} */
/* @media (min-width:768px){
  .buy-ticket {
    justify-self: end;
  }
} */
</style>
