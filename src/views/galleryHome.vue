<template>
  <div class="gallery">
    <galleryCard v-for="cat in cats" :cat="cat" :key="cat.id"></galleryCard>
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
};
</script>

<style>
.gallery {
  width: 70vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 10px;
}
</style>
