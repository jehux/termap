Vue.component('hijo', {
    template: //html
    `
       <div class="py-5 bg-success">
            <h2> numero: {{numero}} </h2>
            <button class="btn btn-warning" @click="numero++">+</button>
       </div>
    `,
    props:['numero']
})