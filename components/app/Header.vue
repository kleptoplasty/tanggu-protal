<template>
  <header class="h-[66px] bg-white w-full fixed xl:relative z-[99999]">
    <nav>
      <div class="flex flex-row items-center justify-between w-full">
        <div class="flex flex-row items-center space-x-3 xl:space-x-6">
          <!-- LOGO -->
          <div class="flex flex-row items-center h-[66px] ml-4 xl:ml-12 xl:mr-44 space-x-3">
            <nuxt-img src="/img/LOGO.png" class="w-32 lg:w-64" alt="Logo" />
          </div>
          <!-- menu -->
          <ul class="hidden w-full duration-300 origin-top xl:space-x-10 xl:block">
            <li v-for="(route, index) in routes" :key="index" class="inline-block">
              <nuxt-link :to="route.to" activeClass="text-[#0d77ff] no-underline">
                {{ route.name }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <!-- login/register -->
        <div class="hidden space-x-3 mr-52 xl:block">
          <nuxt-link class="xl:px-6 hover:text-[#0d77ff]" to="/login">
            {{ Locale.Login.SignInFormTitle }}
          </nuxt-link>
          <nuxt-link class="xl:px-6 hover:text-[#0d77ff]" to="/register">
            {{ Locale.Login.SignUpFormTitle }}
          </nuxt-link>
          <!-- <div @click="changeLang('cn')">中文</div>
          <div @click="changeLang('en')">English</div> -->
        </div>
        <!-- mobile menu -->
        <div class="flex flex-row space-x-9 z-[999] last:mr-4 xl:hidden">
          <nuxt-img src="/img/icon_dl_n.png" class="w-7" alt="user" />
          <span @click="showMenu = !showMenu">
            <nuxt-img v-show="!showMenu" src="/img/icon_menu_n.png" class="w-7" alt="menu" />
            <nuxt-img v-show="showMenu" src="/img/icon_close_n.png" class="w-7" alt="close" />
          </span>
        </div>
      </div>
    </nav>
  </header>
  <!-- mobile menu -->
  <div
    v-show="showMenu"
    class="w-full h-full bg-white opacity-95 fixed top-[65px] backdrop-blur-md z-[9999]"
  >
    <ul>
      <li
        v-for="(route, index) in routes"
        :key="index"
        class="text-xl"
        @click="showMenu = !showMenu"
      >
        <span class="flex flex-row items-center justify-between p-4">
          <nuxt-link :to="route.to" activeClass="text-[#0d77ff] no-underline">
            {{ route.name }}
          </nuxt-link>
          <nuxt-img src="/img/icon_right_n.png" class="w-4" alt="right" />
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import Locale, { AllLangs, ALL_LANG_OPTIONS, getLang, changeLang } from '@/locales';

  const routes = computed(() => [
    { to: '/', name: Locale.Nav.Statistics },
    { to: '/solutions', name: Locale.Nav.Solutions },
    { to: '/cases', name: Locale.Nav.Cases },
    { to: '/support', name: Locale.Nav.Support },
    { to: '/about', name: Locale.Nav.About },
  ]);

  const showMenu = ref(false);
</script>
