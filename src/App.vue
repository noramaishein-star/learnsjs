<script setup>
import { ref } from 'vue'; 
import Tab from './components/Tab.vue';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';

let activeTab = ref(0);
let titles = ref(['ToDo', 'Modals']);
let contents = ref([
    ToDo,
    Modals,
]);

function setTab(index){
  activeTab.value = index;
}
</script>

<template>
    <Tab :active="activeTab" :titles="titles" @change="setTab"></Tab>
    <component :is="contents[activeTab]"></component>
</template>