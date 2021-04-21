<template>
<div>
 <section class="content-container2">
        <div class="content-heding">
            <h1 class="content-title">Party History</h1>
            <h2 class="content-subtitle">Unsere Partys</h2>
        </div>
        <div class="content">
            <div class="content-card-img">
                <img src="https://source.unsplash.com/random/400x300" alt="">
            </div>
            <div class="content-card-text">
                <h3 class="card-title">Lorem, ipsum.</h3>
                <div class="card-text-top">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, dolores impedit? Nostrum illum quae optio libero minima voluptate assumenda vel!
                </div>
                <div class="card-text-bottom">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti enim atque voluptatum dignissimos fuga perspiciatis corporis aliquam harum magni veritatis maxime earum cum, corrupti officiis nemo assumenda, fugit nulla quo.
                </div>
            </div>
            <div class="content-card-img">
                <img src="https://source.unsplash.com/random/300x300" alt="">
            </div>

        
            <div class="content-card-text">
                <h3 class="card-title">Lorem, ipsum 240.</h3>
                <div class="card-text-top">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, dolores impedit? Nostrum illum quae optio libero minima voluptate assumenda vel!
                </div>
                <div class="card-text-bottom">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti enim atque voluptatum dignissimos fuga perspiciatis corporis aliquam harum magni veritatis maxime earum cum, corrupti officiis nemo assumenda, fugit nulla quo.
                </div>
                <a href="#" class="btn">more info</a>
            </div>
            <div class="content-card-img__large">
                <img src="https://source.unsplash.com/random/500x300" alt="">
            </div>
        </div>
    </section>
</div>

</template>

<script>
export default {

}
</script>

<style>
.content-container2 {
    top: 0;
    max-width: 100%;
    background: white;
}
.content{
    margin: 0 auto;
    margin-top: 8.5em; 
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 1em;
    max-width: 85%;
    background: white;
    padding: 2em;
}
.content-heading{
    position: center;
}
.card{
    background-color: #14141411;
    padding: 2em;
}
.content-title{
    text-align: center;
    font-weight: 600;
    margin-top:  1em;
    margin-bottom: 0;
    font-family: 'Indie Flower', cursive;
    font-size: xx-large;
    color: #4c4a54;
    padding-top: 2em;
}
.content-subtitle{
    text-align: center;
    font-weight: 100;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: medium;
}
.content-card-img{
    margin: 1em;
}
.content-card-img__large{
    grid-column: 2/4;
    border-radius: 1em;
}
.content-card-img img{
    border-radius: 1em;
    margin-top: 2em;
    box-shadow: 1px 2px 4px rgba(0,0,0,.4);
}
.content-card-img__large img {
    margin: 2em;
    border-radius: 1em;
    box-shadow: 1px 2px 4px rgba(0,0,0,.4);
}
.content-card-text {
    text-align: center;
    padding: 0em;
}
.card-title{
    font-family: 'Indie Flower', cursive;
    font-size: x-large;
    color: #4c4a54;
}
.card-text-top{
    margin-top: 1em;
    margin-bottom: 1em;
    padding: 0.5em;
    background-color: #14141411;
    border-radius: 1em;
}
.card-text-bottom{
    margin-bottom: 2em;
    padding: 0.5em;
    background-color: #14141411;
    border-radius: 1em;
}
.btn{
    margin-top: 2em;
    padding: 0.5em;
    background-color: #12121222;
    text-decoration: none;
    color: black;
    border-radius: 1em ;
    box-shadow: 1px 2px 4px rgba(0,0,0,.4);
}
.btn:hover {
    background-color: grey;
    color: white;
}
</style>