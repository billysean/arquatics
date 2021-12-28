<template>
  <div class="bg-gradient-to-b from-gray-400 to-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
        <h2 class="text-2xl font-extrabold text-gray-900">Our Favourites</h2>

        <div
          class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6"
        >
          <div
            v-for="callout in callouts"
            :key="callout.name"
            class="group relative"
          >
            <div
              class="
                relative
                w-full
                h-80
                bg-white
                rounded-lg
                overflow-hidden
                group-hover:opacity-75
                sm:aspect-w-2 sm:aspect-h-1 sm:h-64
                lg:aspect-w-1 lg:aspect-h-1
              "
            >
              <img
                :src="callout.imageSrc"
                :alt="callout.imageAlt"
                class="w-full h-full object-center object-cover"
              />
            </div>
            <h3 class="mt-6 text-sm text-gray-500">
              <a :href="callout.href">
                <span class="absolute inset-0" />
                {{ callout.name }}
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">
              {{ callout.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import goldfish1 from '../assets/goldfish1.jpg'
import goldfish2 from '../assets/goldfish2.jpg'
import goldfish3 from '../assets/goldfish3.jpg'
const callouts = [
  {
    name: "Jumbo Jelly Head",
    description: "Red White",
    imageSrc: goldfish1,
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Oranda 3co",
    description: "Thailand",
    imageSrc: goldfish2,
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "BigHead",
    description: "Panda Thailand",
    imageSrc: goldfish3,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default {
  setup() {
    return {
      callouts,
    };
  },
};
</script>