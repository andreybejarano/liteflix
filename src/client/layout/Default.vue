<template>
  <div class="container-fluid">
    <lf-header></lf-header>
    <lf-drawer></lf-drawer>
    <router-view/>
    <lf-footer></lf-footer>
  </div>
</template>

<script>
import LfHeader from "@/layout/components/Header.vue";
import LfDrawer from "@/layout/components/Drawer.vue";
import LfFooter from "@/layout/components/Footer.vue";

export default {
  components: {
    LfHeader,
    LfDrawer,
    LfFooter
  }
};
</script>

<style lang="scss" scoped>
.container-fluid {
  background: #000000;
  height: 100%;
  min-height: 100vh;
}
</style>
