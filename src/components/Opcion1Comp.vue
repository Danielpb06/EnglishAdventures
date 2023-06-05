<template>

    <div>
        <h1>Este es el componente {{ this.$options.name }}</h1>
        <button @click="mostrarform">Mostrar Formulario</button>
        <br>
        <div id="form">

            <Formulario v-if="mostrar" @nombre-enviado="guardarNom"></Formulario>
            <p>{{ nombreEstudiante }}</p><br>

        </div>
    </div>
</template> 
<script>
import Formulario from './Formulario.vue';


export default {
    name: "Opcion1",
    components: { Formulario },
    data(){
        return{mostrar:false,nombreEstudiante:'',}
    },
    methods:{
        mostrarform(){this.mostrar=true;},
        guardarNom(nombre){this.$root.nombreEstudiante=nombre;}
    }
};
</script>
<style>



</style>