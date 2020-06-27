import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre:"Manzana", cantidad:3},
      {nombre:"Pera", cantidad:7},
      {nombre:"Naranja", cantidad:13}
    ]
  },
  mutations: {
    aumentar(state,index){
      state.frutas[index].cantidad++
    },
    reiniciar(state){
      /** for (let item of state.frutas)
        item.cantidad = 0 */

      state.frutas.forEach(elemento =>{
        elemento.cantidad = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
