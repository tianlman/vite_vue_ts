<template>
  <div class="dashboard-editor-container">
<!--    <div style="position: relative">-->
<!--      <el-input v-model="value" @focus="isActive = true" style="width: 500px" @blur="blur" :title="value"/>-->
<!--      <collapse-transition>-->
<!--        <div class="collapse-wrap" v-show="isActive">-->
<!--          <div class="transition_content">-->
<!--            <div>-->
<!--              <span class="collapse_item" @click="selectClick('啊实打实大')">啊实打实大</span>-->
<!--              <span class="collapse_item" @click="selectClick('奥术大师大大')">奥术大师大大</span>-->
<!--              <span class="collapse_item" @click="selectClick('方法是否是')">方法是否是</span>-->
<!--              <span class="collapse_item" @click="selectClick('方法是否是')">奥术大师大大</span>-->
<!--            </div>-->
<!--            <div>-->
<!--              <span class="collapse_item" @click="selectClick('更好地是个啥地方撒')">更好地是个啥地方撒</span>-->
<!--              <span class="collapse_item" @click="selectClick('多福多寿')">多福多寿</span>-->
<!--              <span class="collapse_item" @click="selectClick('奥术大师')">奥术大师</span>-->
<!--              <span class="collapse_item" @click="selectClick('知道的烦都烦死')">知道的烦都烦死</span>-->
<!--              <span class="collapse_item" @click="selectClick('2222222')">啊实打实大幅</span>-->
<!--              <span class="collapse_item" @click="selectClick('更好地是个啥地方撒')">更好地是个啥地方撒</span>-->
<!--              <span class="collapse_item" @click="selectClick('多福多寿')">多福多寿</span>-->
<!--              <span class="collapse_item" @click="selectClick('奥术大师')">奥术大师</span>-->
<!--              <span class="collapse_item" @click="selectClick('知道的烦都烦死')">知道的烦都烦死</span>-->
<!--              <span class="collapse_item" @click="selectClick('2222222')">啊实打实大幅</span>-->
<!--            </div>-->
<!--            <div>-->
<!--              <span class="collapse_item" @click="selectClick('更好地是个啥地方撒')">更好地是个啥地方撒</span>-->
<!--              <span class="collapse_item" @click="selectClick('啊实打实大幅')">啊实打实大幅</span>-->
<!--              <span class="collapse_item" @click="selectClick('知道的烦都烦死')">知道的烦都烦死</span>-->
<!--            </div>-->
<!--          </div>-->
<!--          <slot></slot>-->
<!--        </div>-->
<!--      </collapse-transition>-->
<!--    </div>-->
  </div>
</template>

<script>

export default {
  name: 'homeIndex',
  // components: { CollapseTransition },
  data() {
    return {
      isActive: false,
      value: null
    }
  },

  mounted() {

  },
  created() {

  },

  methods: {
    selectClick(aa) {
      this.value = aa
    },
    blur() {
      setTimeout(() => {
        this.isActive = false
      }, 100)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.collapse-wrap {
  position: absolute;
  width: 500px;
  max-height: 400px;
  background: #ffffff;
  border: 1px solid #ccc;
  padding: 10px;
  top: 33px;
  overflow-y: auto;
  border-radius: 5px;
}

.transition_content {
  display: flex;
  justify-content: space-between;
  overflow-y: auto;

  > div {
    > span {
      list-style-type: none; //去掉标签默认的左边符号
      text-align: center;
      color: #606266;
      padding: 0;
      height: 25px;
      display: block;
      line-height: 25px;
      cursor: pointer;

      &:hover {
        color: #00afff;
      }
    }

  }
}

//.collapse_item_active {
//
//}

ul {
  list-style: none; //去掉标签默认的左边符号
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 200px;
  text-align: center;
}

li {
  list-style-type: none; //去掉标签默认的左边符号
  text-align: center;
  color: #606266;
  padding: 0;
  height: 25px;
  display: block;
  line-height: 25px;
}
</style>
