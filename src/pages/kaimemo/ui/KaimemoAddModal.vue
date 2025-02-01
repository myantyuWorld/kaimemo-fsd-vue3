<script setup lang="ts">
import { BaseModal, TheForm, PrimaryButton, SecondaryButton } from '@/shared/ui'

defineProps<{
  isOpenModal: boolean
}>()

defineEmits<{
  handleClickCloseAddItemModal: []
  handleClickAddItem: []
}>()
</script>

<template>
  <BaseModal
    title="アイテム追加"
    :isOpen="isOpenModal"
    @closeModal="$emit('handleClickCloseAddItemModal')"
  >
    <template #modalBody>
      <TheForm label="品名">
        <input
          type="text"
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
        />
      </TheForm>
      <TheForm label="カテゴリ">
        <select
          class="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
        >
          <option value="食費">食費</option>
          <option value="日用品">日用品</option>
        </select>
      </TheForm>
    </template>

    <template #buttons>
      <SecondaryButton @click="$emit('handleClickCloseAddItemModal')"> 閉じる </SecondaryButton>
      <PrimaryButton @click="$emit('handleClickAddItem')"> 追加 </PrimaryButton>
    </template>
  </BaseModal>
</template>
