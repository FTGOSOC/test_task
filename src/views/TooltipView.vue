<template>
  <div class="tooltips">
    <base-tooltip position="bot" tooltip="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ">
      <p>Bottom</p>
    </base-tooltip>
    <base-tooltip position="top" tooltip="text text text text text text text text text text text text text text text text text text ">
      <p>Top</p>
    </base-tooltip>
    <base-tooltip position="left" tooltip="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ">
      <p>Left</p>
    </base-tooltip>
    <base-tooltip position="right" tooltip="text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text ">
      <p>Right</p>
    </base-tooltip>
  </div>
</template>

<script>
import BaseTooltip from "@/components/baseTooltip.vue";
export default {
  name: 'TooltipView',

  components: {
    BaseTooltip
  }
}
</script>
<style lang="scss" scoped>
.tooltips {
  display: flex;
  gap: 13px;
  justify-content: flex-start;
  align-items: center;
  padding-top: 60px;
}
</style>

