<template>
    <nav class="bg-white drop-shadow-md " style="font-family: 'filson-pro', sans-serif;">
        <div class="max-w-screen-xl flex flex-wrap justify-between mx-20 p-4">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://loop.org.uk/wp-content/themes/loop/images/Loop_logo_blue_with_tag.svg" width="170"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black mx-8" style="color: #1f2d42; font-weight: 1000">Dashboard</span>
            </a>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'navBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
