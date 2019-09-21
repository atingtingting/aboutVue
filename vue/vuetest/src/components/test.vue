
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
          that.list = response.data.result
        })
        .catch((error) => {
          // 失败
          console.log(error)
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style lang="scss" scoped>
h2{
  color: red;
}
</style>
