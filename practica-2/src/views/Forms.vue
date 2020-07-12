<template>
<div class="mt-5 ml-5 mr-5 ">
    <h1>Formularios</h1>
    <b-row>
        <b-col cols="12" md="6" lg="3">
             <b-form-input
                v-model="texto"
                type="text"
                required
                placeholder="ingresa mas de 3 caracteres"
                :state="comprobarCaracteres"
            ></b-form-input>
            <small>minmo 3 caracteres</small>
        </b-col>
        <b-col cols="12" md="6" lg="3">
             <b-form-select v-model="select" :options="animales"></b-form-select>
            <small>seleccion: {{select}}</small>
        </b-col>
        <b-col cols="12" md="6" lg="3">
             <b-form-radio-group v-model="radio" :options="animalesGroup"></b-form-radio-group>
            <small>seleccion: {{radio}}</small>
        </b-col>
        <b-col cols="12" md="6" lg="3">
             <b-form-checkbox-group v-model="multiple" :options="animalesGroup"></b-form-checkbox-group>
            <small>seleccion: {{multiple}}</small>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            texto:'',
            radio:null,
            multiple:null,
            select:null,
            animales: [
                {value:null, text:'Seleccione un animal'},
                {value:'perro', text:'Perro'},
                {value:'gato', text:'Mishi'},
                {value:'pato', text:'Pato'},
                ],
            animalesGroup: [
                {value:'perro', text:'Perro'},
                {value:'gato', text:'Mishi'},
                {value:'pato', text:'Pato'},
            ]
        }
    },
    computed: {
        comprobarCaracteres(){
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>