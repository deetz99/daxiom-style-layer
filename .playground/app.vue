<script setup lang="ts">
const { myLayer } = useAppConfig();
</script>
<template>
  test overwritten
  <pre> {{ myLayer }}</pre>
  <!-- <img src="/logos/gov_bc_logo_horiz.png" /> -->
  <img src="BCGovLogoSmall" />
  <img src="BCGovLogoLarge" />
</template>
