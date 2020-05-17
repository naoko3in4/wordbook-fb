<template>
  <div>
    <h2>ログインページ</h2>
    <p>
      <button @click="login()">ログイン</button>
      <nuxt-link :to="{ name: '/' }">
        トップページに戻る
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import Cookies from 'universal-cookie'

export default {
  methods: {
    login() {
      const cookies = new Cookies()
      cookies.set('credential', 'true', { maxAge: 60 * 60 * 24 * 7 })
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
