<template>
    <ul>
        <employees-list-item
            v-for="employee in employees"
            :key="employee.id"
            :employee="employee"
        />
    </ul>
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
</style>
