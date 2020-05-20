<template>
  <div>
    <div class="container flex justify-center flex-col">
      <h1
        class="title text-blue-800 text-6xl font-light tracking-wider leading-tight"
      >
        wordbook
      </h1>
      <span class="text-blue-800 font-light mb-3"
        >英単語記録と「きのう」の記憶チェック</span
      >
      <form>
        <div class="form-content">
          <label for="ユーザーID">
            <input
              v-model="formData.id"
              type="text"
              placeholder="ユーザーID"
              class="rounded-sm p-1 px-5"
            />
          </label>
        </div>
        <div class="form-content" id="account">
          <label for="アカウント作成">
            <input v-model="isCreateMode" type="checkbox" />
            <span class="text-sm text-green-800">アカウント作成</span>
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
import { mapActions, mapGetters } from 'vuex'
import Cookies from 'universal-cookie'
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
    },
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['login', 'register']),
    async handleClickSubmit() {
      const cookies = new Cookies()
      if (this.isCreateMode) {
        try {
          await this.register({ ...this.formData })
          await this.$notify({
            group: 'foo',
            type: 'success',
            title: 'アカウント作成完了',
            text: `${this.formData.id}として登録しました`,
            position: 'top left',
            duration: 1000
          })
          cookies.set('user', JSON.stringify(this.user))
          const routeTransmit = () => {
            this.$router.push('/')
          }
          setTimeout(routeTransmit, 1000)
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
          await this.$notify({
            group: 'foo',
            type: 'success',
            title: 'ログイン成功',
            text: `${this.formData.id}としてログインしました`,
            position: 'top left',
            duration: 1000
          })
          cookies.set('user', JSON.stringify(this.user))
          const routeTransmit = () => {
            this.$router.push('/')
          }
          setTimeout(routeTransmit, 1000)
        } catch (e) {
          this.$notify({
            group: 'foo',
            type: 'warn',
            title: 'ログイン失敗',
            text: '不正なユーザーIDです',
            position: 'top left',
            duration: 1000
          })
        }
      }
    }
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

#account {
  width: 205px;
  text-align: left;
}
</style>
