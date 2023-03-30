<template>
  <div class="gallery-cont" @scroll="onGalleryScroll" ref="cont">
    <div class="gallery">
      <galleryCard
        v-for="(cat, index) in cats"
        :cat="cat"
        :key="cat.id + index"
      ></galleryCard>
    </div>
    <span> Loading ...</span>
  </div>
</template>

<script>
import catService from "@/services/catService";
import galleryCard from "@/components/galleryCard.vue";
export default {
  created() {
    catService.getCart().then((res) => (this.cats = res));
  },
  components: {
    galleryCard,
  },
  data() {
    return {
      cats: [],
    };
  },
  methods: {
    onGalleryScroll() {
      console.log(
        this.$refs.cont.scrollTop + this.$refs.cont.clientHeight,
        " ",
        this.$refs.cont.scrollHeight
      );
      if (
        Math.round(this.$refs.cont.scrollTop + this.$refs.cont.clientHeight) >=
        this.$refs.cont.scrollHeight
      ) {
        catService.getCart().then((res) => (this.cats = this.cats.concat(res)));
        console.log("hello");
      }
    },
  },
};
</script>

<style>
.gallery-cont {
  height: 80vh;
  overflow-y: auto;
}
.gallery {
  width: 70vw;
  margin: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 10px;
}
</style>
