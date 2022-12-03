<template>
  <header>
    <div class="container-nav">
      <LogoHeaderComp />
      <NavbarHeaderComp v-for="(elem, index) in navbarData" :key='index' :singleData="elem" />
      <div class="cart-cont">
        <font-awesome-icon icon=" fa-cart-shopping" />
        <div class="cart-nmb">

          <span>0</span>

        </div>
      </div>

      <font-awesome-icon icon=" fa-circle-user" />
      <div class="right-nav">
        <input class="input-cust" type="text" placeholder="Search...">
        <font-awesome-icon class="magn-gl" icon=" fa-magnifying-glass" />
      </div>
    </div>

    <div class="container-jumbo">
      <div class="desc-cont">
        <h1>Complete your Dreams in JavaS Programming </h1>
        <p>Learn any coding program in distance and for a reasonable fee. You don't have to struggle
          alone, you,ve got
          our assistance and help.
        </p>
        <div class="jumbo-btn-icn">
          <span><font-awesome-icon class="dwl-icn" icon="fa-download" /></span>
          <button>Download free E-book</button>
        </div>
        <div class="full-right-jumbo">
          <font-awesome-icon class="sin-icn" icon="fa-ruler-combined" />
          <font-awesome-icon class="sin-icn" icon="fa-futbol" />
          <font-awesome-icon class="sin-icn" icon="fa-book" />
          <font-awesome-icon class="sin-icn" icon=" fa-cart-shopping" />
        </div>

      </div>
      <div class="img-jumbo">
        <img src="../../assets/images/home-5-hero-image.png" alt="">

      </div>
    </div>

  </header>
</template>

<script>
import LogoHeaderComp from '../header/LogoHeaderComp.vue'
import NavbarHeaderComp from '../header/NavbarHeaderComp.vue'
export default {
  name: 'HeaderComp',
  components: {
    LogoHeaderComp,
    NavbarHeaderComp
  },
  props: {
    navbarData: Array,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
header {
  background-color: #E9E6E3;
  background-image: url('../../assets/images/jumbo-overlay.svg');
  padding-top: 30px;
  position: relative;
}

.container-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;
}

.right-nav {
  position: relative;
  display: flex;
  align-items: center;



  .input-cust {
    height: 45px;
    padding: 20px;
    border-radius: 5px;
    border: 0;
  }

  .magn-gl {
    position: absolute;
    right: 0px;
    padding: 20px;
    color: #01afcB;
  }


}

.cart-cont {
  position: relative;
}

.cart-nmb {
  width: 16px;
  height: 16px;
  background-color: #01afcB;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  top: -10px;
  right: -10px;

  span {
    font-size: 0.7rem;
    color: white;
  }
}



.container-jumbo {
  display: flex;

  justify-content: space-between;
  align-items: center;
  width: 70%;
  margin: 0 auto;

  .full-right-jumbo {
    position: absolute;
    right: 0;
    top: 200px;
    display: flex;
    flex-direction: column;
    -webkit-box-shadow: 0px 0px 65px 39px #E7E7E7;
    -moz-box-shadow: 0px 0px 65px 39px #E7E7E7;
    -o-box-shadow: 0px 0px 65px 39px #E7E7E7;
    box-shadow: 0px 0px 10px 0px #E7E7E7;
    background-color: white;
    border-radius: 5px 0px 0px 5px;
    padding: 10px;


    .sin-icn {
      margin-bottom: 15px;
    }

  }

  .desc-cont {
    width: 50%;

    h1 {
      font-size: 3rem;
      margin-top: 30px;
    }

    p {
      margin-top: 30px;
      font-size: 1.3rem;
      line-height: 2rem;
      color: gray;
    }
  }

  .jumbo-btn-icn {
    margin-top: 30px;
    position: relative;
    display: flex;

    button {
      width: 200px;
      padding: 15px;
      border-radius: 5px;
      background-color: #01afcB;
      color: white;
      border: 0;
    }

    .dwl-icn {
      position: absolute;
      top: 15px;
      left: 10px;
      color: white;
    }
  }

  .img-jumbo {
    width: 50%;

    img {
      width: 100%;
      padding-top: 40px;
    }
  }
}
</style>
