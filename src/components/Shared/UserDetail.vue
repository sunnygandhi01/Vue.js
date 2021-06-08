<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <p>User Place: {{ userPlace }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetCity">Reset City</button>
        <button @click="resetFn()">Reset Name</button>
        <button @click="resetFn1()">Reset City</button>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';

    export default {
        props: {
            myName: {
                type: String,
                required: true,
            },
            resetFn: Function,
            resetFn1: Function,
            userAge: Number,
            userPlace: String
        },
        methods: {
            switchName() {
                return this.myName.split("").reverse().join("");
            },
            resetName() {
                this.myName = 'Max';
                this.$emit('nameWasReset', this.myName);
            },
            resetCity() {
                this.userPlace = 'Kansas City'
                this.$emit('cityWasReset', this.userPlace)
            }
        },
        created() {
            eventBus.$on('ageWasEdited', (age) => {
                this.userAge = age;
            });
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
