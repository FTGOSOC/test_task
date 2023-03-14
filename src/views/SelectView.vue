<template>
  <div class="selectView">
    <base-select :options="options"
                 v-model="baseValue"
                 :title="'My awesome title'"
                 :placeholder="'Text'"
    />
  </div>
</template>

<script>
import {getUsers} from "@/services/userService";
import BaseSelect from "@/components/BaseSelect.vue";
export default {
  name: 'SelectView',
  components: {
    BaseSelect
  },
  created() {
    getUsers().then(resp => {
      this.options = resp
    })
  },
  data() {
    return {
      baseValue: '',
      options: []
    }
  }
}
</script>
<style lang="scss" scoped>
.selectView {
  padding-top: 50px;
}
</style>