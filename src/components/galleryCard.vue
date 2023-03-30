<template>
  <router-link :to="{ name: 'desc', params: { id: cat.id } }">
    <div class="card">
      <span>#wight {{ cat.id }}</span>
      <img :src="cat.url" alt="cat" width="125" height="125" />
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    cat: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.card {
  padding: 2rem;
  gap: 0.5rem;
  border: 1px gray solid;
  border-radius: 0.5rem;
  width: max-content;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
