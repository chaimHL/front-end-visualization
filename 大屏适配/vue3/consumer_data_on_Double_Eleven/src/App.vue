<template>
  <RouterView />
</template>

<script setup lang="ts">
import useScreenAdapt from '@/hooks/useScreenAdapt'

//屏幕适配
useScreenAdapt()
</script>

<style scoped></style>
