<template>
  <div id="app">
    <navigation></navigation>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
export default {
    name: "App",
    components: { Navigation, Footer }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

*:focus {
    outline: none !important;
}

#app {
    overflow-x: hidden;
    font-family: "Open Sans", sans-serif;
}
a {
    /* color: white !important; */
    font-weight: 900;
}
p {
    color: #706f6e;
}
.section {
    height: 100vh;
    color: black;
    display: flex;
}
.big-header {
    color: white;
    font-size: 75px;
    font-weight: bolder;
    letter-spacing: 1px;
}
a:hover {
    color: #ad0000 !important;
}
.button--large {
    width: 180px;
    height: 50px;
    font-size: 1.5em;
}
.button--red {
    border: none;
    /* margin: 0 10px; */
    padding: 1px 10px;
    background: #ad0000;
    font-weight: 700;
    margin-right: 1em;
}
.button--red:hover {
    color: #ad0000;
    background: white;
}

.button--transparent {
    border: none;
    /* margin: 0 10px; */
    padding: 1px 10px;
    background: transparent;
    font-weight: 700;
    border: 1px solid white;
}
.button--transparent:hover {
    background: transparent;
    color: #ad0000;
}
.navbar-dark .navbar-nav .nav-link {
    color: white;
    letter-spacing: 1px;
    padding: 8px 16px 15px 0;
}
.navbar-light .navbar-nav .nav-link {
    color: white;
    background: transparent;
    /* background: black; */
    /* background: rgba($color: #000000, $alpha: 0.5); */
    /* background: rgba(0, 0, 0, 0.3); */
    padding: 1em;
}
.dropdown-menu {
    background: transparent;
    border: none;
}
.dropdown-menu a {
    color: white;
    text-align: right;
}
.dropdown-menu a:hover {
    background: transparent;
}
.dropdown-menu a:focus {
    background: transparent;
}
@media only screen and (max-width: 800px) {
    h1 {
        /* font-size: 2em !important; */
        /* font-size: 20px; */
    }
    .button--transparent {
        margin: 0;
    }
}
@media only screen and (max-width: 989px) {
    .section {
        height: auto;
    }
}
</style>
