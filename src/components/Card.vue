<template>
    <div class="card">
        <div class="card__info">
            <div class="card__avatar">
                <img
                    class="w-full mt-2 rounded"
                    :src="experience.thumbnail"
                    height="50"
                    width="50"
                />

            </div>
            <div class="card__experience">
                <p class="card__text bold">{{experience.text}}</p>
                <p class="card__owner text-size-0 regular">{{experience.name}} {{experience.lastName}}</p>
            </div>
        </div>
        <div class="card__comment">
            <span>{{experience.commentCount}} comentarios</span>
            <span>leer más ></span>
        </div>
    </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss">
.card {
    background-color: $white;
    border: 1px solid $nude;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 15px;
    &__info{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-align: left;
        margin-bottom: 14px;
    }
    &__experience{
        margin-left: 15px;
    }
    &__text{
        margin-bottom: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    &__avatar{
        img{
            border-radius: 50%;
        }
    }
    &__comment{
        display: flex;
        justify-content: space-between;
        span{
            font-size: $font-size-0;
            color: $orange;
            cursor: pointer;
        }
    }
}

</style>