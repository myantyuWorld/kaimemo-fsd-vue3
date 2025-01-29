<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GET } from '@/shared/api'
import type { Kaimemo } from '@/shared/api'
import  KaimemoAddModal  from './KaimemoAddModal.vue'

const items = ref<Kaimemo[]>()
const isOpenModal = ref(false)

const onClickOpenAddItemModal = () => {
	isOpenModal.value = true
}

const onClickCloseAddItemModal = () => {
	isOpenModal.value = false
}

const onClickAddItem = async () => {
	console.log('onClickAddItem')
	// const { data, error } = await POST('/kaimemo', {})
	// if (error) {
	//   console.error(error)
	//   return
	// }
	// items.value = data
}

onMounted(async () => {
	// const { data, error } = await GET('/kaimemo', {})
	// if (error) {
	//   console.error(error)
	//   return
	// }
	// items.value = data
})
</script>

<template>
	<div>
		<div class="flex justify-center items-center m-4">
			<div class="bg-gray-100 rounded-lg shadow-lg">
				<h1 class="text-4xl font-bold">一覧</h1>
			</div>
		</div>
		<div>
			<ul class="space-y-4 mb-2">
				<li
					v-for="item in items"
					:key="item.id"
					class="bg-gradient-to-r from-green-400 to-blue-500 p-4 m-4 rounded-lg shadow-lg text-white"
				>
					<h2 class="text-2xl font-bold">{{ item.tag }}</h2>
					<p class="text-lg">{{ item.name }}</p>
					<p class="text-lg">{{ item.done ? 'Done' : 'Not Done' }}</p>
				</li>
			</ul>
		</div>
		<button
			class="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 flex items-center justify-center"
			style="width: 56px; height: 56px"
			@click="onClickOpenAddItemModal"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
				<path
					fill="none"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M16 25V7m-9 9h18"
				/>
			</svg>
		</button>

		<KaimemoAddModal
			:isOpenModal="isOpenModal"
			@handleClickCloseAddItemModal="onClickCloseAddItemModal"
			@handleClickAddItem="onClickAddItem"
			/>
		<!--  -->
	</div>
</template>
