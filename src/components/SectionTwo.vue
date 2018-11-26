<template>
    <section class="section section-two container-fluid">
        <div class="section-two__content container">
            <b-btn class="button--red">Create job-ready CV</b-btn>
            <h1>Transform your CV</h1>
            <p>Turn your CV from a generic one to an outstanding resume  
                that will make employers curious to meet you.
                Put your information and background details;choose your favorite template design amog a variety of dedicatedly created templates.Download your new CV, and you are to pass it to your future employers
            </p>
        <div class="section-two__content__graphics row">
            <div class="section-two__content__graphics__item col-lg-4 section-two__content__graphics__item--bad-cv"></div>
            <div class="section-two__content__graphics__item col-lg-4 section-two__content__graphics__item--arrow"></div>
            <div class="section-two__content__graphics__item col-lg-4 section-two__content__graphics__item--good-cv"></div>
        </div>
        </div>
    </section>    
</template>

<script>
export default {
    name: "section-two"
};
</script>

<style lang="scss" scoped>
.section-two {
}
h1 {
    margin: 20px 0;
    font-size: 65px;
    font-weight: bolder;
}
.section-two__content {
    margin-top: 10em;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.section-two__content__graphics {
    // min-width: 870px;
}

.section-two__content__graphics__item--bad-cv {
    background: url("../assets/img/cv-x.png");
    background-repeat: no-repeat;
}

.section-two__content__graphics__item--arrow {
    background: url("../assets/img/arrow.png");
    background-repeat: no-repeat;
    background-position: center;
}
.section-two__content__graphics__item--good-cv {
    background: url("../assets/img/cv-ok.png");
    background-repeat: no-repeat;
    background-position: center;
}
.section-two__content__graphics__item {
    height: 350px;

    min-width: 300px;
    // border: 1px solid red;
    background-repeat: no-repeat;
    background-position: center;
    // background-size: cont;
}

@media only screen and(max-width: 989px) {
    .section-two__content__graphics {
        max-width: 350px;
    }
}
</style>

