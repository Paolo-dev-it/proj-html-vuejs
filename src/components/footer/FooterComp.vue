<template>
    <footer>
        <div class="container">
            <div class="title">
                <h3>people are praising maxcoach</h3>
                <h2>What make they <span>love us?</span></h2>
            </div>
            <div class="container-cards">
                <PraisingSectionComp v-for="(elem, index) in reviewsData" :key='index' :singleReviewCardData="elem" />
            </div>
            <div class="icn">
                <font-awesome-icon class="black" icon="fa-solid fa-circle" />
                <font-awesome-icon class="gray" icon="fa-solid fa-circle" />
                <font-awesome-icon class="gray" icon="fa-solid fa-circle" />
                <font-awesome-icon class="gray" icon="fa-solid fa-circle" />
            </div>
            <div class="cta">
                <div>
                    <img src="../../assets/images/maxcoach-shape-01.png" alt="">
                </div>
                <div>
                    <h3></h3>
                </div>
                <div>
                    <h2></h2>
                    <button>ciao</button>
                </div>
                <div>
                    <img src="../../assets/images/maxcoach-shape-02.png" alt="">
                </div>
            </div>

        </div>
    </footer>

</template>

<script>
import PraisingSectionComp from '../footer/PraisingSectionComp.vue';
export default {
    name: 'FooterComp',
    components: {
        PraisingSectionComp,
    },
    props: {
        reviewsData: Array,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
footer {
    width: 100%;

}

.container {
    width: 70%;
    margin: 0 auto;

    .title {
        text-align: center;

        h3 {
            text-transform: uppercase;
            font-size: 1rem;
            color: gray;
            font-weight: 100;
            margin-bottom: 20px;
        }

        h2 {
            font-size: 3rem;
            margin-bottom: 100px;

            span {
                color: #1FAD96;
                font-weight: 100;
            }
        }
    }

    .container-cards {
        display: flex;
        gap: 25px;
        margin-top: 150px;
    }

    .icn {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 80px;

    }

    .black {
        font-size: 0.7rem;

    }

    .gray {
        color: lightgray;
        font-size: 0.4rem;
        margin-left: 20px;
    }

    .cta {
        display: flex;
    }
}
</style>