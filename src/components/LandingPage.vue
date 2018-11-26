<template>
  <div>
    <hero></hero>
    <section-two></section-two>
    <section-three></section-three>
    <section-four></section-four>
    <testemonials></testemonials>
  </div>
</template>
<script>
import Hero from "@/components/Hero";
import SectionTwo from "@/components/SectionTwo";
import SectionThree from "@/components/SectionThree";
import SectionFour from "@/components/SectionFour";
import Testemonials from "@/components/Testemonials";
import Footer from "@/components/Footer";

export default {
    name: "LandingPage",
    components: {
        Hero,
        SectionTwo,
        SectionThree,
        SectionFour,
        Testemonials,
        Footer,
    }
};
</script>
