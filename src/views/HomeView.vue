<template>
    <v-app>
        <div class="employees">
            <div
                class="
                    text-sm-h3 text-h4 text-center
                    my-5
                    blue--text
                    text--darken-3
                "
            >
                Список сотрудников
            </div>
            <v-btn class="my-4" color="primary" outlined @click="onOpenCreate">
                Создать
                <v-icon color="primary" right> mdi-plus-circle </v-icon>
            </v-btn>
            <employees-list :employees="employees" />
            <employee-create-popup-vue v-if="isOpenCreate" @close="getClose" />
        </div>
    </v-app>
</template>

<script>
    import EmployeesList from "@/components/EmployeesList.vue"
    import EmployeeCreatePopupVue from "@/components/EmployeeCreatePopup.vue"
    import { mapActions, mapGetters } from "vuex"

    export default {
        name: "Home",
        components: { EmployeesList, EmployeeCreatePopupVue },
        data: () => ({
            isOpenCreate: false
        }),
        methods: {
            ...mapActions({
                fetchEmployees: "fetchEmployees"
            }),
            onOpenCreate() {
                this.isOpenCreate = true
            },
            getClose() {
                this.isOpenCreate = false
            }
        },
        computed: {
            ...mapGetters({
                employees: "getEmployees"
            })
        },
        mounted() {
            this.fetchEmployees()
        }
    }
</script>

<style lang="scss" scoped>
    .employees {
        margin: 10px 30px;
    }
</style>
