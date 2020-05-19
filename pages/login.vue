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
      <!-- <div>
        <div class="mb-3">
          <app-button
            color="green"
            size="large"
            text="ログイン"
            @click="login()"
          />
        </div>
        <div class="mb-3">
          <app-button
            color="grey"
            size="medium"
            text="サインアップ"
            @click="signup()"
          />
        </div>
      </div> -->
      <!-- asyncData, computed buttonText と紐付け予定 -->
      <form>
        <div class="form-content">
          <label for="ユーザーID">
            <input v-model="formData.id" type="text" placeholder="ユーザーID" />
          </label>
        </div>
        <div class="form-content">
          <label for="アカウント作成">
            <input v-model="isCreateMode" type="checkbox" />
            アカウント作成
          </label>
        </div>
        <div class="mb-3">
          <app-button
            color="green"
            size="large"
            :text="buttonText"
            @click.prevent="handleClickSubmit()"
          />
        </div>
      </form>
      <notifications group="foo" classes="my-style" />
    </div>
  </div>
</template>

<script>
// import Cookies from 'universal-cookie'
import { mapActions } from 'vuex'
import AppButton from '@/components/AppButton'

export default {
  components: {
    AppButton
  },
  asyncData({ redirect, store }) {
    if (store.getters.user) {
      redirect('/posts/')
    }
    return {
      isCreateMode: false,
      formData: {
        id: ''
      }
    }
  },
  computed: {
    buttonText() {
      return this.isCreateMode ? '新規登録' : 'ログイン'
    }
  },
  methods: {
    async handleClickSubmit() {
      if (this.isCreateMode) {
        try {
          await this.register({ ...this.formData })
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'アカウント作成完了',
            text: `${this.formData.id}として登録しました`,
            position: 'top left',
            duration: 1000
          })
          this.$router.push('/posts/')
        } catch {
          this.$notify({
            group: 'foo',
            type: 'warn',
            title: 'アカウント作成失敗',
            text: 'すでに登録されているか不正なユーザーIDです',
            position: 'top left',
            duration: 1000
          })
        }
      } else {
        try {
          await this.login({ ...this.formData })
          this.$notify({
            group: 'foo',
            type: 'success',
            title: 'ログイン成功',
            text: `${this.formData.id}としてログインしました`,
            position: 'top left',
            duration: 1000
          })
          this.$router.push('/posts/')
        } catch (e) {
          this.$notify({
            group: 'foo',
            type: 'warn',
            title: 'ログイン失敗',
            text: '不正なユーザーIDです',
            position: 'top left',
            duration: 3000
          })
        }
      }
    },
    ...mapActions(['login', 'register'])
    // login() {
    //   const cookies = new Cookies()
    //   cookies.set('credential', 'true', { maxAge: 10 })
    //   cookies.set('credential', 'true', { maxAge: 60 * 60 * 24 * 7 })
    //   this.$router.push('/')
    // },
    // signup() {
    //   const cookies = new Cookies()
    //   cookies.set('credential', 'true', { maxAge: 10 })
    //   cookies.set('credential', 'true', { maxAge: 60 * 60 * 24 * 7 })
    //   this.$router.push('/signup')
    // }
  }
}
</script>

<style>
.my-style {
  background: #b9babb;
  color: #fff;
  border-radius: 7px;
  padding: 7px;
}
</style>
