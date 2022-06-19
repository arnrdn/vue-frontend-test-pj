<template>
    <v-app>
        <div class="create-employee" @click="onClose">
            <div class="create-employee__item" @click.stop>
                <div
                    class="
                        create-employee__header
                        pa-4
                        d-flex
                        flex-row
                        justify-space-between
                    "
                >
                    <div class="text-h5 blue--text text--darken-3">
                        Редактировать сотрудника
                    </div>
                    <v-icon @click="onClose">mdi-close</v-icon>
                </div>
                <v-form ref="form" class="pa-7" v-model="valid" lazy-validation>
                    <v-text-field
                        outlined
                        label="Имя"
                        required
                        v-model="nameInput"
                    />
                    <v-text-field
                        outlined
                        label="Фамилия"
                        required
                        v-model="lastNameInput"
                    />
                    <v-text-field
                        outlined
                        label="Отчество"
                        required
                        v-model="patronymicInput"
                    />
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="birthDateInput"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="birthDateInput"
                                label="Дата рождения"
                                prepend-inner-icon="mdi-calendar"
                                readonly
                                outlined
                                required
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            no-title
                            scrollable
                            locale="ru-ru"
                            v-model="birthDateInput"
                        >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                                Отмена
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(birthDateInput)"
                            >
                                ОК
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                    <v-text-field
                        outlined
                        label="Адрес проживания"
                        required
                        v-model="addressInput"
                    />
                    <v-text-field
                        outlined
                        label="Отдел"
                        v-model="departmentInput"
                    />
                    <v-textarea
                        outlined
                        label="О себе"
                        auto-grow
                        required
                        v-model="aboutInput"
                    />
                    <v-btn
                        class="create-employee__btn"
                        color="primary"
                        large
                        @click="onEditEmployee"
                    >
                        Редактировать
                    </v-btn>
                </v-form>
            </div>
        </div>
    </v-app>
</template>

<script>
    import { mapActions } from "vuex"

    export default {
        props: {
            id: {
                type: Number
            },
            birthDate: {
                type: String,
                default: new Date(
                    Date.now() - new Date().getTimezoneOffset() * 60000
                )
                    .toISOString()
                    .substr(0, 10)
            },
            name: {
                type: String,
                default: ""
            },
            lastName: {
                type: String,
                default: ""
            },
            patronymic: {
                type: String,
                default: ""
            },
            address: {
                type: String,
                default: ""
            },
            department: {
                type: String,
                default: ""
            },
            about: {
                type: String,
                default: ""
            }
        },
        data: () => ({
            valid: true,
            menu: false,
            birthDateInput: new Date(
                Date.now() - new Date().getTimezoneOffset() * 60000
            )
                .toISOString()
                .substr(0, 10),
            nameInput: "",
            lastNameInput: "",
            patronymicInput: "",
            addressInput: "",
            departmentInput: "",
            aboutInput: ""
        }),
        methods: {
            ...mapActions({
                callEditOfEmployee: "callEditOfEmployee"
            }),
            onClose() {
                this.$emit("close")
            },
            onEditEmployee() {
                const editedEmployee = {
                    id: this.id,
                    name: this.nameInput,
                    lastName: this.lastNameInput,
                    patronymic: this.patronymicInput,
                    birthDate: this.birthDateInput,
                    address: this.addressInput,
                    department: this.departmentInput,
                    about: this.aboutInput
                }

                this.callEditOfEmployee(editedEmployee)

                this.onClose()
            }
        },
        created() {
            this.birthDateInput =
                this.birthDate === "Нет информации"
                    ? this.birthDateInput
                    : this.birthDate
            this.nameInput = this.name
            this.lastNameInput = this.lastName
            this.patronymicInput = this.patronymic
            this.addressInput = this.address
            this.departmentInput = this.department
            this.aboutInput = this.about
        }
    }
</script>

<style lang="scss" scoped>
    .create-employee {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.3);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: grid;
        place-items: center center;

        &__item {
            background-color: #fff;
            border-radius: 5px;
            width: 90%;
            max-width: 500px;
        }

        &__btn {
            width: 100%;
            justify-self: center;
        }
    }
</style>
