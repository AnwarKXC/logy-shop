<script setup>
import Map from '~/components/icons/Map.vue'
import Clock from '~/components/icons/Clock.vue'


const props = defineProps({
  saved: Boolean,
})

</script>

<template>
  <div
    class="md:px-5 px-2 py-5 rounded-lg border border-gray-200 dark:border-transparent flex dark:bg-[#2A2728] items-start flex-col">
    <div class="flex items-center w-full justify-center flex-wrap gap-1">
      <div class="flex items-center gap-2">
        <div
          class="px-6 py-2 whitespace-nowrap rounded-full bg-deepSapphire/10 dark:bg-deepSapphire dark:text-white text-[14px] text-[#C0272D] font-bold">
          Construction Service
        </div>


      </div>
      <div class="flex items-center gap-2 justify-between flex-grow">
        <div
          class="px-6 py-2 whitespace-nowrap rounded-full bg-[#F2F2F2] dark:bg-[#1E1A1B] dark:text-white md:w-inherit w-[95px] text-[14px] text-[#231F20] font-bold">
          5 Years
        </div>  <div
        class="h-10 w-10 flex items-center justify-center border border-gray-100 dark:border-transparent rounded-full dark:bg-[#302C2D]">
        <svg xmlns="http://www.w3.org/2000/svg" :fill="saved ? '#EC1C24' : 'none'"
          viewBox="0 0 24 24" stroke-width="1.5" :stroke="saved ? '#EC1C24' : 'currentColor'"
          class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </div>
      </div>
    
    </div>

    <div class="py-6 pb-8 flex border-b flex-start flex-col px-1 gap-3">
      <h1 class="text-[20px] font-bold text-dark dark:text-white">
        Procurement Manager
      </h1>
      <p class="text-sm font-normal text-[#7F7F7F] dark:text-[#A6A6A6]">
        Use appropriate strategies to purchase the company’s needs at reasonable
        prices
      </p>
      <p class="flex items-center gap-2">
        <Map />
        <span class="text-[14px] font-normal dark:text-white text-[#404041]">
          Saudi Arabia</span>
      </p>
      <div class="flex items-center gap-3">
        <p class="flex items-center gap-2">
          <Clock />
          <span class="text-[14px] font-normal dark:text-white text-[#404041]">
            2021-12-20</span>
        </p>
        <p class="flex items-center gap-2">
          <Clock />
          <span class="text-[14px] font-normal dark:text-white text-[#404041]">
            2021-12-23</span>
        </p>
      </div>
    </div>

    <button
      class="w-full mt-8 py-3 rounded-lg border dark:border-[#404041] dark:text-white dark:bg-[#2A2728] border-gray-200 font-bold text-[14px] text-black">
      Apply Now
    </button>
  </div>
</template>
