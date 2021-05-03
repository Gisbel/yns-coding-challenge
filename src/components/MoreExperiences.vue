<template>
  <div class="moreExperiences">
    <div class="moreExperiences__title">
      <h3 class="bold">Más experiencias</h3>
      <span>Ver todas</span>
    </div>
    <Card
      v-for="(experience, index) in experiences"
      :key="index"
      :experience="experience"
    />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
export default {
  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
  components: {
    Card,
  },
};
</script>


<style lang="scss">
.moreExperiences {
  float: right;
  max-width: 30%;
  width: 100%;
  @media screen and (max-width:768px){
    max-width: 100%;
    padding: 20px;
    background-color: #ffffff;
  }
  &__title {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    text-align: left;
    margin-bottom: 17px;
    h3 {
      font-size: $font-size-4;
      color: $primary-dark;
      @media screen and (max-width:425px){
        font-size: font-size-3;
      }
    }
    span {
      font-size: $font-size-0;
      color: $grey;
      cursor: pointer;
    }
  }
}
/*.moreExperiences.mobile {
  max-width: 100%;
  padding: 20px;
  background-color: #ffffff;
}
/*@media screen and (max-width:768px){
  .moreExperiences#mobile{
    max-width: 100%;
    padding: 20px;
    background-color: #ffffff;
  }
}*/
</style>
