<template>
  <div class="main">
    <div :class="[{scrolled_nav: scrolled}, 'header']">
      <Header :a_color="scrolled"/>
    </div>
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
  name: 'DefaultLayout',
  components: {
    Header,
  },
  data() {
    return {
      scrolled: false,
    }
  },

  beforeMount() {
    window.onscroll = () => {
      if (scrollY > 80) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  },
}
</script>
