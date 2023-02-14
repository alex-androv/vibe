<template>
  <carousel :wrap-around="true">
    <slide v-for="slide in slides" :key="slide.id">
      <div class="carousel__item"><img :src="require(`@/assets/img/${slide.src}.jpg`)"></div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
    data () {
      return {
        slides: [
          {src:"kal", id:1},
          {src:"kal2", id:2},
        ]
      }
    },
}
</script>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
/* .carousel__pagination-button {
  background: #FFF;
} */
.carousel__pagination-button::after {
  background: #FFF;
}

.carousel__pagination-button--active {
  background: #FFF;

}
</style>