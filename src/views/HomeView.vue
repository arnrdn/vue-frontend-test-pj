<template>
    <div class="employees">
        <div class="text-h1 text-center font-italic">Список сотрудников</div>
        <employees-list :employees="employees" />
    </div>
</template>

<script>
    import EmployeesList from "@/components/EmployeesList.vue"
    import { mapActions, mapGetters } from "vuex"

    export default {
        name: "Home",
        components: { EmployeesList },
        methods: {
            ...mapActions({
                fetchEmployees: "fetchEmployees"
            })
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
