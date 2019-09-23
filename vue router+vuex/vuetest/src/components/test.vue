
<template>
    <div>
      <ul>
        <li v-for="(item,key) in list" :key="key">
          <router-link :to="'/content/'+item.aid">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
</template>

<script>
import axios from 'axios'
import store from '../vuex/store.js'
export default {
  name: 'test',
  data () {
    return {
      message: 'hello~~!!',
      list: []
    }
  },
  methods: {
    getData () {
      var that = this
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1'
      axios.get(api)
        .then((response) => {
          // 成功
          console.log(response)
          this.$store.commit('inCount', response.data.result)
          that.list = this.$store.state.list
        })
        .catch((error) => {
          // 失败
          console.log(error)
        })
    }
  },
  store,
  mounted () {
    console.log(this.$store.state.list.length)
    if (this.$store.state.list.length > 0) {
      this.list = this.$store.state.list
    } else {
      this.getData()
    }
  }
}
</script>

<style lang="scss" scoped>
h2{
  color: red;
}
</style>
