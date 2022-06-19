<template>
    <v-app>
        <ul class="employees-list">
            <employees-list-item
                v-for="employee in employees"
                :key="employee.id"
                :employee="employee"
            />
        </ul>
    </v-app>
</template>

<script>
    import EmployeesListItem from "@/components/EmloyeesListItem.vue"

    export default {
        components: { EmployeesListItem },
        props: {
            employees: {
                type: Array,
                default: () => []
            }
        }
    }
</script>

<style lang="scss" scoped>
    .employees-list {
        padding: 0;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr;
        gap: 20px;
    }
</style>
