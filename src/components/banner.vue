<template>
  <div class="bg-white sm:mt-12 md:mt-32 lg:mt-0">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl">
      <div class="relative rounded-lg overflow-hidden lg:h-96">
        <div class="absolute inset-0">
          <img
            src="../assets/collections.jpg"
            alt=""
            class="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" class="relative w-full h-96 lg:hidden" />
        <div aria-hidden="true" class="relative w-full h-32 lg:hidden" />
        <div
          class="
            absolute
            inset-x-0
            bottom-0
            bg-black bg-opacity-75
            p-6
            rounded-bl-lg rounded-br-lg
            backdrop-filter backdrop-blur
            sm:flex sm:items-center sm:justify-between
            lg:inset-y-0
            lg:inset-x-auto
            lg:w-96
            lg:rounded-tl-lg
            lg:rounded-br-none
            lg:flex-col
            lg:items-start
          "
        >
          <div>
            <h2 class="text-xl font-bold text-white">
              Arquatics Special Collection
            </h2>
            <p class="mt-1 text-sm text-gray-300">
              Upgrade your aquatic collection with Special and Limited
              Collection of goldfishes from Arquatics.
            </p>
          </div>
          <a
            href="collection"
            class="
              mt-6
              flex-shrink-0 flex
              bg-white bg-opacity-0
              py-3
              px-4
              border border-white border-opacity-25
              rounded-md
              items-center
              justify-center
              text-base
              font-medium
              text-white
              hover:bg-opacity-10
              sm:mt-0 sm:ml-8
              lg:ml-0 lg:w-full
            "
            >View collection</a
          >
        </div>
      </div>
    </div>
  </div>
</template>