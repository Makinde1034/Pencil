<template>
    <div class="loader">
        <img src="../assets/loading.png" alt="">
    </div>
</template>

<script>
export default {

}
</script>

<style>
.loader img{
    height: 18px;
    animation: load 0.5s linear infinite;
}

@keyframes load {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
</style>