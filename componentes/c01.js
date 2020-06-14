Vue.component('padre', {
    template: //html
    `
       <div class="p-5 bg-dark text-white">
            <h2> componente padre {{numeroPadre}} </h2>
            <hijo :numero="numeroPadre" ></hijo>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
       </div>
    `,
    data(){
        return {
            numeroPadre: 0
        }
    }
})