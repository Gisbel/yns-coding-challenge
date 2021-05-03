<template>
    <div class="container">
        <div class="user">
            <div class="userExperience left">
                <div class="userExperience__avatar">
                    <img src="src/assets/images/avatar4.png" draggable="false">
                </div>
                <div class="userExperience__info">
                    <p class="userExperience__name text-size-1 medium">vebris</p>
                    <p class="userExperience__date text-size-0 regular">Barcelona (Ciudad) · 8 sep  2019</p>
                </div>
            </div>
            <h1 class="experienceTitle bold">Muy orgullosa de mi nuevo abdomen</h1>
            <div class="aditionalInfo left">
                <div>
                    <span class="icon-et-like"></span>
                    <span class="aditionalInfo__worth text-size-0 medium">Vale la pena</span>
                </div>
                <div>
                    <span class="icon-et-price"></span>
                    <span class="aditionalInfo__amount text-size-0">Precio aproximado: 8500€</span>
                </div>
            </div>
            <div class="galleryExperience">
                <div clasS="galleryExperience__grid">
                    <div class="galleryExperience__image">
                        <a>
                            <img src="src/assets/images/gallery1.png" alt="">
                        </a>
                    </div>
                    <div class="galleryExperience__image">
                        <a>
                            <img src="src/assets/images/gallery2.png" alt="">
                        </a>
                    </div>
                    <div class="galleryExperience__image">
                        <a>
                            <img src="src/assets/images/gallery1.png" alt="">
                        </a>
                    </div>
                    <div class="galleryExperience__image">
                        <a>
                            <img src="src/assets/images/gallery2.png" alt="">
                        </a>
                    </div>
                    <div class="galleryExperience__image">
                        <a>
                            <img src="src/assets/images/gallery1.png" alt="">
                        </a>
                    </div>
                    <div class="galleryExperience__image">
                        <a>
                            <img src="src/assets/images/gallery2.png" alt="">
                        </a>
                    </div>                
                </div>
            </div>
        </div>
        <div class="aboutDoctor left">
            <h2 class="bold">Sobre el doctor</h2>
            <div class="aboutDoctor__card left">
                <div class="aboutDoctor__avatar">
                    <img src="src/assets/images/doctor.png" draggable="false">
                </div>
                <div class="aboutDoctor__info">
                    <p class="aboutDoctor__center text-size-1 medium">Dorsia Clínica Estética</p>
                    <p class="aboutDoctor__offices text-size-0 regular">81 sedes en Madrid, Lleida, Tarragona…</p>
                </div>
            </div>
            <button class="btn btn-primary btn-md bold">
                Contactar al doctor
            </button>
            <div class="review">
                <div class="review__stars">
                    <span class="medium text-size-1">Valoración: </span> 
                    <span class="icon-et-star-full"></span>
                    <span class="icon-et-star-full"></span>
                    <span class="icon-et-star-full"></span>
                    <span class="icon-et-star-full"></span>
                    <span class="icon-et-star"></span>
                </div>
                <div class="review__text text-size-1">
                    Es un excelente cirujano que se merece con creces la buena fama tiene, 
                    pero para estas cosas no hay que escatimar! El post operatorio ha sido un
                    poco difícil. Aún no me adapto a caminar sin sentir molestia y opresión, 
                    pero supongo que es cuestión de tiempo.
                </div>
                <hr>
            </div>
        </div>
        <FormComponent/>
    </div>
</template>
<script>
import FormComponent from '../components/Form.vue'

export default {
    name: 'User',
    components: {
    FormComponent
},
    data(){
        return{
        }
    },
}
</script>
<style lang="scss">
.container{
    background-color: $white;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    padding: 30px;
    float: left;
    max-width: 65%;
    width: 100%;
    @media only screen and (max-width: 768px){
        border-radius: 0px;
        max-width: 100%;
    }
    .userExperience{
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 17px;
        &__avatar{
            margin-right: 14px;
            img{
                border-radius: 50%;
            }
        }
        &__name{
            color: $secondary-dark;
            margin-bottom: 5px;
        }
        &__date{
            color: $grey;
        } 
    }
    h1{
        color: $primary-dark;
        font-size: $font-size-5;
        text-align: left;
        @media screen and (max-width: 768px){
            font-size: $font-size-4;
            max-width: 316px;
            width: 100%;
        }
    }
    .galleryExperience{
        position: relative;
        margin-top: 32x;
        @media screen and (max-width: 768px){
            margin-top: 12px;
        }
        &__grid{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(153px, 1fr));
            grid-gap: 20px;
            @media screen and (max-width: 768px){
                grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
            }
        }
        &__image{
            a{
                cursor: pointer;
                img{
                    border-radius: 10px;
                }
            }
        }
    }
    .aditionalInfo{
        margin: 10px 0 32px 0;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        &__worth{
            color: $secondary-dark;
            margin-right: 22px;
        }
        &__amount{
            color: $grey;
        }
    }
    .aboutDoctor{
        text-align: left;
        margin: 27px 0 32px 0;
        h2{
            margin-bottom: 15px;
        }
        &__card{
        display: flex;
        justify-content: left;
        align-items: center;
        margin-bottom: 17px;
        margin-bottom: 16px;
        }
        &__avatar{
            margin-right: 14px;
            img{
                border-radius: 5px;
            }
        }
        &__center{
            color: $secondary-dark;
            margin-bottom: 5px;
        }
        &__offices{
            color: $light-grey;
        }
    }
    .review{
        margin: 24px 0;
        &__stars{

        }
        &__text{
            max-width: 678px;
            width: 100%;
            color: $secondary-dark;
            margin-top: 18px;
        }
        hr{
            border: 1px solid #F3F3F3;
            margin: 29px 0;
        }
    }
}
/*
@media screen and (max-width: 768px){
    .container{
        border-radius: 0px;
        max-width: 100%;
        .galleryExperience{
            margin-top: 12px;
            &__grid{
                grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
            }
        }
        h1{
            font-size: $font-size-4;
            max-width: 316px;
            width: 100%;
        }
    }
}
*/
</style>