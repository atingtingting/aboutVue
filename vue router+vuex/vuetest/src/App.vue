<template>
  <div class="head">
    <h2>Toolist</h2>
    <div class="inputBox">
      <input type="text" v-model= "todo"/>
      <button @click="addEvent($event)">添加</button>
    </div>
    <hr>
    <h3>进行中</h3>
    <ul>
      <li v-for= "(item,key) in list" :key= "key">
        <div v-if= "!item.check">
          <input type="checkbox" v-model="item.check"/>
          {{item.title}}
          <button @click="deteleEvent(key)">删除</button>
        </div>
      </li>
    </ul>
    <h3>已完成</h3>
    <ul>
      <li v-for= "(item,key) in list" :key= "key">
        <div v-if= "item.check">
          <input type="checkbox" v-model="item.check"/>
          {{item.title}}
          <button @click="deteleEvent(key)">删除</button>
        </div>
      </li>
    </ul>
    <!-- <v-test></v-test> -->
    <hr>
    <hr>
    <router-link to="/helloworld">你好世界</router-link>
    <router-link to="/first">你好首页</router-link>
    <router-link to="/test">你好测试</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import test from './components/test.vue'
export default {
  name: 'App',
  components: {
    'v-test': test
  },
  data () {
    return {
      todo: '',
      list: []
    }
  },
  methods: {
    addEvent (e) {
      this.list.push({
        title: this.todo,
        check: false
      })
      this.todo = ''
    },
    deteleEvent (key) {
      this.list.splice(key, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
.head {
  text-align: center;
}
</style>
