<template>
  <section class="testemonials container-fluid">
    <b-btn class="button--red button--testemonials-signUp">Sign Up Here</b-btn>
    <div class="testemonials__content container">
      <h1 class="testemonials__header">Our Users Said...</h1>
      <img class="nav nav-right" src="../assets/img/arrow1.png" alt>
      <img class="nav nav-left" src="../assets/img/arrow1.png" alt>
      <carousel
        :per-page="1"
        :navigationClickTargetSize="50"
        navigationNextLabel
        navigationPrevLabel
        :navigationEnabled="true"
        :paginationEnabled="false"
        :loop="true"
        :autoplayTimeout="8000"
        :autoplay="true"
      >
        <slide>
          <div class="testemonials__card row">
            <div class="col-md-6 col-lg-3">
              <img class="testemonial__image" src="../assets/img/customer-1.png" alt>
            </div>
            <div class="col-md-6">
              <h1 class="testemonials__card__header">Kiri Smith</h1>
              <h3 class="testemonials__card__subheader">Student</h3>
              <p class="testemonials__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                ut lacus vel interdum.
              </p>
            </div>
          </div>
        </slide>
        <slide>
          <div class="testemonials__card row">
            <div class="col-md-6 col-lg-3">
              <img class="testemonial__image" src="../assets/img/customer-2.png" alt>
            </div>
            <div class="col-md-6">
              <h1 class="testemonials__card__header">Kiri Smith</h1>
              <h3 class="testemonials__card__subheader">Student</h3>
              <p class="testemonials__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                ut lacus vel interdum.
              </p>
            </div>
          </div>
        </slide>
        <slide>
          <div class="testemonials__card row">
            <div class="col-md-6 col-lg-3">
              <img class="testemonial__image" src="../assets/img/customer-3.png" alt>
            </div>
            <div class="col-md-6">
              <h1 class="testemonials__card__header">Maria Simoson</h1>
              <h3 class="testemonials__card__subheader">Jurnalist</h3>
              <p class="testemonials__card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                ut lacus vel interdum.
              </p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
    name: "testemonials",
    components: {
        Carousel,
        Slide
    },
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
p {
}
.button--price {
    width: 70px;
    transform: translateX(30px);
}
.testemonials {
    background: url("../assets/img/wall-background.jpg");
    padding: 2em 0 2em 0;
    height: 80vh;
    // padding-bottom: 4em;
    justify-content: center;
    align-items: center;
    display: flex;
    position: relative;
    flex-direction: column;

    // z-index: 999;
}

.testemonials__content {
    // padding: 0 2em;
    margin: auto;
    // padding: 4em 0;
    text-align: center;
    position: relative;
    padding:0 2em;
}

.button--testemonials-signUp {
    // transform: translateY(-55px);
    font-size: 30px;
    position: absolute;
    top: -20px;
}
.testemonials__header {
    // font-size: 40px;
    font-weight: bolder;
    margin-bottom: 2em;
    margin-top: 2em;
}

.testemonials__card {
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    text-align: left;
    margin: auto;
    // height: 500px;
    font-weight: bolder;
}
.VueCarousel-navigation button {
    border: 1px solid red;
}
.testemonials__card__header {
    font-weight: bolder;
    font-size: 30px;
    color: #706f6e;
    margin-top: 1em;
}

.testemonials__card__text {
    padding: 1em 0;
}
.testemonials__card__subheader {
    font-size: 20px;
    color: #ad0000;
    border-bottom: 2px solid #ad0000;
    width: 30%;
    // font-weight: bold;
}
.testemonial__image {
    width: 200px;
    border-radius: 50%;
    text-align: center;
}
.slide-1 {
    height: auto;
    width: 200px;
    height: 100px;
    border-radius: 50%;
    background: url("../assets/img/customer-1.png");
}
.nav {
    position: absolute;
    top: 60%;
}
.nav-right {
    right: -50px;
    // right: 0;
}
.nav-left {
    left: -50px;
    // left: 0;
    transform: rotate(180deg);
}

@media only screen and (max-width: 644px) {
    .nav {
        display: none;
    }
}
@media only screen and (max-width: 768px) {
    .testemonials__card {
        text-align: center;
    }
    .testemonials__card__subheader {
        margin: auto;
    }
}
</style>

