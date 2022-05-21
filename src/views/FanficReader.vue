<template>
  <link
    rel="stylesheet"
    href="https://archiveofourown.org/stylesheets/skins/skin_873_archive_2_0/A.1_site_screen_.css.pagespeed.cf.-4pOWaAuXB.css"
  />
  <div id="workskin">
    <div class="preface group">
      <h2 class="title heading">{{ work.name }}</h2>
      <h3 class="byline heading">
        <a rel="author" href="#">{{
          work.author
        }}</a>
      </h3>

      <div class="summary module" role="complementary">
        <h3 class="heading">Summary:</h3>
        <blockquote class="userstuff">
          <p>
            {{ work.summary }}
          </p>
        </blockquote>
      </div>

      <div class="notes module" role="complementary">
        <h3 class="heading">Notes:</h3>

        <p class="jump">
          {{ work.notes }}
        </p>
      </div>
      <br /><br />
    </div>
    <div id="chapters" role="article">
      <!-- <h3 class="landmark heading" id="work">Work Text:</h3> -->
      <div class="userstuff">
        <p v-for="paragraph in work.paras">
          <span v-html="paragraph"></span>
        </p>
      </div>
      <!-- end cache -->
    </div>
  </div>
</template>

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
    work: {
      name: 'Of Harrowed Hearts',
      site: {
        name: 'Archive of Our Own',
        url: 'https://archiveofourown.org/',
      },
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ligula dui, feugiat id ullamcorper non, sodales id est. Aenean faucibus convallis nunc, semper volutpat enim finibus eget. Quisque sapien lacus, mattis porttitor euismod ac, viverra eu nulla. Suspendisse et tortor sagittis, dictum sem vitae, blandit lectus. Nunc dui mauris, consectetur.',
      kudos: 90900,
      author: 'idk',
      notes: 'none',
      paras: "",
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
  }),
});
</script>
