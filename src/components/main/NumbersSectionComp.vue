<!-- Componente importato su MainComp -->


<template>
    <div class="container-big">
        <!-- Contenitore al 70% -->
        <div class="container">
            <span>
                <div class="nmb">1.926</div>
                <div class="desc">finished lessons</div>
            </span>
            <span>
                <div class="nmb">3.092+</div>
                <div class="desc">enrolled learners</div>
            </span>
            <span>
                <div class="nmb">200</div>
                <div class="desc">online instructors</div>
            </span>
            <span>
                <div class="nmb">100%</div>
                <div class="desc">satisfaction rate</div>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NumbersSectionComp'
}
</script>

<style lang="scss" scoped>
.container-big {
    width: 100%;
    background-color: #f8f1eb;

    .container {
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        padding: 50px 100px;


    }

    // Numeri
    .nmb {
        font-size: 3rem;
        font-weight: 900;
        color: #1FAD96;
        text-align: center;
    }

    // Descrizione
    .desc {
        text-transform: uppercase;
        margin-top: 20px;
        letter-spacing: 0.1rem;
    }
}
</style>