<script setup lang="ts">
import { useInteraction } from '../hooks/useInteraction'
import { BaseModal, TheForm, PrimaryButton, SecondaryButton, PlusButton } from '@/shared/ui'
import KaimemoItem from './KaimemoItem.vue'
import TagFilter from './TagFilter.vue'

const {
  isOpenModal,
  errors,
  selectedFilters,
  filteredItems,
  loading,
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
    <!-- TODO : Layoutを導入して、ヘッダーを共通的に設定すること -->
    <div class="justify-center sticky top-0">
      <div class="bg-gray-100 rounded-lg shadow-lg p-4 flex items-center justify-between">
        <h1 class="text-4xl font-bold">Kaimemo!!</h1>
        <router-link to="/summary" class="text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M3 3v18h18" />
            <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
          </svg>
        </router-link>
      </div>
    </div>

    <TagFilter v-model="selectedFilters" />

    <div class="m-2">
      <template v-if="loading"> データ取得中、、、 </template>
      <template v-else-if="filteredItems?.length === 0"> データがありません。 </template>
      <div v-else>
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
    </div>

    <PlusButton @click="onClickOpenAddItemModal" />

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
