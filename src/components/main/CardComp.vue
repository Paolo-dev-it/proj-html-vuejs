<template>
    <div class="container">
        <div class="card">
            <img :src="`/img/${singleCardData.url}`" alt="">
            <h4>{{ singleCardData.type }}</h4>
            <p> {{ singleCardData.description }}</p>
            <div>Start now<span><font-awesome-icon class="ic-arr" icon="fa-arrow-right" /></span></div>
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
        color: gray;
        font-weight: bold;

        p {
            line-height: 1.8rem;
            margin-top: 20px;
            font-weight: lighter;

        }

        div {
            font-size: 0.9rem;

            .ic-arr {
                margin-left: 10px;
                margin-top: 20px;
            }

        }

        div:hover {
            color: #1FAD96;
            cursor: pointer;
        }


    }
}
</style>