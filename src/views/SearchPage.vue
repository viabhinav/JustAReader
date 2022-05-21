<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog
          as="div"
          class="relative z-40 lg:hidden"
          @close="mobileFiltersOpen = false"
        >
          <TransitionChild
            as="template"
            enter="transition-opacity ease-linear duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 flex z-40">
            <TransitionChild
              as="template"
              enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <DialogPanel
                class="
                  ml-auto
                  relative
                  max-w-xs
                  w-full
                  h-full
                  bg-white
                  shadow-xl
                  py-4
                  pb-12
                  flex flex-col
                  overflow-y-auto
                "
              >
                <div class="px-4 flex items-center justify-between">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    class="
                      -mr-2
                      w-10
                      h-10
                      bg-white
                      p-2
                      rounded-md
                      flex
                      items-center
                      justify-center
                      text-gray-400
                    "
                    @click="mobileFiltersOpen = false"
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-4 border-t border-gray-200">
                  <h3 class="sr-only">Categories</h3>
                  <ul role="list" class="font-medium text-gray-900 px-2 py-3">
                    <li v-for="category in subCategories" :key="category.name">
                      <a :href="category.href" class="block px-2 py-3">
                        {{ category.name }}
                      </a>
                    </li>
                  </ul>

                  <Disclosure
                    as="div"
                    v-for="section in filters"
                    :key="section.id"
                    class="border-t border-gray-200 px-4 py-6"
                    v-slot="{ open }"
                  >
                    <h3 class="-mx-2 -my-3 flow-root">
                      <DisclosureButton
                        class="
                          px-2
                          py-3
                          bg-white
                          w-full
                          flex
                          items-center
                          justify-between
                          text-gray-400
                          hover:text-gray-500
                        "
                      >
                        <span class="font-medium text-gray-900">
                          {{ section.name }}
                        </span>
                        <span class="ml-6 flex items-center">
                          <PlusSmIcon
                            v-if="!open"
                            class="h-5 w-5"
                            aria-hidden="true"
                          />
                          <MinusSmIcon
                            v-else
                            class="h-5 w-5"
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel class="pt-6">
                      <div class="space-y-6">
                        <div
                          v-for="(option, optionIdx) in section.options"
                          :key="option.value"
                          class="flex items-center"
                        >
                          <input
                            :id="`filter-mobile-${section.id}-${optionIdx}`"
                            :name="`${section.id}[]`"
                            :value="option.value"
                            type="checkbox"
                            :checked="option.checked"
                            class="
                              h-4
                              w-4
                              border-gray-300
                              rounded
                              text-indigo-600
                              focus:ring-indigo-500
                            "
                          />
                          <label
                            :for="`filter-mobile-${section.id}-${optionIdx}`"
                            class="ml-3 min-w-0 flex-1 text-gray-500"
                          >
                            {{ option.label }}
                          </label>
                        </div>
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="
            relative
            z-10
            flex
            items-baseline
            justify-between
            pt-24
            pb-6
            border-b border-gray-200
          "
        >
          <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
            Search Fanfiction
          </h1>

          <div class="flex items-center">
            <Menu as="div" class="relative inline-block text-left">
              <div>
                <MenuButton
                  class="
                    group
                    inline-flex
                    justify-center
                    text-sm
                    font-medium
                    text-gray-700
                    hover:text-gray-900
                  "
                >
                  Sort
                  <ChevronDownIcon
                    class="
                      flex-shrink-0
                      -mr-1
                      ml-1
                      h-5
                      w-5
                      text-gray-400
                      group-hover:text-gray-500
                    "
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="
                    origin-top-right
                    absolute
                    right-0
                    mt-2
                    w-40
                    rounded-md
                    shadow-2xl
                    bg-white
                    ring-1 ring-black ring-opacity-5
                    focus:outline-none
                  "
                >
                  <div class="py-1">
                    <MenuItem
                      v-for="option in sortOptions"
                      :key="option.name"
                      v-slot="{ active }"
                    >
                      <a
                        :href="option.href"
                        :class="[
                          option.current
                            ? 'font-medium text-gray-900'
                            : 'text-gray-500',
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm',
                        ]"
                      >
                        {{ option.name }}
                      </a>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>

            <button
              type="button"
              class="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
            >
              <span class="sr-only">View grid</span>
              <ViewGridIcon class="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              class="
                p-2
                -m-2
                ml-4
                sm:ml-6
                text-gray-400
                hover:text-gray-500
                lg:hidden
              "
              @click="mobileFiltersOpen = true"
            >
              <span class="sr-only">Filters</span>
              <FilterIcon class="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <section aria-labelledby="products-heading" class="pt-6 pb-24">
          <h2 id="products-heading" class="sr-only">Products</h2>

          <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
            <!-- Filters -->
            <form class="hidden lg:block">
              <!-- <h3 class="sr-only">Categories</h3>
              <ul
                role="list"
                class="
                  text-sm
                  font-medium
                  text-gray-900
                  space-y-4
                  pb-6
                  border-b border-gray-200
                "
              >
                <li v-for="category in subCategories" :key="category.name">
                  <a :href="category.href">
                    {{ category.name }}
                  </a>
                </li>
              </ul> -->

              <Disclosure
                as="div"
                v-for="section in filters"
                :key="section.id"
                class="border-b border-gray-200 py-6"
                v-slot="{ open }"
              >
                <h3 class="-my-3 flow-root">
                  <DisclosureButton
                    class="
                      py-3
                      bg-white
                      w-full
                      flex
                      items-center
                      justify-between
                      text-sm text-gray-400
                      hover:text-gray-500
                    "
                  >
                    <span class="font-medium text-gray-900">
                      {{ section.name }}
                    </span>
                    <span class="ml-6 flex items-center">
                      <PlusSmIcon
                        v-if="!open"
                        class="h-5 w-5"
                        aria-hidden="true"
                      />
                      <MinusSmIcon v-else class="h-5 w-5" aria-hidden="true" />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel class="pt-6">
                  <div class="space-y-4">
                    <div
                      v-for="(option, optionIdx) in section.options"
                      :key="option.value"
                      class="flex items-center"
                    >
                      <input
                        :id="`filter-${section.id}-${optionIdx}`"
                        :name="`${section.id}[]`"
                        :value="option.value"
                        type="checkbox"
                        :checked="option.checked"
                        class="
                          h-4
                          w-4
                          border-gray-300
                          rounded
                          text-indigo-600
                          focus:ring-indigo-500
                        "
                      />
                      <label
                        :for="`filter-${section.id}-${optionIdx}`"
                        class="ml-3 text-sm text-gray-600"
                      >
                        {{ option.label }}
                      </label>
                    </div>
                  </div>
                </DisclosurePanel>
              </Disclosure>
            </form>

            <!-- Product grid -->
            <div class="lg:col-span-3">
              <!-- Replace with your content -->
              <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                  <div
                    class="
                      input-group
                      relative
                      flex flex-wrap
                      items-stretch
                      w-full
                      mb-4
                    "
                  >
                    <input
                      type="search"
                      class="
                        form-control
                        relative
                        flex-auto
                        min-w-0
                        block
                        w-full
                        px-3
                        py-1.5
                        text-base
                        font-normal
                        text-gray-700
                        bg-white bg-clip-padding
                        border border-solid border-gray-300
                        rounded
                        transition
                        ease-in-out
                        m-0
                        focus:text-gray-700
                        focus:bg-white
                        focus:border-blue-600
                        focus:outline-none
                      "
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="button-addon2"
                    />
                    <button
                      class="
                        btn
                        inline-block
                        px-6
                        py-2.5
                        bg-blue-600
                        text-white
                        font-medium
                        text-xs
                        leading-tight
                        uppercase
                        rounded
                        shadow-md
                        hover:bg-blue-700 hover:shadow-lg
                        focus:bg-blue-700
                        focus:shadow-lg
                        focus:outline-none
                        focus:ring-0
                        active:bg-blue-800 active:shadow-lg
                        transition
                        duration-150
                        ease-in-out
                        flex
                        items-center
                      "
                      type="button"
                      id="button-addon2"
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="search"
                        class="w-4"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div id="app">
                <ul role="list" v-for="item in objectItems">
                  <li>
                    <a href="#" class="block hover:bg-gray-50">
                      <div class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                          <div
                            class="text-m font-medium text-indigo-600 truncate"
                          >
                            {{ item.name }}

                            <span
                              style="color: black"
                              class="
                                px-2
                                text-xs
                                leading-5
                                font-semibold
                                rounded-full
                                bg-white-100
                                text-black-800
                              "
                            >
                              By {{ item.author }}
                            </span>
                          </div>
                          <a v-bind:href="item.site.url"
                            ><div class="ml-2 flex-shrink-0 flex">
                              <span
                                class="
                                  px-2
                                  inline-flex
                                  text-xs
                                  leading-5
                                  font-semibold
                                  rounded-full
                                  bg-green-100
                                  text-green-800
                                "
                              >
                                {{ item.site.name }}
                              </span>
                            </div></a
                          >
                        </div>
                        <br />
                        <p style="font-size: 12px">{{ item.summary }}</p>
                        <div class="mt-2 flex justify-between">
                          <div class="sm:flex">
                            <div
                              class="
                                mr-6
                                flex
                                items-center
                                text-sm text-gray-500
                              "
                            >
                              <svg
                                class="
                                  flex-shrink-0
                                  mr-1.5
                                  h-5
                                  w-5
                                  text-gray-400
                                "
                                x-description="Heroicon name: solid/users"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                                ></path>
                              </svg>
                              {{ item.kudos }}
                            </div>
                          </div>
                          <div class="flex items-center text-sm text-gray-500">
                            <!-- <svg
                    class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    x-description="Heroicon name: solid/location-marker"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>   -->
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- /End replace -->
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { XIcon } from '@heroicons/vue/outline';
import {
  ChevronDownIcon,
  FilterIcon,
  MinusSmIcon,
  PlusSmIcon,
  ViewGridIcon,
} from '@heroicons/vue/solid';

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
];
// const subCategories = [
//   { name: 'Fanfiction.net', href: '#' },
//   { name: 'Archive of Our Own', href: '#' },
//   { name: 'Ficwad', href: '#' },
//   { name: 'Wattpad', href: '#' },
//   // { name: 'Laptop Sleeves', href: '#' },
// ];
const filters = [
  {
    id: 'genre',
    name: 'Website',
    options: [
      { value: 'ao3', label: 'Archive of Our Own', checked: false },
      { value: 'ffnet', label: 'Fanfiction.net', checked: false },
      { value: 'wattpad', label: 'Wattpad', checked: false },
      // { value: 'brown', label: 'Brown', checked: false },
      // { value: 'green', label: 'Green', checked: false },
      // { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'read',
    name: 'Read status',
    options: [
      { value: 'complete', label: 'Completed by you', checked: false },
      { value: 'incomplete', label: 'Incomplete by you', checked: false },
      { value: 'unread', label: 'Unread', checked: true },
      // { value: 'organization', label: 'Organization', checked: false },
      // { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
];

const mobileFiltersOpen = ref(false);
</script>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    showMenu: false,
    showProfileMenu: false,
    links: [
      { text: 'Home', to: '/' },
      { text: 'About', to: '/about' },
    ],
    objectItems: {
      key1: {
        name: 'Of Harrowed Hearts',
        site: {
          name: 'Archive of Our Own',
          url: 'https://archiveofourown.org/',
        },
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula dui, feugiat id ullamcorper non, sodales id est. Aenean faucibus convallis nunc, semper volutpat enim finibus eget. Quisque sapien lacus, mattis porttitor euismod ac, viverra eu nulla. Suspendisse et tortor sagittis, dictum sem vitae, blandit lectus. Nunc dui mauris, consectetur.',
        kudos: 90900,
        author: 'idk',
      },
      key2: {
        name: "Jinchurriki's Brother",
        site: {
          name: 'FanFiction.Net',
          url: 'https://fanfiction.net/',
        },
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula dui, feugiat id ullamcorper non, sodales id est. Aenean faucibus convallis nunc, semper volutpat enim finibus eget. Quisque sapien lacus, mattis porttitor euismod ac, viverra eu nulla. Suspendisse et tortor sagittis, dictum sem vitae, blandit lectus. Nunc dui mauris, consectetur.',
        kudos: 1232,
        author: 'gogos14',
      },
      key3: {
        name: 'Naruto the Hishigan User',
        site: {
          name: 'FanFiction.Net',
          url: 'https://fanfiction.net/',
        },
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula dui, feugiat id ullamcorper non, sodales id est. Aenean faucibus convallis nunc, semper volutpat enim finibus eget. Quisque sapien lacus, mattis porttitor euismod ac, viverra eu nulla. Suspendisse et tortor sagittis, dictum sem vitae, blandit lectus. Nunc dui mauris, consectetur.',
        kudos: 232,
        author: 'gogos14',
      },
    },
  }),
});
</script>
