<template>
    <div class="container">

        <h3> Formulario </h3>
        <input type="text" v-model="nombre" placeholder="Nombre del estudiante">
        <br><br>
        <button @click="enviar">Enviar</button>
    </div>

</template>

<script>

export default{
    name: 'Formulario',
    data(){ 
        return{ 
            nombre: '',
        }
    },
    methods:{
        enviar(){
            this.$emit('nombre-enviado', this.nombre);
            this.nombre='';
        }
    }
}
</script>