<template>
  <div class="hero">
    <!-- <navigation></navigation> -->
    <div class="hero__content container">
      <b-btn class="button--red mb-5 button--cv-builder">Easy to use CV builder</b-btn>
      <h1 class="big-header">Your CV speaks for you.</h1>
      <h1 class="big-header">Make it speak highly.</h1>
      <p
        class="mt-5"
      >Build an efficient CV an make it stand out from the mass. cvExpress offers such CVs that will catch regruter's attention in that short application reviewing time of 10 seconds</p>
      <b-btn class="button--large button--red">Try Demo</b-btn>
      <b-btn class="button--large button--transparent button--sign-up">Sign Up</b-btn>
    </div>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
export default {
    name: "hero",
    components: { Navigation }
};
</script>

<style scoped>
p {
    color: white;
}

.hero {
    display: flex;
    flex-direction: column;
    height: 81vh;
    height: 100vh;
    background: url("../assets/img/hero-background.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-bottom: 2em;
}

.hero__content {
    margin: auto;
    transform: translateY(100px);
}
.button--cv-builder {
    font-size: 20px;
}
@media only screen and (max-width: 425px) {
    p {
        /* font-size: 0.8em; */
    }
    .hero {
        background: black;
        /* height: auto; */
    }
    .hero__content {
        /* margin: 0 !important; */
    }
    .button--sign-up {
        margin-top: 1em;
    }
}
@media only screen and (max-width: 425px) {
    .big-header {
        font-size: 40px;
    }
}
@media only screen and (min-width: 426px) and (max-width: 768px) {
    .hero__content {
        /* margin: 0; */
        /* margin-top: 100px; */
        /* transform: translateY(229px); */
    }
    .hero {
        background-position: -700px 40px;
    }
    .big-header {
        font-size: 58px;
    }
}
</style>
