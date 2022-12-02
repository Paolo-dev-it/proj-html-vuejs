<template>
    <div>
        <ul>
            <li>
                {{ singleData.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NavbarHeaderComp',
    props: {
        singleData: String,
    }
}
</script>

<style lang="scss" scoped>

</style>