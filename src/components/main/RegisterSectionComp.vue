<template>
    <div class="container">
        <div class="list-section">
            <h4>why esitate to register?</h4>
            <h2>learn at your own <span>pace</span> </h2>
            <ul>
                <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Select & customize courses to your
                    preferences</li>
                <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Change the tutor and make arrangements
                </li>
                <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Participate in events to join others
                </li>
                <li><font-awesome-icon class="check" icon="fa-solid fa-check" />Get the desidered vertificate delivered
                    at house</li>
            </ul>
            <button>Get started for free</button>
        </div>
        <div class="image-list-section">
            <img src="../../assets/images/home-5-image-01.png" alt="">
            <div class="shape"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisterSectionComp'
}
</script>

<style lang="scss" scoped>
.container {
    width: 70%;
    margin: auto;
    display: flex;
    margin-top: 100px;
    position: relative;
    z-index: 3;

    .list-section {
        width: 50%;

        h4 {
            text-transform: uppercase;
            margin-bottom: 30px;
        }

        h2 {
            text-transform: capitalize;
            font-size: 3.4rem;

            span {
                color: #01afcB;
                font-weight: lighter;
            }
        }

        li {
            list-style: none;
            margin: 20px 0px;

            .check {
                color: #01afcB;
                margin-right: 10px;
            }
        }

        button {
            margin-top: 20px;
            padding: 15px;
            border-radius: 5px;
            width: 200px;
            border: 0;
            background-color: #01afcB;
            color: white;
        }
    }

    .image-list-section {
        background-image: url('../../assets/images/underlay-shape-grey.svg');
        background-size: cover;
        background-repeat: no-repeat;
        width: 500px;
        height: 500px;

    }

    .shape {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        position: absolute;
        bottom: 100px;
        right: -40px;
        background-image: url('../../assets/images/maxcoach-shape-07-100x100.png');
        background-size: cover;
        background-repeat: no-repeat;
    }
}
</style>