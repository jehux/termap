<template>
<div class="mt-5 ml-5 mr-5 ">
    <h1>Formularios</h1>
    <b-row>
        <b-col md="6">
             <b-form-input
                v-model="texto"
                type="text"
                required
                placeholder="ingresa mas de 3 caracteres"
                :state="comprobarCaracteres"
            ></b-form-input>
            <small>minmo 3 caracteres</small>
        </b-col>
    </b-row>
</div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
            texto:''    
        }
    },
    computed: {
        comprobarCaracteres(){
            return this.texto.length > 2 ? true : false
        }
    }
}
</script>