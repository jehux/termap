Vue.component('hijo', {
    template: //html
    `  <div class="py-5 bg-success">  <h2> numero: {{numero}} </h2> 
        <h4>nombre {{nombre}}</h4>
        </div>
    `,
    props:['numero'],
    data(){
        return{ 
            nombre:'Rodrigo'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre)
    }
})