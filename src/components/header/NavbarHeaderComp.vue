<template>
    <div>
        <ul>
            <li>
                <a href="">{{ singleData.name }}</a>
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
li {
    list-style-type: none;

    a {
        text-decoration: none;
        color: black;
    }
}
</style>