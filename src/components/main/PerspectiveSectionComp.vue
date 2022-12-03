<template>
    <div class="perspective-cont">
        <div class="img-happy">
            <img src="../../assets/images/about-us-03-image-01.png" alt="">
        </div>
        <div class="perspect-desc-cont">
            <h5>dream with <span>maxcoach</span></h5>
            <h2>Construct a <span>stunning</span> career perspective</h2>
            <div>
                <div class="title-card-top">
                    <div>
                        <h3>Multiple platforms supporting for teaching and studying</h3>
                    </div>
                    <div class="minus-sty">
                        <font-awesome-icon class="icn-min-sty" icon="fa-minus" />
                    </div>

                </div>
                <div class="card-top-1">
                    <p>
                        MaxCoach supports the act of teaching and learning on multiple platforms like online or
                        offline
                        via material downloads. We know things aren't supposed to be devoured in a short time, you
                        can
                        always access our knowledge base from any device
                    </p>
                </div>

            </div>
            <div class="card-top-2">
                <div>
                    <h3>Multiple platforms supporting for teaching and studying</h3>
                </div>
                <div class="plus-cont">
                    <img src="../../assets/images/add.svg" alt="">
                </div>
            </div>
            <div class="card-top-3">
                <div>
                    <h3>Multiple platforms supporting for teaching and studying</h3>
                </div>
                <div class="plus-cont">
                    <img src="../../assets/images/add.svg" alt="">
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PerspectiveSectionComp'
}
</script>

<style lang="scss" scoped>
.perspective-cont {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: space-between;


    .img-happy {
        margin-top: 100px;
        width: 50%;

        img {
            width: 100%;
            background-image: url('../../assets/images/underlay-shape-lilla.svg');
            background-size: cover;
            background-repeat: no-repeat;
        }
    }

    .perspect-desc-cont {
        margin-top: 100px;
        padding: 180px 25px 30px 50px;
        width: 50%;


        h5 {
            text-transform: uppercase;
            font-weight: lighter;
            margin-bottom: 30px;
            font-size: 1rem;

            span {
                font-weight: bolder;
            }
        }

        h2 {
            font-size: 3rem;
            font-weight: 900;
            text-transform: capitalize;
            margin-bottom: 40px;

            span {
                font-weight: 200;
                color: #01afcB;
            }
        }

        .card-top-1 {
            -webkit-box-shadow: 0px 0px 65px 39px #E7E7E7;
            -moz-box-shadow: 0px 0px 65px 39px #E7E7E7;
            -o-box-shadow: 0px 0px 65px 39px #E7E7E7;
            box-shadow: 0px 0px 10px 0px #E7E7E7;
            padding: 15px;

            p {
                font-weight: lighter;
                color: gray;
            }
        }

        .card-top-2 {
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            -webkit-box-shadow: 0px 0px 65px 39px #E7E7E7;
            -moz-box-shadow: 0px 0px 65px 39px #E7E7E7;
            -o-box-shadow: 0px 0px 65px 39px #E7E7E7;
            box-shadow: 0px 0px 10px 0px #E7E7E7;


            .plus-cont {
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background-color: gray;
                padding: 10px;
                position: relative;

                img {
                    fill: red;
                    width: 20px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }

        .card-top-3 {

            border-radius: 5px;
            padding: 15px;
            display: flex;

            justify-content: space-between;
            align-items: center;
            -webkit-box-shadow: 0px 0px 65px 39px #E7E7E7;
            -moz-box-shadow: 0px 0px 65px 39px #E7E7E7;
            -o-box-shadow: 0px 0px 65px 39px #E7E7E7;
            box-shadow: 0px 0px 10px 0px #E7E7E7;

            .plus-cont {
                height: 20px;
                width: 20px;
                border-radius: 50%;
                background-color: gray;
                padding: 10px;
                position: relative;

                img {
                    fill: red;
                    width: 20px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }
            }
        }

        .title-card-top {
            background-color: #01afcB;
            color: white;
            padding: 15px;
            border-radius: 5px 5px 0px 0px;
            display: flex;
            align-items: center;


            .minus-sty {

                height: 20px;
                width: 20px;
                border-radius: 50%;
                background-color: white;
                padding: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-left: 30px;

                .icn-min-sty {
                    color: #01afcB;

                }
            }
        }

        h3 {
            font-size: 1rem;
        }
    }
}
</style>