<template>
  <section class="footer container-fluid">
    <div class="footer__content container">
      <div class="row">
        <div class="col-md-6 footer__content__description">
          <img src="../assets/img/logo.png" width="200" alt>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Earum suscipit qui aut! Ea, corrupti facere voluptas
            quasi dicta voluptates
            consequuntur quos
            voluptate reiciendis vel error
            necessitatibus aperiam excepturi
            distinctio? Nisi, vel aspernatur.
          </p>
          <div class="social-icons-wrapper">
            <a href>
              <img src="../assets/img/twitter.png" alt>
            </a>
            <a href>
              <img src="../assets/img/facebook.png" alt>
            </a>
            <a href>
              <img src="../assets/img/instagram.png" alt>
            </a>
          </div>
        </div>

        <div class="footer__content__useful-links col-md-3">
          <h2>Useful links</h2>
          <ul>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
            <li>Return Policy</li>
            <li>
              <img width="62" src="../assets/img/credit-card.jpg" alt>
            </li>
          </ul>
        </div>
        <div class="footer__content__useful-links col-md-3">
          <h2>Contact Us</h2>
          <ul>
            <li>City City</li>
            <li>Street address</li>
            <li>3030 SH City</li>
            <li>Company country</li>
            <li>+333 12345 654</li>
            <li>+333 12345 654</li>
            <li>VAT:Company info</li>
          </ul>
        </div>
      </div>
    </div>
    <p class="copyrights-text text-center">
      &copy;cvExpress 2018.
      <span
        class="text-uppercase"
      >company name all rights reserved &copy;:company_name 2018.:company_name all rights reserved</span>
    </p>
  </section>
</template>


<script>
export default {
    name: "footerCustom"
};
</script>

<style lang="scss" scoped>
.footer{
  padding: 2em 2em;
  padding-bottom: 1em;
    // height: 20vh;
    width: 100%;
    background: #222222;
}
.footer__content{
  border-bottom: 1px solid white;
  ul{
    list-style-type: none;
    padding: 0;
    font-size: 15px;
    li{margin: 1em 0}
  }
  p{
    margin-top: 2em;
    font-size: 15px;
    color: white;

  }
    color: white;
  padding: 2em 0;

  .social-icons-wrapper{
    img{
      margin-right: 1em;
    }
  }
}
.copyrights-text{
  color: white;
  font-size: 14px;
  padding-top: 20px ;
}
</style>
