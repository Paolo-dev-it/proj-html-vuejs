<!-- Componente importato su MainComp -->

<template>
    <div class="container-big">
        <div class="container">
            <!-- Contenitore a sinistra al 50% -->
            <div class="cont-left">
                <img class="img" src="../../assets/images/home-5-image-02.png" alt="">
                <div class="gray-shape"></div>
                <div class="shape"></div>
                <div class="shape-circle"></div>
                <div class="lines-shape"></div>
            </div>
            <!-- Contenitore a destra al 50% -->
            <div class="mobile-desc-cont">
                <h3>what are you looking for?</h3>
                <h2>Learn on your <span>mobile</span> anytime!</h2>
                <p>Save lessons for later and revise on write notes at any time and on multiple devices on your way.
                    Never
                    interfere with activities of enjoyment or other precious moments</p>
                <button class="btn">download our app</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: 'MobileSectionComp'
}
</script>

<style lang="scss" scoped>
.container-big {
    width: 100%;
    background-color: white;
    padding-top: 70px;
}

// Contenitore al 70%
.container {
    width: 70%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 130px;
    position: relative;
}

// Contenitore sx al 50% del 70%
.cont-left {
    width: 50%;
}

.img {
    position: absolute;
    top: -10px;
    z-index: 1;
}

// Shape grigia 
.gray-shape {
    background-image: url('../../assets/images/underlay-shape-grey.svg');
    background-size: cover;
    position: absolute;
    left: -100px;
    top: 150px;
    width: 400px;
    height: 400px;
    z-index: 0;

}

// Shape cerchio
.shape-circle {
    background-image: url('../../assets/images/maxcoach-shape-02.png');
    background-size: cover;
    position: absolute;
    left: 400px;
    top: 30px;
    width: 70px;
    height: 70px;
}

// Shape rettangolare
.shape {
    background-image: url('../../assets/images/maxcoach-shape-07.png');
    background-size: cover;
    position: absolute;
    left: 370px;
    top: 300px;
    width: 120px;
    height: 200px;
}

// Shape linee
.lines-shape {
    background-image: url('../../assets/images/maxcoach-shape-01.png');
    background-size: cover;
    position: absolute;
    left: -150px;
    top: 70px;
    width: 200px;
    height: 55px;
}

// Sezione a destra al 50% del 70%
.mobile-desc-cont {
    width: 50%;
    margin-top: 100px;
    margin-left: 50px;

    h3 {
        text-transform: uppercase;
        margin-bottom: 30px;

    }

    h2 {
        font-size: 2.8rem;
        margin-bottom: 30px;
        line-height: 3.5rem;
    }

    p {
        line-height: 1.8rem;
    }

    .btn {
        margin-top: 30px;
        padding: 15px;
        width: 200px;
        background-color: #1FAD96;
        color: white;
        text-transform: capitalize;
        border: 0;
        border-radius: 5px;
    }

    .btn:hover {
        background-color: rgb(237, 237, 237);
        color: #1FAD96;
        transition-duration: 0.5s;
    }
}
</style>