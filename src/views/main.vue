<template>
  <div class="main">
    <Navbar></Navbar>
    <section class="wrapper flex">
  		<Asidebar></Asidebar>
      <transition name="fade">
        <Viewmain></Viewmain>
      </transition>
    </section>
    <FooterMain></FooterMain>
  </div>
</template>

<script>
import Navbar from "@/components/public/Navbar";
import Asidebar from "@/components/public/Aside";
import Viewmain from "@/components/public/ViewMain";
import FooterMain from '@/components/public/Footbar';

export default {
  name: "Main",
  components: {
    Navbar,
    Asidebar,
    Viewmain,
    FooterMain
  }
};
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 15px;
    background-color: white;

    .aside {
      flex: 0 0 200px;
    }
    .viewmain {
      flex: 1;
      padding: 15px;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>
