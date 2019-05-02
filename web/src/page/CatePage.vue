<template>
  <div>
    <div>
      <button @click="changeValue">从吧v</button>
      <switch-btn v-model="switchValue"></switch-btn>

    </div>

    <div class="aside"></div>
    <div class="main"></div>
  </div>
</template>
<script>
  import SwitchBtn from '@/components/SwitchBtn'

  export default {
    components: {
      SwitchBtn
    },
    data() {
      return {
        aaa: 12312,
        switchValue: false,
        bShowName: true
      };
    },
    methods: {
      changeValue() {
        this.switchValue = !this.switchValue;
      }
    },
    created() {
      console.log(123)
    },
    mounted() {
      console.log('mounted')
    }
  }
</script>
<style>

  .aside {
    width: 100px;
    height: 150px;
    float: left;
    background: #f66;
  }

  .main {
    height: 200px;
    background: #fcc;
  }
</style>
