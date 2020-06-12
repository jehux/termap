const app = new Vue({
    el:'#app',
    data:{
        texto:'hola',
        contador:0
    },
    computed:{
        invertirTexto(){
            return this.texto.split('').reverse().join('')
        }
    }
})