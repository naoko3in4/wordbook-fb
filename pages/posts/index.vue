<template>
  <div>
    <the-header />
    <div class="container pt-20">
      <h2 class="list-title">登録単語一覧</h2>
      <div
        class="all_word_list__wrapper max-w-xs my-0 mx-auto mb-6 p-5 pb-8 rounded-lg overflow-scroll bg-white"
      >
        <div
          v-for="post in showPosts"
          :key="post.id"
          class="all_word-list flex justify-between"
        >
          <div class="leading-8 whitespace-no-wrap overflow-scroll">
            <span class="text-blue-700 font-bold">{{ post.word }}</span
            ><span class="text-sm">:{{ post.meaning }}</span>
          </div>
          <div
            class="edit-btn w-10 leading-8 rounded-md text-center text-gray-500 border border-gray-400"
            @click="goToEditPage(post.id)"
          >
            編集
          </div>
        </div>
      </div>

      <nuxt-link :to="{ name: 'index' }">
        <app-buttton color="grey" text="戻る" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
// import contentfulClient from '@/plugins/contentful'
import AppButtton from '@/components/AppButton.vue'
import TheHeader from '@/components/TheHeader.vue'

export default {
  components: {
    AppButtton,
    TheHeader
  },
  computed: {
    showPosts() {
      return [
        {
          id: '001',
          word: 'red',
          meaning: '赤',
          created_at: '2020/05/18 16:00:00',
          user: {
            id: 'naoko3in4'
          }
        },
        {
          id: '002',
          word: 'pink',
          meaning: 'ピンク',
          created_at: '2020/05/18 17:00:00',
          user: {
            id: 'naoko3in4'
          }
        }
      ]
    }
  }

  // asyncData({ env }) {
  //   return contentfulClient
  //     .getEntries()
  //     .then((entries) => {
  //       return {
  //         contents: entries.items
  //       }
  //     })
  //     .catch(console.error)
  // },
  // methods: {
  //   goToEditPage(id) {
  //     this.$router.push({
  //       path: `posts/${id}`
  //     })
  //   }
  // }
}
</script>

<style>
.all_word-list {
  border-bottom: 1px solid #cbd5e0;
}

.all_word_list__wrapper {
  max-height: 450px;
}

.edit-btn {
  font-size: 11px;
}

.edit-btn:hover {
  background: #cbd5e0;
  color: #fff;
  cursor: pointer;
}
</style>
