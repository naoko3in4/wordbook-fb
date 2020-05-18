<template>
  <div>
    <the-header />
    <div class="container flex justify-center">
      <div>
        <h1
          class="title text-blue-800 text-6xl font-light tracking-wider block"
        >
          wordbook
        </h1>
        <div v-if="contentsCreatedAtYesterday.length > 0">
          <div>
            <app-button
              color="blue mb-1"
              text="テストスタート"
              :class="{ isStarted: isStartActive }"
              @click="testStart()"
            />
          </div>
          1

          <div v-if="isShown">
            <ul
              v-for="(content, index) in contentsCreatedAtYesterday"
              :key="content.sys.id"
              class="max-w-sm rounded overflow-hidden shadow-lg my-0 mx-0"
            >
              <li class="px-6 py-4" @click="deleteWord(index)">
                <p class="font-bold text-xl mb-2">
                  {{ content.fields.word
                  }}<span class="text-blue-700 text-sm ml-2 font-bold">✗</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div v-else>
          <p class="text-blue-700 mb-2 font-bold">回答できる単語はありません</p>
        </div>

        <div class="pt-3 flex justify-around">
          <nuxt-link :to="{ name: 'new' }">
            <app-button color="green" size="x_small" text="新しく登録する" />
          </nuxt-link>
          <nuxt-link :to="{ name: 'posts' }">
            <app-button color="grey" text="登録単語一覧" />
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'
import TheHeader from '@/components/TheHeader.vue'
// import contentfulClient from '@/plugins/contentful'
import moment from '@/plugins/moment'

export default {
  components: {
    AppButton,
    TheHeader
  },
  // asyncData({ env }) {
  //   return contentfulClient
  //     .getEntries()
  //     .then((entries) => {
  //       console.log(entries.items)
  //       return {
  //         contents: entries.items
  //       }
  //     })
  //     .catch(console.error)
  // },
  data() {
    return {
      isStartActive: false,
      isShown: false,
      contentsCreatedAtYesterday: []
    }
  },
  computed: {
    //
  },
  mounted() {
    const dateYesterday = moment().subtract(1, 'days')._d
    console.log(dateYesterday)
    //   const contentsBoolean = this.contents.filter((content) => {
    //     const contentDate = moment(content.sys.createdAt)._d
    //     return moment(contentDate).isSame(dateYesterday, 'day')
    //   })
    //   const yesterdayContents = contentsBoolean
    //   this.contentsCreatedAtYesterday = yesterdayContents
    //   console.log('contentsCreatedAtYesterday', this.contentsCreatedAtYesterday)
    // },
    // methods: {
    //   testStart() {
    //     this.isStartActive = !this.isStartActive
    //     this.isShown = !this.isShown
    //   },
    //   deleteWord(index) {
    //     this.contentsCreatedAtYesterday.splice(index, 1)
    //   }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.isStarted {
  display: none;
}
</style>
