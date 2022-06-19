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
                        Создать сотрудника
                    </div>
                    <v-icon @click="onClose">mdi-close</v-icon>
                </div>
                <v-form ref="form" class="pa-7" v-model="valid" lazy-validation>
                    <v-text-field
                        outlined
                        label="Имя"
                        required
                        v-model="name"
                    />
                    <v-text-field
                        outlined
                        label="Фамилия"
                        required
                        v-model="lastName"
                    />
                    <v-text-field
                        outlined
                        label="Отчество"
                        required
                        v-model="patronymic"
                    />
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="birthDate"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="birthDate"
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
                            v-model="birthDate"
                        >
                            <v-spacer></v-spacer>
                            <v-btn text color="primary" @click="menu = false">
                                Отмена
                            </v-btn>
                            <v-btn
                                text
                                color="primary"
                                @click="$refs.menu.save(birthDate)"
                            >
                                ОК
                            </v-btn>
                        </v-date-picker>
                    </v-menu>
                    <v-text-field
                        outlined
                        label="Адрес проживания"
                        required
                        v-model="address"
                    />
                    <v-text-field outlined label="Отдел" v-model="department" />
                    <v-textarea
                        outlined
                        label="О себе"
                        auto-grow
                        required
                        v-model="about"
                    />
                    <v-btn
                        class="create-employee__btn"
                        color="primary"
                        large
                        @click="onCreateNewEmployee"
                    >
                        Создать
                    </v-btn>
                </v-form>
            </div>
        </div>
    </v-app>
</template>

<script>
    import { mapActions } from "vuex"

    export default {
        data: () => ({
            valid: true,
            menu: false,
            birthDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            name: "",
            lastName: "",
            patronymic: "",
            address: "",
            department: "",
            about: ""
        }),
        methods: {
            ...mapActions({
                createNewEmployee: "createNewEmployee"
            }),
            onClose() {
                this.$emit("close")
            },
            onCreateNewEmployee() {
                const newEmployee = {
                    id: Date.now(),
                    name: this.name,
                    lastName: this.lastName,
                    patronymic: this.patronymic,
                    birthDate: this.birthDate,
                    address: this.address,
                    department: this.department,
                    about: this.about
                }

                this.createNewEmployee(newEmployee)

                this.onClose()
            }
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
