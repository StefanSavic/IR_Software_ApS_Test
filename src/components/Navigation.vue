<template>
  <div class="navigation-wrapper" v-bind:class="{transparent:scrolled}">
    <b-navbar toggleable="md" type="light" right>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <div class="container">
        <b-navbar-brand href="#" class="logo"></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto nav-links">
            <b-navbar-nav>
              <b-nav-item href="#">Profile</b-nav-item>
              <b-nav-item href="#">Create Your CV</b-nav-item>
              <b-nav-item href="#">Contact Us</b-nav-item>
            </b-navbar-nav>

            <b-nav-item-dropdown
              variant="danger"
              class="dropdown custom-dropdown"
              extra-toggle-classes="nav-link-custom"
              extra-menu-classes="nav-menu-custom"
              text="Language"
              right
            >
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">
              <b-btn class="button--red">Sign Out</b-btn>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
<script>
export default {
    name: "navigation",
    data(){
        return{
            scrolled:false
        }
    },
    methods:{
        handleScroll(){
            if(window.scrollY > 0){
                this.scrolled = true;
            }else{
                this.scrolled= false
            }
            console.log('srld',this.scrolled);
        }
    },
    watch:{
        scroll(n,o){
            console.log(n);
        }
    },
    created(){
        window.addEventListener('scroll', this.handleScroll);
    }
};
</script>
<style lang="scss" scoped>
.navigation-wrapper {
    width: 100%;
    position: fixed;
    z-index: 9;
    transition: all 0.1s linear;
    // background: transparent;
}
.transparent{
    background:rgba($color: #000000, $alpha: 0.8);
}
.navbar-toggler:not(:disabled):not(.disabled){
    background: #ad0000;
    position: fixed;
    right: 5%;
    top:5%;
}
.navbar-toggler:focus{

}
.navbar-collapse{
    // width: 100%;
    padding: 10px;
    // background: #000000;
    // transform: translateY(-36px);
    transition: all 0.3s linear;
    // background:rgba($color: #000000, $alpha: 0.9);
}
.custom-dropdown {
    color: white;
}
span {
    // color: white !important;
}
.toggle-class {
    background: black;
}
li:first-child {
    text-align: left;
}
li {
    border-bottom: 1px solid white;
}
li:hover {
    border-bottom: 1px solid #ad0000;
}
a.nav-link{
    padding: 8px 0// padding: 0;
}
.nav-links li a {
    // background: black;
    background: black;
    padding:1em;
    // background:rgba($color: #000000, $alpha: 0.5);
    // background:rgba($color: #000000, $alpha: 0.5);
        color: white !important;
        span {
        font-size: 15px;
    }
    // color: white !important;
    &:hover {
    background:rgba($color: #000000, $alpha: 0.5);
        color: #ad0000 !important;
    }
}
.nav-link-custom {
    color: white !important;
}
.navbar-light .navbar-nav .show > .nav-link{
    color: white !important;

}
.logo {
    height: 100px;
    width: 200px;
    background: url("../assets/img/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    color: white;
}
.nav-menu-custom {
    background: black !important;
}

@media only screen and (max-width: 768px){
    .navigation-wrapper{
        background: #000000;
    }
}
</style>

