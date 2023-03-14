<template>
  <div class="baseSelect">
    <div class="selectTitle">
      {{ title }}
    </div>
    <div class="customSelect" :class="{empty : !value}" @click="showOptions" ref="customSelect">
      <div class="customSelectBody">
        <p v-if="!content">
          {{ placeholder }}
        </p>
        <p v-else>
          {{ label }}
        </p>
        <span>
        <img :class="{reverse : isSelectOpened}" :src="require('@/assets/svg/arrow.svg')" alt="arrow">
      </span>
      </div>
    </div>
    <transition name="fade">
        <div class="customSelectContent" :class="{showToTop}" v-if="isSelectOpened" @click="isSelectOpened = false" ref="customSelectContent">
          <div class="customSelectOption" v-for="option in options" :key="option.value" @click="content = option.value">
            {{ option.content}}
          </div>
        </div>
      </transition>
  </div>
</template>

<script>

export default {
  name: 'SelectComponent',
  props: {
    options: {
      type: Array,
      require: false,
      default: []
    },
    value: {
      type: String,
      require: false,
      default: ''
    },
    placeholder: {
      type: String,
      require: false,
      default: 'Text'
    },
    title: {
      type: String,
      require: false,
      default: 'Title'
    }
  },
  data() {
    return {
      content: this.value,
      isSelectOpened: false,
      showToTop: false
    }
  },
  methods: {
    showOptions() {
      if (!this.options.length)
        return
      this.showToTop = false
      this.isSelectOpened = !this.isSelectOpened
      const top = this.$refs.customSelect.getBoundingClientRect().top
      const height = this.$refs.customSelect.offsetHeight
      if ( (window.innerHeight - top - height) < 105 )
        this.showToTop = true
    }
  },
  computed: {
    label() {
      return this.content?this.options.find(option => {
        return option.value === this.content
      }).content:''
    }
  },
  watch: {
    content() {
      this.$emit('input', this.content)
    }
  }
}
</script>
<style lang="scss" scoped>

.reverse {
  transform: rotate(180deg);
}
.customSelect {
  width: 256px;
  border-radius: 2px;
  border: 1px solid var(--dark-grey);
  cursor: pointer;
  .customSelectBody {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      width: 100%;
      margin: 0;
    }
    img {
      transition: all .2s ease;
    }
  }
}
.customSelectContent {
  background: #fff;
  position: relative;
  z-index: 9999;
  cursor: pointer;
  width: 258px;
  box-shadow: 0 6px 15px rgba(0, 44, 92, 0.1);
  height: calc(35px * 3);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .customSelectOption {
    padding: 8px 10px;
    &:hover {
      background: var(--mid-grey);
    }
  }
}
.showToTop {
  transform: translateY(-146px);
}
.empty {
  border: 1px solid var(--grey);
  color: var(--grey)
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
