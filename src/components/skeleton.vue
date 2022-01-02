<template>
    <div class="wrapp">
        <div class="global">
            <div class="global__feedbody">
                <div class="global__feedtop">
                    <div class="image__username__date">
                        <div class="image">
                            <!-- <img src="../assets/user.png" alt=""> -->
                        </div>
                        <div class="username__date">
                            <p class="username"
                              
                            >
                              
                            </p>
                            <p class="date"></p>
                        </div>
                    </div>
                    <div  class="likes">
                        <!-- <img class="heart" src="../assets/heart.png" alt="">
                        <span>likes</span> -->
                    </div>
                </div>
                <div class="global__feedmain">
                    <div class="title"></div>
                    <div class="body"></div>
                    <div class="readmore"></div>
                </div>
            </div>
        </div>
         <div class="global">
            <div class="global__feedbody">
                <div class="global__feedtop">
                    <div class="image__username__date">
                        <div class="image">
                            <!-- <img src="../assets/user.png" alt=""> -->
                        </div>
                        <div class="username__date">
                            <p class="username"
                              
                            >
                              
                            </p>
                            <p class="date"></p>
                        </div>
                    </div>
                    <div  class="likes">
                        <!-- <img class="heart" src="../assets/heart.png" alt="">
                        <span>likes</span> -->
                    </div>
                </div>
                <div class="global__feedmain">
                    <div class="title"></div>
                    <div class="body"></div>
                    <div class="readmore"></div>
                </div>
            </div>
        </div>
         <div class="global">
            <div class="global__feedbody">
                <div class="global__feedtop">
                    <div class="image__username__date">
                        <div class="image">
                            <!-- <img src="../assets/user.png" alt=""> -->
                        </div>
                        <div class="username__date">
                            <p class="username"
                              
                            >
                              
                            </p>
                            <p class="date"></p>
                        </div>
                    </div>
                    <div  class="likes">
                        <!-- <img class="heart" src="../assets/heart.png" alt="">
                        <span>likes</span> -->
                    </div>
                </div>
                <div class="global__feedmain">
                    <div class="title"></div>
                    <div class="body"></div>
                    <div class="readmore"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
   
}
</script>

<style scoped>
.wrapp{
    
    padding-bottom: 200px;
}
.global{

    width: 100%;
    /* height: 500px; */
   
    
}

.global__header{
    border-bottom: 1px solid #E5E5E5;
    height: 50px;
    
}

.global__feedbody{
    overflow: auto;
    border-bottom: 1px solid #E5E5E5;
    padding-bottom: 30px;
}

.global__header__title{
    height: 100%;
    width: 100px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #008081;
}

.global__header__title h3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 400;
    color: #008081;
    font-size: 16px;
}

.global__feedtop{
    display: flex;
    justify-content: space-between;
    align-items: center;
}



.image__username__date{
    display: flex;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding-top: 30px;
}

.image{
    display: flex;
    align-items: center;
    margin-right: 10px;
    height: 50px;
    width: 50px;
    background: #F3F3F3;
    border-radius: 50%;
    animation: pop 1s forwards infinite alternate;
    

}



.username{
    font-size: 15px;
    color: #008081;
    cursor: pointer;
    
}

.date{
    font-size: 12px;
    color: #d1cece;
}

.likes{
    height: 30px;
    width: 50px;
    border-radius: 5px;
    background: #F3F3F3;
    animation: pop 1s forwards infinite alternate;
}

.global__feedmain{
    margin-top: 20px;
}

.heart{
    height: 14px;
}

.title{
    width: 300px;
    height: 30px;
    background: #F3F3F3;
    border-radius: 5px;
    margin-bottom: 20px;
    animation: pop 1s forwards infinite alternate;

}

.body{
    width: 80%;
    height: 50px;
    background: #F3F3F3;
    border-radius: 5px;
    animation: pop 1s forwards infinite alternate;
}

.readmore{
    height: 30px;
    width: 100px;
    background: #F3F3F3;
    margin-top: 20px;
    animation: pop 1s forwards infinite alternate;
}

@keyframes pop {
    0%{
        opacity: .2;
        transform: translateY(6px) scale(0.95);
    }
     100%{
        opacity: .6;
        transform: translateY(0px) scale(1);
    }
}

@media  screen and (max-width:480px){
    .wrap{
        padding-left:20px;
        padding-right:20px;
    }

}
</style>