<!-- Componente importato su HeaderComp -->

<template>
    <div>
        <!-- Lista navbar. Dati gestiti con un props. -->
        <ul>
            <li>
                <a href="">{{ singleData.name }}</a>
                <font-awesome-icon class="arr-dwn-icn" icon="fa-chevron-down" />
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
        color: gray;
    }

    .arr-dwn-icn {
        width: 10px;
        margin-left: 5px;
        color: gray;
    }

    a:hover {
        text-decoration: none;
        color: #1FAD96;
    }
}
</style>