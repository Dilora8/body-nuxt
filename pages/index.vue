<template>
  <div class="landing">
    <section class="home" id="home">
      <div class="hooper">
        <hooper :settings="hooperSettings">
          <slide>
            <div class="slider1">
              <div class="content">
                <div class="left">
                  <p class="title">
                    <span>El işlerini </span> iň oňat görnüşde elýeterli we
                    gyzykly etmek.
                  </p>
                  <div class="info">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slider1 slider2">
              <div class="content">
                <div class="left">
                  <p class="title">
                    <span>El işlerini </span> iň oňat görnüşde elýeterli we
                    gyzykly etmek.
                  </p>
                  <div class="info">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </slide>
          <slide>
            <div class="slider1 slider3">
              <div class="content">
                <div class="left">
                  <p class="title">
                    <span>El işlerini </span> iň oňat görnüşde elýeterli we
                    gyzykly etmek.
                  </p>
                  <div class="info">
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </slide>

          <hooper-navigation slot="hooper-addons"></hooper-navigation>
          <hooper-pagination slot="hooper-addons"></hooper-pagination>
          <hooper-progress slot="hooper-addons"></hooper-progress>
        </hooper>
      </div>
    </section>

    <section class="prodact" id="harytlar">
      <h1>Harytlar</h1>
      <div class="items">
        <div class="photo">
          <div id="item1">
            <img src="./../assets/images/11.png" alt="" />
          </div>
          <div id="item2">
            <img src="./../assets/images/12.png" alt="" />
          </div>
          <div id="item3">
            <img src="./../assets/images/13.png" alt="" />
          </div>
          <div id="item4">
            <img src="./../assets/images/14.png" alt="" />
          </div>
          <div id="item5">
            <img src="./../assets/images/2.png" alt="" />
          </div>
          <div id="item6">
            <img src="./../assets/images/11.png" alt="" />
          </div>
          <!-- <img  src="./../assets/images/12.png" alt="" /> -->
          <!-- <img src="./../assets/images/14.png" alt="" /> -->
        </div>
      </div>
    </section>
    <section class="reklam">
      <h1>Mahabat</h1>
      <div class="mahabat">
        <img src="./../assets/images/15.png" alt="" />
      </div>
    </section>
    <section class="auction" id="auction">
      <div class="top">
        <div class="left">
          <h1><span>Täze haryt</span> El keşde</h1>
          <p>Islegiňiz bilen,bilelikde...</p>
        </div>
        <div class="right">
          <img src="./../assets/images/16.png" alt="" />
        </div>
      </div>
      <div class="bottom">
        <div class="input">
          <div class="left">
            <div class="left1">
              <p>Habarlaşmak</p>
            </div>
          </div>
          <div class="right">
            <div class="input1">
              <label for="name">Ady</label>
              <input type="text" id="name"/>
            </div>
            <div class="input1">
              <label for="phone">Telefon</label>
              <input type="number" id="phone"/>
            </div>

            <button>send</button>
          </div>
        </div>
      </div>
    </section>
    <section class="dostawka" id="dostawka">
      <div class="gps">
        <img src="./../assets/images/17.png" alt="" />
      </div>
    </section>
    <footer>
      <div class="habarlashmak" id="habarlashmak">
        <div class="logo">
          <img src="./../static/2.svg" alt="" />
        </div>
        <div class="info">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.2324 12.336C14.3099 12.336 13.4174 12.186 12.5849 11.916C12.3224 11.826 12.0299 11.8935 11.8274 12.096L10.6499 13.5735C8.52735 12.561 6.53985 10.6485 5.48235 8.45103L6.94485 7.20603C7.14735 6.99603 7.20735 6.70353 7.12485 6.44103C6.84735 5.60853 6.70485 4.71603 6.70485 3.79353C6.70485 3.38853 6.36735 3.05103 5.96235 3.05103H3.36735C2.96235 3.05103 2.47485 3.23103 2.47485 3.79353C2.47485 10.761 8.27235 16.551 15.2324 16.551C15.7649 16.551 15.9749 16.0785 15.9749 15.666V13.0785C15.9749 12.6735 15.6374 12.336 15.2324 12.336Z"
              fill="#FFC90A"
            />
          </svg>
          <p class="one">+99362668353</p>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5811 3.80103H3.58105C2.75605 3.80103 2.08855 4.47603 2.08855 5.30103L2.08105 14.301C2.08105 15.126 2.75605 15.801 3.58105 15.801H15.5811C16.4061 15.801 17.0811 15.126 17.0811 14.301V5.30103C17.0811 4.47603 16.4061 3.80103 15.5811 3.80103ZM15.5811 6.80103L9.58105 10.551L3.58105 6.80103V5.30103L9.58105 9.05103L15.5811 5.30103V6.80103Z"
              fill="#FFC90A"
            />
          </svg>
          <p class="one">Hünärlieller@gmail.com</p>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.27608 2.47445C2.56014 2.81834 2.05576 3.33257 1.72639 4.0543L1.47546 4.60404L1.5031 9.43818L1.53083 14.2722L1.75926 14.7087C2.0705 15.3035 2.59805 15.8383 3.17912 16.1479L3.66391 16.4064H8.60879H13.5537L13.99 16.1778C14.5844 15.8664 15.119 15.3386 15.4285 14.7572L15.6868 14.2722V9.32487V4.37753L15.4285 3.89249C15.0902 3.257 14.5524 2.74985 13.893 2.44408L13.3598 2.19681L8.60879 2.19594L3.85783 2.19507L3.27608 2.47445ZM11.927 4.69348C12.4492 4.97266 12.9588 5.48253 13.2379 6.00501C13.4511 6.40409 13.4567 6.49004 13.4567 9.32487C13.4567 12.1597 13.4511 12.2456 13.2379 12.6447C13.1176 12.8701 12.8656 13.2081 12.6778 13.396C12.4901 13.5838 12.1522 13.8359 11.927 13.9563C11.5281 14.1696 11.4422 14.1752 8.60879 14.1752C5.77538 14.1752 5.68947 14.1696 5.29059 13.9563C4.76837 13.6771 4.25875 13.1672 3.97971 12.6447C3.77018 12.2524 3.75961 12.1214 3.73111 9.54993C3.71259 7.88995 3.73993 6.72121 3.80256 6.48849C3.94606 5.95524 4.42426 5.2727 4.87163 4.96257C5.61569 4.4466 5.76432 4.4271 8.75423 4.45174C11.4142 4.47366 11.5329 4.48268 11.927 4.69348ZM5.70004 5.48243C5.23066 5.69915 4.93523 6.00627 4.73511 6.48568C4.51482 7.0131 4.51482 11.6366 4.73511 12.1641C4.93523 12.6435 5.23066 12.9506 5.70004 13.1673C6.04492 13.3266 6.36488 13.3467 8.58766 13.3485C10.6281 13.3503 11.1535 13.3231 11.4466 13.2005C11.9257 13.0003 12.2327 12.7047 12.4493 12.2351C12.6088 11.8893 12.6283 11.5721 12.6283 9.32487C12.6283 7.07761 12.6088 6.7604 12.4493 6.41467C12.2327 5.94506 11.9257 5.64948 11.4466 5.44926C11.1535 5.32664 10.6281 5.29948 8.58766 5.30123C6.36488 5.30307 6.04492 5.32315 5.70004 5.48243ZM11.663 6.26916C11.7696 6.37587 11.8569 6.54563 11.8569 6.64642C11.8569 6.87894 11.5784 7.20479 11.3146 7.28104C11.0371 7.36116 10.5964 7.00379 10.5964 6.69861C10.5964 6.39352 10.9182 6.07514 11.2267 6.07514C11.36 6.07514 11.5563 6.16245 11.663 6.26916ZM9.56296 6.99652C10.8598 7.53859 11.4776 9.1846 10.8479 10.4194C10.0349 12.0137 7.89751 12.3031 6.73342 10.9766C6.30012 10.4828 6.13635 10.0263 6.13635 9.31197C6.13635 8.30514 6.63443 7.50551 7.54458 7.05132C8.02035 6.81385 9.05858 6.78572 9.56296 6.99652ZM8.23512 7.74269C7.45635 7.90886 7.00898 8.48402 7.00898 9.31915C7.00898 10.4187 7.90575 11.1409 8.97898 10.9057C9.75542 10.7354 10.2086 10.1529 10.2086 9.32487C10.2086 8.22132 9.32221 7.51065 8.23512 7.74269Z"
              fill="#FFC90A"
            />
          </svg>
          <p class="one">Hünärlieller</p>
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.58118 1.80103C6.67868 1.80103 4.33118 4.14853 4.33118 7.05103C4.33118 10.9885 9.58118 16.801 9.58118 16.801C9.58118 16.801 14.8312 10.9885 14.8312 7.05103C14.8312 4.14853 12.4837 1.80103 9.58118 1.80103ZM9.58118 8.92603C8.54618 8.92603 7.70618 8.08603 7.70618 7.05103C7.70618 6.01603 8.54618 5.17603 9.58118 5.17603C10.6162 5.17603 11.4562 6.01603 11.4562 7.05103C11.4562 8.08603 10.6162 8.92603 9.58118 8.92603Z"
              fill="#FFC90A"
            />
          </svg>
          <p class="one">Türkmenistan,Aşgabat</p>
        </div>
        <div class="footer">
          <p>©2022 All rights reserved Design And Developed</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import {
  Hooper,
  Slide,
  Progress as HooperProgress,
  Pagination as HooperPagination,
  Navigation as HooperNavigation,
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperProgress,
    HooperPagination,
    HooperNavigation,
  },
  computed: {
    hooperSettings() {
      const settings = {
        itemsToShow: 1,
        centerMode: false,
        autoPlay: true,
        playSpeed: 5000,
        transition: 1100,
        hoverPause: false,
        infiniteScroll: true,
        wheelControl: false,
        breakpoints: {
          1200: {
            itemsToShow: 1,
          },
          800: {
            itemsToShow: 6,
          },
          750: {
            itemsToShow: 5,
          },
          600: {
            itemsToShow: 4,
          },
          500: {
            itemsToShow: 3,
          },
          300: {
            itemsToShow: 1,
          },
        },
      }
      return settings
    },
  },
}
</script>

<style>
</style>