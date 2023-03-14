<template>
  <div class="baseToolTip">
    <div class="tooltipBody" @mouseenter="openTooltip" @mouseleave="isToolTipShown = false" ref="tooltipBody">
      <slot />
    </div>
    <transition name="fade">
      <div class="tooltipContent" :class="factPosition" v-show="isToolTipShown" ref="tooltipContent">
        {{ tooltip }}
      </div>
    </transition>
  </div>
</template>

<script>
import {getTooltipPosition} from "@/helpers/getTooltipPosition";

export default {
  name: 'TooltipComponent',
  props: {
    position: {
      type: String,
      require: false,
      default: 'bot'
    },
    tooltip: {
      type: String,
      require: false,
      default: 'Title'
    }
  },
  data() {
    return {
      isToolTipShown: false,
      factPosition: this.position
    }
  },
  methods: {
    openTooltip() {
      this.isToolTipShown = true
      this.$nextTick( () => {
        this.factPosition = getTooltipPosition(this.position, this.$refs.tooltipBody, this.$refs.tooltipContent )
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.baseToolTip {
  position: relative;
  width: max-content;
  .tooltipBody {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    padding: 8px 0;
    min-width: 88px;
    border: 2px solid var(--blue);
    border-radius: 2px;
    color: var(--blue);
  }
  .tooltipContent {
    cursor: default;
    background: #ffffff;
    position: absolute;
    z-index: 2;
    width: 137px;
    padding: 7px;
    border: 1px solid var(--mid-grey);
    left: 50%;
    border-radius: 2px;
    box-shadow: 0 6px 15px rgba(0, 44, 92, 0.1);
    transform: translateY(10px) translateX(-50%);
    &:after {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      z-index: 1;
      border-style: solid;
      border-color: #fff transparent;
    }
    &:before {
      content: '';
      position: absolute;
      display: block;
      width: 0;
      z-index: 1;
      border-style: solid;
      border-color: var(--mid-grey) transparent;
    }
  }
  .top {
    bottom: calc(100% + 20px);
    &:after {
      border-width: 6px 6px 0;
      bottom: -5.5px;
      left: 50%;
      margin-left: -6px;
    }
    &:before {
      border-width: 7px 7px 0;
      bottom: -7px;
      left: 50%;
      margin-left: -7px;
    }
  }
  .bot {
    &:after {
      border-width: 0 6px 6px;
      top: -5.5px;
      left: 50%;
      margin-left: -6px;
    }
    &:before {
      border-width: 0 7px 7px;
      top: -7px;
      left: 50%;
      margin-left: -7px;
    }
  }
  .left {
    left: -100%;
    transform: translateY(calc(-20px - 50%)) translateX(calc(5px - 50%));
    &:after {
      border-width: 6px 0 6px 6px;
      top: 50%;
      right: -5px;
      margin-top: -6px;
      border-color: transparent #fff;
    }
    &:before {
      border-width: 7px 0 7px 7px;
      top: 50%;
      right: -7px;
      margin-top: -7px;
      border-color: transparent var(--mid-grey);
    }
  }
  .right {
    right: -100%;
    transform: translateY(calc(-20px - 50%)) translateX(calc(-20px + 50%));
    &:after {
      border-width: 6px 6px 6px 0;
      top: 50%;
      left: -5px;
      margin-top: -6px;
      border-color: transparent #fff;
    }
    &:before {
      border-width: 7px 7px 7px 0;
      top: 50%;
      left: -7px;
      margin-top: -7px;
      border-color: transparent var(--mid-grey);
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

</style>
