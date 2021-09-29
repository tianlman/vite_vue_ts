<template>
  <div>
    <h1>{{ msg }} aaaaaaa</h1>
    <el-button type="primary">element-plus按钮</el-button>
  </div>


</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'About',
  components: {},
  data() {
    return {
      msg: 'About Page',
    }
  },
  setup() {
  },
})
</script>