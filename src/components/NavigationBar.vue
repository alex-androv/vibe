<template>
    <div id="nav" class="flex flex-col justify-between h-48 sm:flex-row sm:h-auto sm:mx-auto sm:w-1/2 lg:w-1/3 2xl:w-1/4">
        <router-link to="/" class="self-center">АФИША</router-link>
        <router-link to="/about" class="self-center">О КЛУБЕ</router-link>
        <router-link to="/rider" class="self-center">ТЕХНИЧЕСКИЙ РАЙДЕР</router-link>
        <router-link to="/contacts" class="self-center">КОНТАКТЫ</router-link>
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-style: normal;
  font-weight: 800;
  font-size: 14px;
  line-height: 17px;
  /* align-self: center; */

}

#nav a.router-link-exact-active {
  border-bottom: 2px solid transparent;
    /* border-image: linear-gradient(0.25turn, rgba(255,249,34), rgba(255,0,128), rgba(56,2,155,0)); */
    border-image: linear-gradient(0.25turn, #E278FB, #DE511D, #EAA928);
    border-image-slice: 1;
}
</style>