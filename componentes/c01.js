Vue.component('padre', {
    template:/*html*/ `
    <div class="p-5 bg-dark text-white">
            <h2> componente padre {{numeroPadre}} </h2>
            <h3>{{nombrePadre}}</h3>
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"  ></hijo>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
       </div>
    `,
    data(){
        return {
            numeroPadre: 0,
            nombrePadre: ''
        }
    }
})