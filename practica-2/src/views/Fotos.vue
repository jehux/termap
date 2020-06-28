<template>
    <div>
        <router-link :to="{name:'Fotos', params:{id:item} }" 
        v-for="(item,index) of fotosArreglo" :key="index" >
            <button class="btn btn-primary">imagen: {{item}}</button>
        </router-link>
        <Foto/>
        <button class="btn btn-danger" @click="home()">home</button>
        <button class="btn btn-success" @click="anterior()">anterior</button>
        <button class="btn btn-primary" @click="siguiente()">siguiente</button>
    </div>
</template>

<script>
import Foto from '@/components/Fotografia.vue'

export default {
    components:{
        Foto
    },
    data(){
        return {
            fotosArreglo: [1,2,3]
        }
    },
    methods:{
        home(){
            this.$router.push('/')
        },
        anterior(){
            this.$router.go(-1)
        },
        siguiente(){
            this.$router.go(1)
        }
    }
}
</script>