<template>
  <div>
    <p class="cursor">
      Total Items
      <span style="float:right;color:red;">
        <i class="fa fa-trash "></i>
        <strong>&nbsp;Remove &nbsp;All</strong> </span
      >&nbsp;
    </p>
  </div>
</template>

<script>
export default {
  name: "TotalGoodsComponent",
};
</script>

<style scoped>
.cursor {
  cursor: pointer;
}
</style>
