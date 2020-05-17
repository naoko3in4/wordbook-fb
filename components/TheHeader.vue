<template>
  <nav class="flex items-center justify-between flex-wrap bg-blue-800 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        id="_x32_"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="width: 30px; height: 30px; opacity: 1;"
        xml:space="preserve"
      >
        <style type="text/css">
          .st0 {
            fill: #4b4b4b;
          }
        </style>
        <g>
          <path
            class="st0"
            d="M431.774,60.45c-3.253-13.042,9.79-53.792,1.638-58.69c-8.152-4.891-26.085,32.606-26.085,32.606h-32.274
          c-4.891-22.824-16.635-35.859-23.148-34.228c-6.529,1.622-1.638,40.749,0,45.641c1.63,4.883-8.152,35.858-11.412,52.169
          c-3.267,16.295,6.522,21.186,6.522,42.38c0,21.193-1.638,70.102-14.681,84.766c-24.688,27.783-107.734-0.868-166.266,9.782
          c-50.538,0-84.774,29.337-92.926,78.246c-5.396,32.394,13.714,35.232,22.236,26.009c0.196,8.582,1.041,16.431,2.219,22.892
          c6.521,35.867,21.956,126.242,21.956,126.242c2.302,13.254,13.51,22.952,26.824,23.617c14.763-0.665,26.726-12.431,27.353-27.338
          l3.743-89.914h120.633l1.298,93.681c0.181,13.049,10.748,23.518,23.76,23.662c11.126-0.144,20.718-7.895,23.134-18.786
          l25.163-113.229c65.204-42.38,58.691-156.484,58.691-200.502c0,0-1.63-14.68,1.623-40.765
          C448.077,110.981,435.042,73.492,431.774,60.45z"
            style="fill: rgb(255, 255, 255);"
          ></path>
        </g>
      </svg>
      <span class="font-semibold text-xl tracking-wide">wordbook</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-200 hover:text-white hover:border-white"
        @click="menuClose()"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div
      class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
      :class="{ isClose: isMenuClosed }"
    >
      <div class="text-sm lg:flex-grow">
        <div
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          @click="$router.push('/')"
        >
          <span>
            トップ
          </span>
        </div>
        <div
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          @click="$router.push('/new')"
        >
          <span>
            新規単語登録
          </span>
        </div>
        <div
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          @click="$router.push('/posts')"
        >
          <span>
            登録単語一覧
          </span>
        </div>
        <div
          class="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4"
          @click="$router.push('/')"
        >
          <span>
            退会する
          </span>
        </div>
      </div>
      <div>
        <span
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
        >
          ログアウト
        </span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    //
  },
  data() {
    return {
      isMenuClosed: false
    }
  },
  methods: {
    menuClose() {
      this.isMenuClosed = !this.isMenuClosed
    }
  }
}
</script>

<style>
.isClose {
  display: none;
}
</style>
