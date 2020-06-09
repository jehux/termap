const app = new Vue({
    el:'#app',
    data: {
        titulo: 'holamundo con Vue',
        frutas: [
            {nombre:"manzana", cantidad:10},
            {nombre:"pltano", cantidad:11},
            {nombre:"peera", cantidad:0}
        ],
        nuevaFruta:"",
        total:0
    },
    methods:{
        setFruta () {
            this.frutas.push({ 
                nombre:this.nuevaFruta, cantidad:0
            
            })
            this.nuevaFruta=""
        } 
    },
    computed:{
        sumarFrutas(){
            this.total=0
            for(fruta of this.frutas){
                this.total= this.total + fruta.cantidad
            }
            return this.total
        }
    }
})