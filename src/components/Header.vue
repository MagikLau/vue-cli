<template>
    <header>
        <h1>{{title}}</h1>
        <router-link to="/login">Login</router-link>
    </header>
</template>

<script>
export default {
    name: 'app-header',
    data () {
        return {
            title: 'Vue Header'
        };
    }
}
</script>
