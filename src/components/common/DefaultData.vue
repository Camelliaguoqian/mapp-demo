<template>
  <div class="default-data" :class="ishide">暂无数据</div>
</template>

<script>
export default {
  name: 'DefaultData',
  props: {
    ishide: String
  }
}
</script>

<style lang="less" scoped>
.default-data {
  margin: 0 auto;
  padding: 10px;
  height: 100px;
  line-height: 100px;
  font-size: 14px;
  color: #666;
  text-align: center;
}
.hide {
  display: none;
}
.show {
  display: block;
}
</style>