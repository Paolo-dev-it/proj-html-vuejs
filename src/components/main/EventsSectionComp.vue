<!-- Componente importato su MainComp -->

<template>
    <div class="container">
        <!-- Contenitore carte -->
        <div class="card-cont">
            <!-- Contenitore carta singola -->
            <div class="single-card">
                <!-- Sezione sinistra della carta -->
                <div class="left-part">
                    <span class="icn"><font-awesome-icon icon="fa-solid fa-location-dot" /></span>
                    <span>{{ singleEventCardData.place }}</span>
                    <h3>{{ singleEventCardData.event }}</h3>
                </div>
                <!-- Sezione destra della carta -->
                <div class="right-part">
                    <div class="nmb">{{ singleEventCardData.number }}</div>
                    <div class="mnt">{{ singleEventCardData.month }}</div>
                    <button>Get ticket </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'EventsSectionComp',
    props: {
        singleEventCardData: Object
    }
}
</script>

<style lang="scss" scoped>
// Contenitore carta singola
.card-cont {
    width: 480px;
}

// Contenitore contenuto carta 
.single-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 10px;
    padding-top: 30px;
}

.single-card:hover {
    border-left: 4px solid #1FAD96;
    background-color: white;
    transition-duration: 0.5s;
}

.single-card:hover button {
    background-color: #403A64;
    color: white;
    transition-duration: 0.5s;
}

// Parte sinistra carta
.left-part {
    .icn {
        margin: 0;
    }

    span {
        font-weight: 100;
        font-size: 0.9rem;
        color: gray;
        margin-left: 10px;
    }

    h3 {
        text-transform: capitalize;
        margin-top: 10px;
    }
}

// Parte destra carta
.right-part {
    display: flex;
    flex-direction: column;
    align-items: center;

    .nmb {
        font-size: 2.5rem;
        color: #1FAD96;
    }

    .mnt {
        text-transform: uppercase;
    }

    button {
        padding: 5px;
        width: 130px;
        height: 30px;
        border-radius: 5px;
        border: 0;
        background-color: #1FAD96;
        color: white;
        margin-top: 10px;
        font-weight: 900;
    }

    button:hover {
        background-color: #403A64;
        color: white;
        transition-duration: 0.5s;
    }
}
</style>