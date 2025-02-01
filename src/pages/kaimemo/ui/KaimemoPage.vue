<script setup lang="ts">
import { useInteraction } from '../hooks/useInteraction'
import { BaseModal, TheForm, PrimaryButton, SecondaryButton } from '@/shared/ui'

const {
  items,
  isOpenModal,
  errors,
  defineField,
  onClickOpenAddItemModal,
  onClickCloseAddItemModal,
  onClickAddItem
} = useInteraction()

const [name, nameProps] = defineField('name')
const [tag, tagProps] = defineField('tag')
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

    <BaseModal
      title="アイテム追加"
      :isOpen="isOpenModal"
      @closeModal="onClickCloseAddItemModal"
    >
      <template #modalBody>
        <TheForm label="品名" >
          <input
            type="text"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            :class="{'bg-red-50 border-red-500' : errors.name}"
            v-model="name"
            v-bind="nameProps"
          />
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.name }}</p>
        </TheForm>
        <TheForm label="カテゴリ" >
          <select
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            :class="{'bg-red-50 border-red-500' : errors.tag}"
            v-model="tag"
            v-bind="tagProps"
          >
            <option value="食費">食費</option>
            <option value="日用品">日用品</option>
          </select>
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.tag }}</p>
        </TheForm>
      </template>

      <template #buttons>
        <SecondaryButton @click="onClickCloseAddItemModal"> 閉じる </SecondaryButton>
        <PrimaryButton @click="onClickAddItem"> 追加 </PrimaryButton>
      </template>
    </BaseModal>
    <!--  -->
  </div>
</template>
