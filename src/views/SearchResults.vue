<template>
  <main>
    <div id="app" v-if="this.dataObj">
      <ul role="list" v-for="item in this.dataObj">
        <li>
          <a href="#" class="block hover:bg-gray-50">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <div class="text-m font-medium text-indigo-600 truncate">
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
                  <div class="mr-6 flex items-center text-sm text-gray-500">
                    <svg
                      class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
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
    <div v-else="this.dataObj">No Results</div>
  </main>
</template>
<script>
import { defineComponent } from 'vue';

export default {
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
    dataObj: {},
  }),
  props: ['dataObj'],
};
</script>
