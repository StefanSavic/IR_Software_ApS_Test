<template>
      <section class="section-three container-fluid">
        <div class="section-three__content container">         
        <div class="section-three__content__graphics row">
            <div class="section-three__content__graphics__item col-lg-4 col-md-12 section-three__content__graphics__item--free-demo">
                <div class="section-three__content__graphics__item__icon"></div>
                <h5 class="section-three__content_graphics__item__header">Free demo version</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deleniti ea porro consequatur officiis non aliquam incidunt aperiam recusandae exercitationem.</p>
            </div>
            <div class="section-three__content__graphics__item col-lg-4 col-md-12 section-three__content__graphics__item--users">
                <div class="section-three__content__graphics__item__icon"></div>
                <h5 class="section-three__content_graphics__item__header">Over 1000 happy users</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deleniti ea porro consequatur officiis non aliquam incidunt aperiam recusandae exercitationem.</p>
            </div>
            <div class="section-three__content__graphics__item col-lg-4 col-md-12 section-three__content__graphics__item---choice">
                <div class="section-three__content__graphics__item__icon"></div>
                <h5 class="section-three__content_graphics__item__header">plenty of options to choose</h5>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae deleniti ea porro consequatur officiis non aliquam incidunt aperiam recusandae exercitationem.</p>
            </div>
        </div>
        </div>
    </section>  
</template>

<script>
export default {
    name: "section-three"
};
</script>

<style lang="scss" scoped>
.section-three {
    background: url("../assets/img/wall-background.jpg");
}
.section-three__content {
    margin: auto;
    padding: 4em 0;
}
.section-three__content__graphics {
}
.section-three__content__graphics__item {
    text-align: center;
}
.section-three__content__graphics__item__icon {
    background: url("../assets/img/icon.png");
    height: 100px;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
}
.section-three__content_graphics__item__header {
    position: relative;
    font-weight: bolder;
    text-transform: uppercase;
}
.section-three__content_graphics__item__header::after {
    content: "";
    display: block;
    height: 5px;
    width: 100px;
    background: #ad0000;
    position: relative;
    margin: 20px auto;
}
</style>

