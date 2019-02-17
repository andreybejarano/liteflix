<template>
  <div>
    <lf-header></lf-header>
    <router-view />
    <lf-footer></lf-footer>
  </div>
</template>

<script>
import LfHeader from '@/layout/components/Header.vue'
import LfFooter from '@/layout/components/Footer.vue'

export default {
  components: {
    LfHeader,
    LfFooter
  }
}
</script>
