<template>
  <div class="neon-panel p-5">
    <h2 class="text-xl font-semibold text-glow-blue mb-3">{{ title }}</h2>
    <div class="grid grid-cols-6 gap-3 text-center">
      <div
        v-for="(item, i) in indicators"
        :key="i"
        class="flex flex-col items-center"
      >
        <div :class="item.active ? 'bg-red-500 glow-dot' : 'bg-green-400 glow-dot opacity-60'"></div>
        <span class="text-xs text-gray-300 mt-1">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>