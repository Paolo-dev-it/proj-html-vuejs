<template>
    <div class="container">
        <div class="single-card">
            <div class="card">
                <img :src="`/img/${singleReviewCardData.path}`" alt="">
                <div class="card-body">
                    <p class="desc">{{ singleReviewCardData.description }}</p>
                    <p class="name">{{ singleReviewCardData.name }}</p>
                    <p class="job">{{ singleReviewCardData.job }}</p>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'PraisingSectionComp',
    props: {
        singleReviewCardData: String,
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 70%;
    margin: 0 auto;


    .single-card {

        border-radius: 10px;
        width: 100%;
        height: 300px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        padding: 10px 30px;
        display: flex;
        justify-content: center;
        -webkit-box-shadow: 0px 0px 65px 39px #E7E7E7;
        -moz-box-shadow: 0px 0px 65px 39px #E7E7E7;
        -o-box-shadow: 0px 0px 65px 39px #E7E7E7;
        box-shadow: 0px 0px 10px 0px #E7E7E7;


        img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            position: absolute;
            top: -80px;
            left: 85px;
        }

        .card-body {
            margin-top: 70px;

            .desc {
                line-height: 2rem;
                font-size: 1.2rem;
                font-weight: 100;
                color: grey;
            }

            .name {
                margin-top: 20px;
                text-transform: uppercase;
                font-weight: 900;
            }

            .job {
                margin-top: 20px;
                color: gray;
            }
        }
    }
}
</style>