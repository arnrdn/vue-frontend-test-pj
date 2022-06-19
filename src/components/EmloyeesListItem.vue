<template>
    <v-list-item class="employee-card blue lighten-5 pa-3 rounded">
        <employee-edit-popup-vue
            v-if="isOpenEdit"
            :id="id"
            :name="name"
            :lastName="lastName"
            :patronymic="patronymic"
            :birthDate="birthDate"
            :address="address"
            :department="department"
            :about="about"
            @close="getClose"
        />
        <div class="employee-card__header">
            <div class="employee-card__header-name">
                <span class="font-weight-medium text-subtitle-1">ФИО: </span>
                <span class="text-body-1"
                    >{{ lastName }} {{ name }} {{ patronymic }}</span
                >
            </div>
            <div class="employee-card__header-active">
                <v-icon color="primary" small @click="onOpenEdit">
                    mdi-pencil
                </v-icon>
                <v-icon color="warning" small @click="onDelete">
                    mdi-close
                </v-icon>
            </div>
        </div>
        <div class="employee-card__table">
            <div
                class="
                    employee-card__table-lable
                    font-weight-medium
                    text-subtitle-1
                "
            >
                Дата рождения:
            </div>
            <div
                class="
                    employee-card__table-lable
                    font-weight-medium
                    text-subtitle-1
                "
            >
                Адрес:
            </div>
            <div
                class="
                    employee-card__table-lable
                    font-weight-medium
                    text-subtitle-1
                "
            >
                Отдел:
            </div>
            <div class="employee-card__table-data text-body-2">
                {{ birthDate }}
            </div>
            <div class="employee-card__table-data text-body-2">
                {{ address }}
            </div>
            <div class="employee-card__table-data text-body-2">
                {{ department }}
            </div>
        </div>
        <div
            class="
                employee-card__table-lable
                font-weight-medium
                text-subtitle-1
            "
        >
            О себе:
        </div>
        <div class="employee-card__table-data text-body-2">
            {{ about }}
        </div>
    </v-list-item>
</template>

<script>
    import { mapActions } from "vuex"
    import EmployeeEditPopupVue from "./EmployeeEditPopup.vue"

    export default {
        components: { EmployeeEditPopupVue },
        props: {
            employee: {
                type: Object
            }
        },
        data: () => ({
            isOpenEdit: false,
            id: "",
            name: "",
            lastName: "",
            patronymic: "",
            birthDate: "",
            address: "",
            department: "",
            about: ""
        }),
        methods: {
            ...mapActions({
                callRemovalOfEmployee: "callRemovalOfEmployee"
            }),
            onDelete() {
                this.callRemovalOfEmployee(this.id)
            },
            onOpenEdit() {
                this.isOpenEdit = true
            },
            getClose() {
                this.isOpenEdit = false

                const {
                    id,
                    name,
                    lastName,
                    patronymic,
                    birthDate,
                    address,
                    department,
                    about
                } = this.$store.getters.getEmployeeById(this.id)

                this.id = id
                this.name = name
                this.lastName = lastName
                this.patronymic = patronymic
                this.birthDate = birthDate
                this.address = address
                this.department = department
                this.about = about
            }
        },
        created() {
            const {
                id,
                name,
                lastName,
                patronymic,
                birthDate,
                address,
                department,
                about
            } = this.employee

            this.id = id
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
    .employee-card {
        display: grid;
        grid-template-rows: repeat(3, max-content);
        gap: 10px;

        &__header {
            display: flex;
            justify-content: space-between;
        }

        &__table {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
        }
    }
</style>
