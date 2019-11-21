<template>
  <div class="app-wrapper" :class="classObj">
    <div v-if="smallslider">
      <div class="top_nav ani-left-width">汽车管理系统</div>
    </div>
    <div v-else>
      <div class="top_nav ani-left-width" :style="{paddingLeft:'10px',width:'60px'}">项目</div>
    </div>
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
      <navbar></navbar>
      <!--<tags-view></tags-view>-->
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Navbar, Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'

export default {
  name: 'layout',
  data() {
    return {
      smallslider: this.$store.state.app.sidebar.opened
    }
  },
  components: {
    Navbar,
    Sidebar,
    AppMain
    // TagsView
  },
  mixins: [ResizeMixin],
  watch: {
    '$store.state.app.sidebar.opened': function() {
      this.smallslider = this.$store.state.app.sidebar.opened
    }
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    },
    ...mapGetters([
      'sidebar'
    ])
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import 'src/styles/mixin.scss';
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }

</style>
