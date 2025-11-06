<template>
  <div class="bg-[#031739] p-4 rounded-2xl shadow-lg border border-blue-800 mt-4">
    <h2 class="text-lg font-semibold text-[#00baff] mb-2">{{ title }}</h2>
    <div ref="chartRef" class="w-full h-64"></div>
  </div>
  <div class="footer-bar"></div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
defineProps(["title"]);
const chartRef = ref(null);

onMounted(() => {
  const chart = echarts.init(chartRef.value);
  chart.setOption({
    xAxis: { type: "category", data: Array.from({ length: 24 }, (_, i) => i) },
    yAxis: { type: "value" },
    series: [
      {
        data: Array.from({ length: 24 }, () => Math.floor(Math.random() * 100)),
        type: "line",
        smooth: true,
        lineStyle: { color: "#00baff" },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#00baff77" },
            { offset: 1, color: "#02102700" },
          ]),
        },
      },
    ],
    backgroundColor: "transparent",
  });
});
</script>
