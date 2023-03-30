<template>
  <div class="desc">
    <span># {{ cat?.id }}</span>
    <img
      v-if="cat != null"
      calss="image"
      :src="cat?.url"
      alt="cat"
      :width="cat?.width"
      :height="cat?.height"
    />
  </div>
</template>

<script>
import catService from "@/services/catService";
export default {
  props: ["id"],
  created() {
    catService.getOneCat(this.id).then((res) => (this.cat = res));
  },
  data() {
    return {
      cat: null,
    };
  },
};
</script>

<style>
.desc {
  width: 70vh;
  margin: auto;
  border: 1px solid #000;
  padding: 0.5rem;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

img {
  max-width: 70vh;
}
</style>
