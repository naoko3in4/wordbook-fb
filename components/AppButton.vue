<template>
  <div>
    <div class="app_button__container cursor-pointer">
      <button
        :type="type"
        :disabled="disabled"
        :class="buttonClasses"
        @click="handleClick"
      >
        {{ text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'submit',
      validator(val) {
        return ['submit', 'button'].includes(val)
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: 'grey'
    },
    size: {
      type: String,
      default: 'small'
    }
  },
  computed: {
    buttonClasses() {
      const styles = { app_button: true }
      styles[`is_${this.color}`] = true
      styles[`is_${this.size}`] = true
      return styles
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style>
.app_button {
  display: inline-block;
  border-radius: 4px;
  font-weight: 700;
  text-decoration: none;
}

.app_button:hover {
  cursor: pointer;
}

.is_grey {
  border: 2px solid #35495e;
  color: #35495e;
}

.is_grey:hover {
  color: #fff;
  background-color: #35495e;
}

.is_blue {
  border: 2px solid #0a6095;
  color: #0a6095;
}

.is_blue:hover {
  color: #fff;
  background-color: #0a6095;
}

.is_green {
  border: 2px solid #3b8070;
  color: #3b8070;
}

.is_green:hover {
  color: #fff;
  background-color: #3b8070;
}

.is_x_small {
  padding: 10px 20px;
}

.is_small {
  padding: 10px 25px;
}

.is_x_medium {
  padding: 10px 48px;
}

.is_medium {
  padding: 10px 54px;
}

.is_large {
  padding: 10px 70px;
}
</style>
