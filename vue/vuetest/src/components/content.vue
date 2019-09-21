<template>
    <div>
        <h1>{{list.title}}</h1>
        <div v-html="list.content"></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    var aid = this.$route.params.aid
    this.requestData(aid)
  },
  methods: {
    requestData (aid) {
      var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=' + aid
      var that = this
      axios.get(api)
        .then((response) => {
          // 成功
          console.log(response)
          that.list = response.data.result[0]
        })
        .catch((error) => {
          // 失败
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="scss">

</style>
