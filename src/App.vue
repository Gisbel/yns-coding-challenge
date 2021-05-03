<template>
  <div id="app">
    <User />
    <MoreExperiences :experiences="experiences"/>
    
  </div>
</template>

<script>
import MoreExperiences from './components/MoreExperiences.vue'
import User from './components/User.vue'
import axios from "axios"


export default {
  name: 'App',
  components: {
    User,
    MoreExperiences
  },
  data () {
    return {
      experiences: [],
      loading: false,
      error: null,
    };
  },
  methods: {
    async fetchExperiences() {
      try {
        this.error = null
        this.loading = true
        const url = `http://localhost:3001/`
        const response = await axios.get(url)
        const results = response.data
        console.log(results)
        this.experiences = results.filter(item => item.comments > 20).map(experience => ({
          text: experience.text,
          name: experience.owner.firstName,
          lastName: experience.owner.lastName,
          thumbnail: experience.owner.picture,
          commentCount: experience.comments,
        }))
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          this.error = {
            title: "Server Response",
            message: err.message,
          }
        } else if (err.request) {
          // client never received a response, or request never left
          this.error = {
            title: "Unable to Reach Server",
            message: err.message,
          }
        } else {
          // There's probably an error in your code
          this.error = {
            title: "Application Error",
            message: err.message,
          }
        }
      }
      this.loading = false
    },
  },
  mounted() {
    this.fetchExperiences()
  },
  
};

</script>

<style lang="scss">
#app {
  font-family: $font-primary;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 105px 150px;
  @media screen and (max-width: 768px) {
    margin: 0;
  }
}


</style>