<template>
  <div class="bg-[#031739] p-4 rounded-2xl shadow-lg border border-blue-800">
    <h2 class="text-lg font-semibold text-[#00baff] mb-2">{{ title }}</h2>
    <div ref="chartRef" class="w-full h-60"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import * as echarts from "echarts";
defineProps(["title"]);
const chartRef = ref(null);

onMounted(() => {
  const chart = echarts.init(chartRef.value);
  chart.setOption({
    xAxis: { type: "category", data: ["Mon", "Tue", "Wed", "Thu", "Fri"] },
    yAxis: { type: "value" },
    series: [
      {
        data: [40, 80, 70, 90, 110],
        type: "bar",
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#00baff" },
            { offset: 1, color: "#021027" },
          ]),
        },
      },
    ],
    backgroundColor: "transparent",
  });
});
</script>
