<template>
  <div class="container pt-48">
    <nuxt-link :to="{ name: 'index' }">
      <app-button color="grey" text="戻る" class="mb-5" />
    </nuxt-link>
    <form class="my-0 mx-auto flex flex-col">
      <label for="単語">
        <input
          v-model="formData.word"
          type="text"
          placeholder="単語を入力"
          class="p-1 mb-5 rounded-md"
        />
      </label>
      <label for="意味">
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
        size="large"
        text="送信"
        class="my-0 mx-auto"
        @click.prevent="postWord()"
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
  data() {
    return {
      formData: {
        word: null,
        meaning: null,
        appearanceCount: null,
        correctCount: null,
        correctRate: null
      }
    }
  },
  methods: {
    // async postWord() {
    //   const mySpace = await client.getSpace(process.env.CTF_SPACE_ID)
    //   const myEnvironment = await mySpace.getEnvironment(
    //     process.env.CTF_ENVIRONMENT_ID
    //   )
    //   const res = await myEnvironment.createEntry(
    //     process.env.CTF_CONTENT_TYPE_ID,
    //     {
    //       fields: {
    //         word: {
    //           'en-US': this.formData.word
    //         },
    //         meaning: {
    //           'en-US': this.formData.meaning
    //         },
    //         appearanceCount: {
    //           'en-US': +this.formData.appearanceCount
    //         },
    //         correctCount: {
    //           'en-US': +this.formData.correctCount
    //         },
    //         correctRate: {
    //           'en-US': +this.formData.correctRate
    //         }
    //       }
    //     }
    //   )
    //   await res.publish()
    //   Object.keys(this.formData).map((key) => {
    //     this.formData[key] = null
    //   })
    // }
  }
}
</script>
