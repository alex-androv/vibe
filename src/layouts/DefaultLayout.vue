<template>
    <header-logo/>
    <navigation-bar/>
    <div class="px-4 mt-10 mb-20 sm:px-8 md:px-20 2xl:px-28">
        <router-view />
    </div>
    <footer-contacts/>
</template>

<script>
import HeaderLogo from '@/components/HeaderLogo'
import NavigationBar from '@/components/NavigationBar'
import FooterContacts from '@/components/FooterContacts'
export default {
  components: {
    HeaderLogo, NavigationBar, FooterContacts
  }
}
</script>