<script setup lang="ts">
import { useInteraction } from '../hooks/useInteraction'
import { BaseModal, TheForm, PrimaryButton, SecondaryButton } from '@/shared/ui'
import KaimemoItem from './KaimemoItem.vue'
import TagFilter from './TagFilter.vue'

const {
  isOpenModal,
  errors,
  selectedFilters,
  filteredItems,
  defineField,
  onClickOpenAddItemModal,
  onClickCloseAddItemModal,
  onClickAddItem,
  onClickArchiveItem,
} = useInteraction()


const [name, nameProps] = defineField('name')
const [tag, tagProps] = defineField('tag')

</script>

<template>
  <div>
    <div class="justify-center">
      <div class="bg-gray-100 rounded-lg shadow-lg p-4">
        <h1 class="text-4xl font-bold">Kaimemo!!</h1>
      </div>
    </div>

    <TagFilter v-model="selectedFilters" />

    <div class="m-2">
      <template v-for="item in filteredItems" :key="item.id">
        <KaimemoItem
          :id="item.id"
          :tag="item.tag"
          :name="item.name"
          :done="item.done"
          @handleDoneItem="onClickArchiveItem"
        ></KaimemoItem>
      </template>
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

    <!-- 買い物追加モーダル -->
    <BaseModal title="アイテム追加" :isOpen="isOpenModal" @closeModal="onClickCloseAddItemModal">
      <template #modalBody>
        <TheForm label="品名">
          <input
            type="text"
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            :class="{ 'bg-red-50 border-red-500': errors.name }"
            v-model="name"
            v-bind="nameProps"
          />
          <p class="mt-2 text-sm text-red-600 dark:text-red-500">{{ errors.name }}</p>
        </TheForm>
        <TheForm label="カテゴリ">
          <select
            class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
            :class="{ 'bg-red-50 border-red-500': errors.tag }"
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
