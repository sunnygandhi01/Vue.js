<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <hr>
        <button class="btn btn-primary" @click="navigateHome">Go to Home.</button>
        <router-view></router-view>
        <button @click="changeName">Change my Name</button>
        <button @click="changeCity">Change my Place</button>
        <p>Name is {{ name }}</p>
        <p>Age is {{ age }}</p>
        <p>Place is {{ place }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                        :myName="name"
                        :userPlace="place"
                        @nameWasReset="name = $event"
                        :resetFn="resetName"
                        :resetFn1="resetCity"
                        :userAge="age"
                        @cityWasReset="place = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit
                        :userAge="age"
                        @ageWasEdited="age = $event"
                ></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
            return {
                name: 'Max',
                age: 27,
                place: 'Kansas City',
                
            };
        },
        methods: {
            changeName() {
                this.name = 'Anna';
            },
            resetName() {
                this.name = 'Max';
            },
            changeCity() {
                this.place = 'New Delhi'
            },
            resetCity() {
                this.place = 'Kansas city';
            },
            navigateHome() {
                this.$router.push('/')
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        watch: {
            // '$route'(to, from) { // this is to inform route where the route is going to,
            //     this.id = to.params.id // and where it is coming from, this is done that route knows where it will going.
            // }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
