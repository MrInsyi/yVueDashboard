<template>
  <div class="min-h-screen p-6 space-y-6">
    <!-- 🔹 Top Bar -->
    <TopBar />

    <!-- 🔹 Main Dashboard -->
    <div class="grid grid-cols-3 gap-6 mt-4">
      <!-- Left -->
      <div class="space-y-4">
        <KpiCard title="Environmental monitoring" />
        <KpiCard title="Equipment status" />
      </div>

      <!-- Center -->
      <div class="space-y-4">
        <StatusPanel title="Alarm monitoring" />
        <BarChart title="Productivity (24h)" />
      </div>

      <!-- Right -->
      <div class="space-y-4">
        <KpiCard title="Operating efficiency" />
        <KpiCard title="Energy consumption statistics" />
      </div>
    </div>

    <!-- 🔹 Bottom Chart -->
    <div class="mt-8">
      <LineChart title="Time trend analysis" />
    </div>
  </div>
</template>

<script setup>
import TopBar from "../components/TopBar.vue";
import KpiCard from "../components/KpiCard.vue";
import StatusPanel from "../components/StatusPanel.vue";
import BarChart from "../components/BarChart.vue";
import LineChart from "../components/LineChart.vue";

</script>
