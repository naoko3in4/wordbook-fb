<template>
  <div class="container pt-48">
    <nuxt-link :to="{ name: 'posts' }">
      <app-button color="grey" text="戻る" class="mb-3" />
    </nuxt-link>
    <form class="register__container my-0 mx-auto flex flex-col">
      <label for="単語">
        <p class="text-blue-700 text-xs text-left">編集する</p>
        <input
          v-model="formData.word"
          type="text"
          placeholder="単語を入力"
          class="p-1 mb-2 rounded-md"
        />
      </label>
      <label for="意味">
        <p class="text-blue-700 text-xs text-left">編集する</p>
        <input
          v-model="formData.meaning"
          type="text"
          placeholder="意味を入力"
          class="p-1 mb-5 rounded-md"
        />
      </label>

      <!-- 今後活用するかも -->
      <!-- <label for="出題回数">
        <input
          v-model="formData.appearanceCount"
          type="number"
          placeholder="出題回数"
        />
      </label>
      <label for="正答回数">
        <input
          v-model="formData.correctCount"
          type="number"
          placeholder="正答回数"
        />
      </label>
      <label for="正解率">
        <input
          v-model="formData.correctRate"
          type="number"
          placeholder="正解率"
        />
      </label> -->
      <app-button
        color="green"
        size="medium"
        text="編集送信"
        class="mb-3"
        @click.prevent="postWord()"
      />
      <app-button
        color="blue"
        size="medium"
        text="単語削除"
        @click.prevent="deleteWord()"
      />
    </form>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue'

// const contentful = require('contentful-management')
// const client = contentful.createClient({
//   accessToken: process.env.CTF_FOR_MY_APP_TOKEN
// })

export default {
  components: {
    AppButton
  },
  // async asyncData({ route }) {
  //   const entryId = route.params.id
  //   const mySpace = await client.getSpace(process.env.CTF_SPACE_ID)
  //   const myEnvironment = await mySpace.getEnvironment(
  //     process.env.CTF_ENVIRONMENT_ID
  //   )
  //   const entry = await myEnvironment.getEntry(entryId)
  //   return {
  //     entry
  //   }
  // },
  data() {
    return {
      testParam: null,
      formData: {
        word: null,
        meaning: null,
        appearanceCount: null,
        correctCount: null,
        correctRate: null
      }
    }
  },
  created() {
    // this.formData.word = this.entry.fields.word['en-US']
    // this.formData.meaning = this.entry.fields.meaning['en-US']
  },
  methods: {
    // async postWord() {
    //   this.entry.fields.word = {
    //     'en-US': this.formData.word
    //   }
    //   this.entry.fields.meaning = {
    //     'en-US': this.formData.meaning
    //   }
    //   const updateEntry = await this.entry.update()
    //   await updateEntry.publish()
    //   Object.keys(this.formData).map((key) => {
    //     this.formData[key] = null
    //   })
    // },
    // async deleteWord() {
    //   const unpublishPost = await this.entry.unpublish()
    //   await unpublishPost.delete()
    //   Object.keys(this.formData).map((key) => {
    //     this.formData[key] = null
    //   })
    // }
  }
}
</script>

<style>
.register__container {
  width: 180px;
}
</style>
