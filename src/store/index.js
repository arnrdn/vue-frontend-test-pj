import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    employees:[]
  },
  getters: {
    getEmployees(state) {
      return state.employees
    }
  },
  mutations: {
    setEmployees(state, newEmployees) {
      state.employees = newEmployees
    }
  },
  actions: {
      async fetchEmployees({commit}) {
        let newEmployees = []

            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            )

            // так как данные с сервера приходят не в нужном формате, итерирую и создаю из них объект нужного для показа формата

            data.forEach((item) => {
                const employee = {
                    id: item.id,
                    name: item.name.split(" ")[0],
                    lastName: item.name.split(" ")[1],
                    // некоторых данных не достаёт, ставлю заглушку
                    patronymic: 'Нет информации',
                    birthDate: "Нет информации",
                    address: item.address.street.concat(", ", item.address.suite),
                    department: item.company.bs,
                    about: "Нет информации"
                }

                newEmployees.push(employee)
            })

          
        commit('setEmployees',newEmployees)
      }
  },
  modules: {
  }
})
