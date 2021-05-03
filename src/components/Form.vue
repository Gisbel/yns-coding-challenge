<template>
  <div class="experienceForm left">
    <h2 class="bold">Cuéntanos tu experiencia</h2>
    <!--FORMULARIO START-->
    <form @submit="checkForm" action method="post" autocomplete="off">
      <div class="experienceForm__dropdown form-group">
        <span class="text-size-1">¿Que tratamiento te has realizado?</span>
        <select v-model="selected">
          <option :value="''" disabled selected>
            Selecciona el tratamiento
          </option>
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </div>
      <div class="experienceForm__choices form-group">
        <span class="text-size-1">¿Recomendarías el tratamiento?</span>
        <div class="experienceForm__buttons">
          <button
            class="btn btn-sm btn-outline"
            :class="{ active: showForm == true }"
            @click.prevent="showForm = true"
          >
            Sí
          </button>
          <button
            class="btn btn-sm btn-outline"
            :class="{
              active: showForm != undefined,
              active: showForm == false,
            }"
            @click.prevent="showForm = false"
          >
            No
          </button>
        </div>
        <div class="experienceForm__inputs form-group" v-if="showForm">
          <label class="formUser__title text-size-1" for="#title"
            >Título de tu experiencia</label
          >
          <input
            v-model="title"
            @keyup="charCount(), isOver()"
            class="form-input text-size-1"
            type="text"
            id="title"
            placeholder="Título resumen de tu experiencia"
          />
          <div class="experienceForm__inputs--length title">
            <span class="text-size-min" v-if="requiredTitle">{{
              requiredTitle
            }}</span>
            <span
              class="text-size-min neutral"
              v-bind:class="{
                'error icon-et-close2': titleHasError,
                'okey icon-et-check_circle_fill': titleIsOkey,
              }"
            >
              {{ totalCharacterTitle }} / {{ maxCharactersTitle }} (min.
              {{ minCharactersTitle }})</span
            >
          </div>
          <textarea
            v-model="description"
            @keyup="charCount(), isOverDescription()"
            class="form-input"
            type="text"
            id="description"
            placeholder="Cuéntanos todos los detalles, porqué decidiste hacerlo, cómo te sentiste antes y después del tratamiento, qué consejos darías a los que lo quieren realizar..."
          ></textarea>
          <div class="experienceForm__inputs--length description">
            <span class="text-size-min" v-if="requiredDescription">{{
              requiredDescription
            }}</span>
            <span
              class="text-size-min neutral"
              v-bind:class="{
                'error icon-et-close2': descriptionHasError,
                'okey icon-et-check_circle_fill': descriptionIsOkey,
              }"
            >
              {{ totalCharacterDescription }} /
              {{ maxCharactersDescription }} (min.
              {{ minCharactersDescription }})</span
            >
          </div>
        </div>
        <div class="experienceForm__submit">
          <button class="btn btn-lg btn-primary" type="submit">
            ¡COMPARTIR EXPERIENCIA!
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
  data() {
    return {
      showForm: undefined,
      selected: "",
      title: "",
      description: "",
      titleHasError: undefined,
      titleIsOkey: undefined,
      descriptionHasError: undefined,
      descriptionIsOkey: undefined,
      requiredTitle: undefined,
      requiredDescription: undefined,
      totalCharacterTitle: 0,
      totalCharacterDescription: 0,
      minCharactersTitle: 20,
      maxCharactersTitle: 90,
      minCharactersDescription: 300,
      maxCharactersDescription: 18000,
    };
  },
  methods: {
    charCount: function () {
      this.totalCharacterTitle = this.title.length;
      this.totalCharacterDescription = this.description.length;
    },

    isOver: function () {
      if (
        this.totalCharacterTitle < this.minCharactersTitle ||
        this.totalCharacterTitle > this.maxCharactersTitle
      ) {
        return (this.titleHasError = true), (this.titleIsOkey = false);
      } else {
        return (this.titleHasError = false), (this.titleIsOkey = true);
      }
    },

    isOverDescription: function () {
      if (
        this.totalCharacterDescription < this.minCharactersDescription ||
        this.totalCharacterDescription > this.maxCharactersDescription
      ) {
        return (
          (this.descriptionHasError = true), (this.descriptionIsOkey = false)
        );
      } else {
        return (
          (this.descriptionHasError = false), (this.descriptionIsOkey = true)
        );
      }
    },
    checkForm: function (e) {
      if (this.showForm == undefined) {
        e.preventDefault();
      }
      if (this.showForm == false) {
        return true;
      }
      if (this.showForm == true) {
        this.requiredTitle = "";
        this.requiredDescription = "";
        if (!this.title) this.requiredTitle = "Este campo es obligatorio";
        if (!this.description)
          this.requiredDescription = "Este campo es obligatorio";
        else if (
          this.titleHasError == false &&
          this.descriptionHasError == false
        )
          return true;
        e.preventDefault();
      }
    },
  },
};
</script>
<style lang="scss">
::placeholder {
  color: $subtle-grey;
  opacity: 1;
}

:-ms-input-placeholder {
  color: $subtle-grey;
}

::-ms-input-placeholder {
  color: $subtle-grey;
}
.experienceForm {
  &__dropdown {
    display: flex;
    flex-direction: column;
    margin: 35px 0 17px 0;
    select {
      max-width: 400px;
      width: 100%;
      padding: 9px 13px;
      border: 2px solid $subtle-grey;
      border-radius: 3px;
      font-size: $font-size-1;
      margin: 10px 0 17px 0;
    }
  }
  &__buttons {
    margin: 11px 0 35px 0;
  }
  &__submit {
    margin: 35px 0 105px;
    @media screen and (max-width: 768px) {
      margin: 35px 0 50px;
    }
    button {
      @media screen and (max-width: 425px) {
        width: 100%;
      }
    }
  }
  &__inputs {
    margin: 14px 0 0 0;
    display: flex;
    justify-content: left;
    align-content: center;
    flex-direction: column;
    input,
    textarea {
      border: 2px solid $subtle-grey;
    }
    &--length {
      display: inline-block;
      &.title {
        max-width: 412px;
        width: 100%;
      }
      span {
        color: $lighter-grey;
      }
      span:first-child {
        float: left;
      }
      span:last-child {
        float: right;
      }
      .neutral {
        color: $lighter-grey;
      }
      .error.icon-et-close2 {
        color: $red;
      }
      .okey.icon-et-check_circle_fill {
        color: $primary-color;
      }
    }

    input::-webkit-input-placeholder,
    textarea::-webkit-input-placeholder {
      color: $light-grey;
    }

    #title {
      max-width: 413px;
      width: 100%;
      padding: 9px 13px;
      color: $black;
      border-radius: 3px;
      margin: 10px 0 3px 0;
      font-style: $font-weight-regular-italic;
    }

    #description {
      width: 100%;
      padding: 11px 12px;
      height: 196px;
      margin: 13px 0 3px 0;
      color: $black;
      border-radius: 3px;
      font-style: $font-weight-regular-italic;
      font-family: $font-primary;
    }
  }
}
/*
@media screen and (max-width:768px){
  .experienceForm__submit {
    margin: 35px 0 50px;
  }
}*/
</style>