<template>
    <div>
        <div class="card-cont">
            <img :src="`/img/${singleLessonCardData.path}`" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'CoursesSectionComp',
    props: {
        singleLessonCardData: String,
    }
}
</script>

<style lang="scss" scoped>
.card-cont {
    width: 100%;

    ;


    img {
        width: 300px;
    }
}
</style>