<template>

    <div>
        <h1>Este es el componente {{ this.$options.name }}</h1>
        <button @click="mostrarNombresEstudiante">Mostrar nombre del estudiante</button>
        <br>
        <p>{{ nombreEstudiante }}</p>
    </div>
</template> 
<script>
export default { 
    name: "Opcion2" ,
    data(){return{nombreEstudiante:'',};},
    methods:{mostrarNombresEstudiante(){this.nombreEstudiante=this.$root.nombreEstudiante;}}
    };
</script>