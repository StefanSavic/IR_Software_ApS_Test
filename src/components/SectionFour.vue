<template>
      <section class=" section section-four container-fluid">
        <div class="section-four__content container">         
        <div class="section-four__content__graphics row">
            <div class="section-four__content__graphics__item col-lg-6 col-md-12 d-none d-lg-block d-xl-block  section-four__content__graphics__item--price-demo"></div>
            <div class="section-four__content__graphics__item col-lg-6 col-md-12 section-four__content__graphics__item--prices">
                <b-btn class="button--price button--red">Pricing</b-btn>
                <h1 class="section-four__content__graphics__item__header">our prices</h1>
                <ul>
                    <div class="list-item" v-for="(p,index) in pricesList" :key="index">
                        <font-awesome-icon  icon="check" />
                        <li> {{p}}</li>
                    </div>
                </ul>
                <div class="price-circle">
                    <span>55</span>
                    <span>&euro; / mo</span>
                </div>
            </div>
           
        </div>
        </div>
    </section>  
</template>

<script>
export default {
    name: "section-four",
    data() {
        return {
            pricesList: [
                "our premium and friendly user interface",
                "unlimited access and download all of our job-winning CV templates",
                "Professional-looking designs and tools to add some uniqueness to your CV",
                "experts assistance frome our supprot team"
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
.button--price {
    width: 70px;
    transform: translateX(30px);
}
.section-four {
}
.section-four__content {
    margin: auto;
    // padding: 4em 0;
}
.section-four__content__graphics__item--price-demo {
    background: url("../assets/img/price-picture.png");
    height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateY(-50px);
}
.section-four__content__graphics__item--prices {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}
.section-four__content__graphics__item__header {
    margin-top: 30px;
    margin-left: 30px;
    text-transform: capitalize;
    font-weight: bolder;
}
.section-four__content__graphics {
}
.section-four__content__graphics__item {
}
.svg-inline--fa {
    color: #ad0000;
    margin-right: 1em;
}
ul {
    text-transform: capitalize;
    list-style-type: none;
    padding: 0;
    .list-item {
        display: flex;
        align-items: center;
    }
}
.price-circle {
    border-radius: 50%;
    height: 200px;
    width: 200px;
    background: #ad0000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    border: 10px solid white;
    box-shadow: 0 0 10px black;
    span:first-child {
        font-size: 85px;
        font-weight: bolder;
    }
    span:nth-child(2) {
        font-size: 25px;
    }
}
</style>

