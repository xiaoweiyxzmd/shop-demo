<template>
  <div class="switch-btn" @click="switchStatus">
    <div class="switch-btn-cover" :class="{on: privStatus}"></div>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      // privStatus: {
      //   get() {
      //     return this.value;
      //   },
      //   set(value) {
      //     if (this.value !== value) {
      //       this.$emit('update:value', value);
      //     }
      //   }
      // }
    },
    data() {
      return {
        privStatus: false,
      }
    },
    watch: {
      value(n, o) {
        this.privStatus = n;
      }
    },
    methods: {
      switchStatus() {
        // this.privStatus = !this.privStatus;
        this.$emit('input', !this.privStatus);
      }
    },
    created() {
    },
    mounted() {
      console.log('mounted')
    }

  }
</script>
<style lang="scss">
  .switch-btn {
    display: inline-block;
    background-color: green;
    width: 60px;
    height: 20px;
    border-radius: 10px;

    .switch-btn-cover {
      height: 100%;
      width: 60%;
      background-color: gray;
      border-radius: 10px;
      float: right;

      &.on {
        float: left;
      }
    }
  }
</style>
