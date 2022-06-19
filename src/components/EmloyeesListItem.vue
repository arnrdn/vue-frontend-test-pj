<template>
    <li>
        {{ name }}
        {{ lastName }}
        {{ patronymic }}
        {{ birthDate }}
        {{ address }}
        {{ department }}
        {{ about }}
    </li>
</template>

<script>
    export default {
        props: {
            employee: {
                type: Object
            }
        },
        data: () => ({
            name: "",
            lastName: "",
            patronymic: "",
            birthDate: "",
            address: "",
            department: "",
            about: ""
        }),
        created() {
            const {
                name,
                lastName,
                patronymic,
                birthDate,
                address,
                department,
                about
            } = this.employee

            this.name = name
            this.lastName = lastName
            this.patronymic = patronymic
            this.birthDate = birthDate
            this.address = address
            this.department = department
            this.about = about
        }
    }
</script>

<style lang="scss" scoped>
</style>
