import { GET, POST, type Kaimemo } from "@/shared/api"
import { useForm } from "vee-validate"
import { onMounted, ref } from "vue"
import { type KaimemoSchema, schema } from "../types"
import { toTypedSchema } from "@vee-validate/zod"

export const useInteraction = () => {
  const items = ref<Kaimemo[]>()
  const isOpenModal = ref(false)

  const {defineField, errors, handleSubmit} = useForm<KaimemoSchema>({
    validationSchema: toTypedSchema(schema)
  })

  onMounted(async () => {
    const { data, error } = await GET('/kaimemo', {})
    if (error) {
      console.error(error)
      return
    }
    items.value = data
  })

  const onClickOpenAddItemModal = () => {
    isOpenModal.value = true
  }

  const onClickCloseAddItemModal = () => {
    isOpenModal.value = false
  }

  const onClickAddItem = handleSubmit( async (values) => {
    const { data, error } = await POST('/kaimemo', { body: values })
    if (error) {
      console.error(error)
      return
    }
    items.value = data
  })

  return {
    items,
    isOpenModal,
    errors,
    defineField,
    onClickOpenAddItemModal,
    onClickCloseAddItemModal,
    onClickAddItem,
  }
}
