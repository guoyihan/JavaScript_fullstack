<template>
  <div class="home">
    <v-header title="豆瓣电影评分" :leftArrow="false"></v-header>
    <movie-section v-for="item in sectionData" :key="item.type" :section="item"></movie-section>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MovieSection from '@/components/MovieSection.vue'
import { ref } from 'vue'
import { getMovieSection } from '@/utils/movie'

export default {
  name: 'Home',
  components: {
    'v-header': Header,
    MovieSection
  },
  setup() {
    const sectionData = ref([])
    const movie_key = [
      {key:'movieOnInfoList', params:{}},
      {key:'comingList', params:{ci:83, token:'', limit: 10}} 
    ]
    const promiseArr = movie_key.map(function(item) {
      return getMovieSection(item.key, item.params)
    })
    Promise.all(promiseArr).then(function(res) {
      sectionData.value = res
      console.log(res);
    })
    return {
      sectionData
    }
  }
}
</script>
