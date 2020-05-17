<template>
  <div>
    <div class="container flex justify-center flex-col">
      <h1
        class="title text-blue-800 text-6xl font-light tracking-wider leading-tight"
      >
        wordbook
      </h1>
      <span class="text-blue-800 font-light mb-4"
        >英単語記録と「きのう」の記憶チェック</span
      >
      <div>
        <div class="mb-3">
          <app-button
            color="green"
            size="large"
            text="ログイン"
            @click="login()"
          />
        </div>
        <nuxt-link :to="{ name: '/signin' }">
          <app-button color="grey" size="x_large" text="サインイン" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppButton
  },
  methods: {
    login() {
      const cookies = new Cookies()
      cookies.set('credential', 'true', { maxAge: 10 })
      // cookies.set('credential', 'true', { maxAge: 60 * 60 * 24 * 7 })
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
