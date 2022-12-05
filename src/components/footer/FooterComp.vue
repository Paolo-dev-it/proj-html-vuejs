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
                <div class="lines-sh">
                    <img src="../../assets/images/maxcoach-shape-01.png" alt="">
                </div>
                <div class="center-blk">
                    <h3>Start today for getting <span>online certification</span></h3>
                    <h2>You can be your own guiding star with our help!</h2>
                    <button>Get started now</button>
                </div>

                <div class="circle-sh">
                    <img src="../../assets/images/maxcoach-shape-02.png" alt="">
                </div>
            </div>
            <div class="cont-footer">
                <LinksSectionFooter />
            </div>
        </div>
    </footer>

</template>

<script>
import PraisingSectionComp from '../footer/PraisingSectionComp.vue';
import LinksSectionFooter from '../footer/LinksSectionFooter.vue';
export default {
    name: 'FooterComp',
    components: {
        PraisingSectionComp,
        LinksSectionFooter
    },
    props: {
        reviewsData: Array,
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
    width: 100%;
    margin: 0 auto;

    .title {
        text-align: center;
        padding-top: 100px;
        width: 70%;
        margin: 0 auto;

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
        margin-bottom: 50px;
        width: 70%;
        margin: 0 auto;
        padding-bottom: 80px;
    }

    .icn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 80px;

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
        justify-content: space-between;
        text-align: center;
        align-items: center;
        width: 70%;
        margin: 0 auto;
        padding-bottom: 80px;


        .lines-sh {
            margin-top: 40px;
        }

        .circle-sh {
            margin-top: 50px;
        }

        .center-blk {
            h3 {
                margin-bottom: 10px;
                font-size: 1.7rem;

                span {
                    text-transform: capitalize;
                    color: #1FAD96;
                    font-weight: 100;
                }
            }

            h2 {
                margin-bottom: 10px;
                font-size: 2.2rem;
                font-weight: 900;
            }

            button {
                width: 200px;
                height: 45px;
                border-radius: 5px;
                border: 0;
                background-color: #1FAD96;
                color: white;
                font-weight: 900;
                margin-top: 30px;
            }

            button:hover {
                background-color: rgb(237, 237, 237);
                color: #1FAD96;
                transition-duration: 0.5s;
            }
        }
    }

    .cont-footer {
        width: 100%;
        background-color: #f8f1eb;
    }
}
</style>