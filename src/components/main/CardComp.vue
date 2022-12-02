<template>
    <div class="container">
        <div class="card">
            <img :src="`/img/${singleCardData.url}`" alt="">
            <h4>{{ singleCardData.type }}</h4>
            <p> {{ singleCardData.description }}</p>
            <div><span></span></div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'CardComp',
    props: {
        singleCardData: String,
    }
}

</script>

<style lang="scss" scoped>
.container {
    width: 70%;
    margin: auto;
    display: flex;

    .card {
        text-align: center;

    }
}
</style>