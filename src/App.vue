<template>
<!-- <div class="header">header</div> -->
<!-- <img src="@/assets/header.png" class="w-full"> -->
<img src="@/assets/img/Vibe_Hall_white_logo1.svg" class="mx-auto my-10 w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
  <div id="nav" class="flex flex-col justify-between h-48 sm:flex-row sm:h-auto sm:mx-auto sm:w-1/2 lg:w-1/3 2xl:w-1/4">
    <router-link to="/" class="self-center">АФИША</router-link>
    <router-link to="/about" class="self-center">О КЛУБЕ</router-link>
    <router-link to="/rider" class="self-center">ТЕХНИЧЕСКИЙ РАЙДЕР</router-link>
    <router-link to="/contacts" class="self-center">КОНТАКТЫ</router-link>
  </div>
  <router-view/>
  <div class="footer flex flex-col justify-between items-center uppercase h-56 md:flex-row md:h-28 md:px-20 2xl:px-28">
    <p>г. москва, Ул. Правды, 24с3</p>
    <div class="flex flex-col items-center justify-between h-20">
      <a href="tel:+74951111111">+7 (495) 111-11-11</a>
      <a href = "mailto: vibepromomsc@gmail.com">vibepromomsc@gmail.com</a>
      <a href="https://vk.com/vibemoscow" target="blank"><img src="@/assets/img/VK.svg" class="vk"></a>
    </div>
    <p>© 2022, Клуб vibe hall</p>
  </div>
</template>

<style>
@font-face {
  font-family: 'Akrobat';
  src: url('./assets/fonts/akrobat/Akrobat.ttf') format('truetype');
}
body {
  background: #131524;
}
#app {
  font-family: Akrobat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #fff;
}

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
.footer {
  background: #1D2035;
  /* padding:19px 0 19px 0; */
}
.vk {
  width: 22px;
  height: 22px;
}
</style>
