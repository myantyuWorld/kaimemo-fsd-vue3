import { DELETE, GET, POST, type Kaimemo } from '@/shared/api'
import { useForm } from 'vee-validate'
import { onMounted, ref } from 'vue'
import { type KaimemoSchema, schema } from '../types'
import { toTypedSchema } from '@vee-validate/zod'

export const useInteraction = () => {
  const items = ref<Kaimemo[]>()
  const isOpenModal = ref(false)

  const { defineField, errors, handleSubmit } = useForm<KaimemoSchema>({
    validationSchema: toTypedSchema(schema),
  })

  const fetchKaimemo = async () => {
    const { data, error } = await GET('/kaimemo', {})
    if (error) {
      console.error(error)
      return []
    }

    return data
  }

  onMounted(async () => {
    items.value = await fetchKaimemo()
  })

  const onClickOpenAddItemModal = () => {
    isOpenModal.value = true
  }

  const onClickCloseAddItemModal = () => {
    isOpenModal.value = false
  }

  const onClickAddItem = handleSubmit(async (values) => {
    const { error } = await POST('/kaimemo', { body: values })
    if (error) {
      console.error(error)
      return
    }

    items.value = await fetchKaimemo()
  })

  const onClickArchiveItem = async (id: string) => {
    const { error } = await DELETE('/kaimemo/{id}', {
      params: {
        path: {
          id: id,
        },
      },
    })
    if (error) {
      console.error(error)
      return
    }

    items.value = await fetchKaimemo()
  }

  return {
    items,
    isOpenModal,
    errors,
    defineField,
    onClickOpenAddItemModal,
    onClickCloseAddItemModal,
    onClickAddItem,
    onClickArchiveItem,
  }
}
