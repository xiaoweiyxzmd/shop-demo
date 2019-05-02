<template>
  <div>
    <!--{{aaa}}-->
    <div @click="changeA">{{ bbb}}</div>
    <div>{{ aaa}}</div>
    <div>{{ ccc}}</div>
    <button @click="bShowName=!bShowName">切换</button>
    <transition name="slide-fade">
      <p v-show="bShowName">唐晓伟</p>
    </transition>
    <router-link to="/CatePage">商品分类</router-link>
    <ass></ass>
  </div>
</template>
<script>

  export default {
    components: {},
    data() {
      return {
        aaa: 1,
        bbb: 20,
        bShowName: true,
        aArr: [123, 32, 45]
      };
    },
    computed: {
      ccc() {
        return this.aaa + this.bbb;
      }
    },
    methods: {
      changeA() {
        this.aaa++;
        this.bbb++;
        this.$nextTick(() => {
          console.log(222)
        });
        var exdate = new Date()
        exdate.setDate(exdate.getDate() + 2)
        document.cookie =  'a=221;expires=' + exdate.toGMTString();
        document.cookie =  'c=333;expires=' + exdate.toGMTString();
        this.$http.get('/api/login/doLogin', {
          user: {a: 1, b: {c: 2}}
        }).then((response) => {
          console.log(response)
        });
      }
    },
    created() {

      console.log('created')
    },
    mounted() {
      console.log('mounted')
    },
    beforeRouteEnter(to, from, next) {
      console.log('beforeRouteEnter')
      next()
    },
    beforeCreate() {
      console.log('beforeCreate')

    },
    beforeRouteUpdate(to, from, next) {
      console.log('beforeRouteUpdate')
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
    },
    beforeRouteLeave(to, from, next) {
      console.log('beforeRouteLeave')
      next()
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this`
    }
  }
</script>
