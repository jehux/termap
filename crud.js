const app = new Vue({
    el:'#app',
    data:{
        titulo:'GYM en Vue',
        tareas: [],
        nuevaTarea:''
    },
    methods:{
        agregarTarea: function(){
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado:false
            })
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas))
            this.nuevaTarea=''
        },
        completarTarea(index){
            //toggle con ^ xor
            this.tareas[index].estado^=true
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas))
        },
        eliminarTarea(index){
            this.tareas.splice(index,1)
            localStorage.setItem('gym-vue',JSON.stringify(this.tareas))
        }
        
    },
    computed:{
    },
    created: function(){
        let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
        //console.log(datosDB)
        if(datosDB==null){
            this.tareas=[]
        }else{
            this.tareas = datosDB;
        }
    }

})