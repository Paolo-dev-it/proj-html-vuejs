<template>
    <div class="container">
        <div class="card-cont">
            <div class="single-card">
                <div>
                    <span>{{ singleEventCardData.place }}</span>
                    <h3>{{ singleEventCardData.event }}</h3>
                </div>
                <div>
                    <div>{{ singleEventCardData.number }}</div>
                    <div>{{ singleEventCardData.month }}</div>
                    <div><button>ciao </button></div>
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
.card-cont {
    width: 380px;
    display: flex;
    justify-content: space-between;


}

.single-card {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    padding: 20px;
}
</style>