<template>
  <div class="nav_menu">
    <div class="content">
      <div class="logo">
        <img src="./../static/1.svg" alt="" />
      </div>

      <ul>
        <li v-for="(e, i) in links" :key="i">
          <nuxt-link
            :to="e.href"
            :class="[{ scrolled_nav: a_color }, 'a_color']"
            >
            {{ e.name_tm }}
            </nuxt-link
          >
        </li>
      </ul>

      <div class="lang">
        <div class="btn">
          <button class="red">
            <svg
              width="24"
              height="24"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2249 6.30096C22.2249 5.20096 21.3249 4.30096 20.2249 4.30096H4.22485C3.12485 4.30096 2.22485 5.20096 2.22485 6.30096V18.301C2.22485 19.401 3.12485 20.301 4.22485 20.301H20.2249C21.3249 20.301 22.2249 19.401 22.2249 18.301V6.30096ZM20.2249 6.30096L12.2249 11.301L4.22485 6.30096H20.2249ZM20.2249 18.301H4.22485V8.30096L12.2249 13.301L20.2249 8.30096V18.301Z"
                fill="red"
              />
            </svg>
          </button>
          <button class="yellow">
            <svg
              width="20"
              height="20"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.22485 16.301C5.12485 16.301 4.23485 17.201 4.23485 18.301C4.23485 19.401 5.12485 20.301 6.22485 20.301C7.32485 20.301 8.22485 19.401 8.22485 18.301C8.22485 17.201 7.32485 16.301 6.22485 16.301ZM16.2249 16.301C15.1249 16.301 14.2349 17.201 14.2349 18.301C14.2349 19.401 15.1249 20.301 16.2249 20.301C17.3249 20.301 18.2249 19.401 18.2249 18.301C18.2249 17.201 17.3249 16.301 16.2249 16.301ZM14.7749 11.301C15.5249 11.301 16.1849 10.891 16.5249 10.271L20.1049 3.78096C20.4749 3.12096 19.9949 2.30096 19.2349 2.30096H4.43485L3.49485 0.300964H0.224854V2.30096H2.22485L5.82485 9.89096L4.47485 12.331C3.74485 13.671 4.70485 15.301 6.22485 15.301H18.2249V13.301H6.22485L7.32485 11.301H14.7749ZM5.38485 4.30096H17.5349L14.7749 9.30096H7.75485L5.38485 4.30096Z"
                fill="red"
              />
            </svg>
          </button>
          <div class="dropbtn">
            <button>
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 12H22"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2V2Z"
                  stroke="red"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="langCon">
              <div class="dropbtnLang" @click="changeLanguage('tm')">tm</div>
              <div class="dropbtnLang" @click="changeLanguage('ru')">ru</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    const links = [
      {
        id: 1,
        href: '#home',
        name_tm: 'Baş sahypa',
        name_ru: 'Главный',
        active: false,
      },
      {
        id: 2,
        href: '#harytlar',
        name_tm: 'Harytlar',
        name_ru: 'Товары',
        active: false,
      },
      {
        id: 3,
        href: '#auction',
        name_tm: 'Auksion',
        name_ru: 'Аукцион',
        active: false,
      },
      {
        id: 4,
        href: '#dostawka',
        name_tm: 'Eltip bermek',
        name_ru: 'Доставка',
        active: false,
      },
      {
        id: 5,
        href: '#habarlashmak',
        name_tm: 'Habarlaşmak',
        name_ru: 'Контакты',
        active: false,
      },
    ]

    return {
      links,
    }
  },
  props: {
    a_color: {
      type: Boolean,
      require: true,
    },
  },

  computed: {
    lang() {
      return this.$i18n.locale
    },
    locales() {
      return this.$i18n.locales
    },
    currentLanguage() {
      return this.$i18n.locales.find(
        (locale) => locale.code === this.$i18n.locale
      )
    },
  },
  methods:{
    ...mapActions({
      changeLanguage: 'languages/changeLanguage',
    }),
  }
}
</script>

<style scoped>
  .dropbtn{
    position: relative;
    cursor: pointer;
  }
  .dropbtn:hover .langCon{
    display: block;
  }
  .langCon{
    position: absolute;
    top: 35px;
    left: 10px;
    background: red;
    display: none;
  }
</style>