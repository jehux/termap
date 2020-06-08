const app = new Vue({
    el:'#app',
    data: {
        titulo: 'holamundo con Vue',
        frutas: [
            {nombre:"manzana", cantidad:10},
            {nombre:"pltano", cantidad:11},
            {nombre:"peera", cantidad:0}
        ]
    }
})