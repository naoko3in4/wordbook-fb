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
      cookies.set('credintial', 'true', { maxAge: 90 })
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
