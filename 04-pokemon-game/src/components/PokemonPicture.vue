<template>
    <div class="pokemon-container">
        <img class="hidden-pokemon" :src="imgSrc" alt="Pokemon">
        <img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="Pokemon">
    </div>
</template>

<script>

// Number. required

export default {
    name: 'PokemonPicture',
    computed: {
        imgSrc(){
            return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ this.pokemonId }.svg`
        }
    },
    props:{
        pokemonId: {
            type: Number,
            required: true
        },
        showPokemon: {
            type: Boolean,
            required: true,
            default: false
        }
    }

}
</script>

<style scoped>

.pokemon-container {
    height: 200px;
}
img {
    height: 200px;
    position: absolute;
    right: 32%;
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
}
.hidden-pokemon {
    filter: brightness(0);
}

</style>