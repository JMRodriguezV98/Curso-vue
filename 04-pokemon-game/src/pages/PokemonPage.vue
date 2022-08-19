<template>
    <h1>¿Quién es este pokémon?</h1>
    <!-- TODO: img -->
    <PokemonPicture :pokemonId='4' :showPokemon="true" />
    <!-- TODO: Opciones -->
    <PokemonOptions />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions.vue';
import PokemonPicture from '@/components/PokemonPicture.vue'

export default {
    name: "PokemonPage",
    components: { 
        PokemonPicture, 
        PokemonOptions    
    }
}
</script>