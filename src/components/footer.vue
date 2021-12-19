<template>
    <footer class="footer">
        <div class="footer__inside">
            <p>Pencil</p>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    height: 60px;
    background: #F3F3F3;
    /* position: fixed; */
    /* bottom: 0px; */
    width: 100%;
    /* margin-top: 40vh; */
    margin-top: 100vh;
    
}

.footer__inside{
    padding-left: 200px;
    padding-right: 200px;
    display: flex;
    height: 100%;
    align-items: center;
}

.footer__inside p{
    color:#008081;
}

@media  screen and (max-width:480px){
    .footer__inside{
        padding-left: 20px;
        padding-right: 20px;
    }

}
</style>