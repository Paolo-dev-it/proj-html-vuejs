<template>
    <div class="big-container">
        <div class="container">
            <div class="left-section">
                <h3>Address</h3>
                <ul>
                    <li>382 NE 191st St # 87394 Miami, FL 33179-3899</li>
                    <li>+1(305) 547-9909 (9am - 5pm EST, Monday - Friday)</li>
                    <li>support@maxcoach.com</li>
                </ul>
                <div>
                    <ul class="icons">
                        <li><font-awesome-icon icon="fa-brands fa-square-facebook" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-square-twitter" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-instagram" /></li>
                        <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
                    </ul>
                </div>

            </div>
            <div class="right-section">

                <div class="ul-cont">

                    <ul>
                        <li>
                            <h3>Explore</h3>
                        </li>
                        <li>Start here</li>
                        <li>Blog</li>
                        <li>About us</li>
                    </ul>
                    <ul class="right-list">
                        <li>Success story</li>
                        <li>Courses</li>
                        <li>Contact us</li>
                    </ul>
                </div>



                <div class="inf-con">
                    <ul>
                        <li>
                            <h3>Information</h3>
                        </li>
                        <li>Membership</li>
                        <li>Purchase guide</li>
                        <li>Privacy policy</li>
                        <li>Terms of services</li>
                        <div class="cont-btn">
                            <button @click="toTop()"><font-awesome-icon icon="fa-solid fa-arrow-up-long" /></button>
                        </div>

                    </ul>
                </div>
            </div>

        </div>
        <div class="copyright">
            &#169; 2022 MaxCoach. All Rights Reserved
        </div>
    </div>
</template>

<script>
export default {
    name: 'LinksSectionFooter',
    methods: {

        toTop() {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            }
            )
        }


    }
}
</script>

<style lang="scss" scoped>
.big-container {
    width: 100%;
    margin: 0 auto;
    padding: 50px 0px;
    position: relative;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;


    ul {
        list-style: none;
    }

    .left-section {
        .icons {
            display: flex;

            li {
                margin-right: 40px;
                font-size: 1.4rem;

            }
        }

        li {
            margin: 15px 0px;
            color: gray;
        }
    }



    .right-section {
        display: flex;
        align-items: center;
        color: gray;

        .ul-cont {
            display: flex;
            margin-right: 20px;
            line-height: 2rem;

            h3 {
                color: black;
            }

            .right-list {
                padding-top: 37px;
                margin-left: 70px;
                line-height: 2rem;
            }
        }

        .inf-con {
            h3 {
                color: black;

            }


            padding-top: 37px;
            margin-left: 70px;
            line-height: 2rem;

            .cont-btn {
                padding-bottom: 20px;
            }

            button {
                position: absolute;
                right: 30px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 0;
                background-color: #1FAD96;
                color: white;
                font-size: 1.1rem;
            }

            button:hover {
                background-color: white;
                color: #1FAD96;
                transition-duration: 0.5s;
            }
        }


    }

    .copyright {
        display: flex;
        text-align: center;
        justify-content: center;
    }
}
</style>