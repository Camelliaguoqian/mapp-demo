<template>
  <div class="page">
    <van-nav-bar title="环境监测" 
    fixed 
    :zIndex="100" 
    left-arrow 
    @click-left="goBack"></van-nav-bar>

    
    
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar,
 Panel,  
 Icon,
} from 'vant'


Vue.use(NavBar)
.use(Panel)
.use(Icon)

export default {
  name: 'EnvironmentalMonitoringListPage',
  props: {
    zIndex: Number,
  },
  data() {
    return {
      
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },
  }
}
</script>

<style lang="less" scoped>

</style>

