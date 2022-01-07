<template>
    <div>
        content
        <nuxt-link to="/user">user</nuxt-link>
    </div>
</template>

<script>
import Tutorial from '../components/Tutorial'
export default {
    layouts:'default',
    name: 'Index',
    data () {
        return {}
    },
    created () {
        console.log()
    },
    methods: {},
    components:{
        Tutorial
    }
}
</script>

<style scoped lang="scss">

</style>
