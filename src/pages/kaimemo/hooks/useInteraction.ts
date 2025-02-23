import { type Kaimemo } from '@/shared/api'
import { useForm } from 'vee-validate'
import { onMounted, ref, computed } from 'vue'
import { type KaimemoSchema, schema } from '../types'
import { toTypedSchema } from '@vee-validate/zod'
import { useRouter } from 'vue-router'

export const useInteraction = () => {
  const items = ref<Kaimemo[]>()
  const isOpenModal = ref(false)
  const selectedFilters = ref<string[]>([])
  const tempUserID =
    (useRouter().currentRoute.value.query.share as string) ?? localStorage.getItem('tempUserID')
  const ws = new WebSocket(`${import.meta.env.VITE_WEBSOCKET_URL_KAIMEMO}?tempUserID=${tempUserID}`)

  // TODO : provide, injectで共通的に処理したい
  const loading = ref<boolean>(true)

  const { defineField, errors, handleSubmit, setValues } = useForm<KaimemoSchema>({
    validationSchema: toTypedSchema(schema),
  })

  onMounted(async () => {
    localStorage.setItem('tempUserID', tempUserID)

    // TODO : 初期表示で、一覧が表示されない問題がある
    ws.onmessage = (event) => {
      console.log(event.data)
      items.value = event.data as Kaimemo[]
    }
  })

  const onClickOpenAddItemModal = () => {
    isOpenModal.value = true
  }

  const onClickCloseAddItemModal = () => {
    isOpenModal.value = false
  }

  const onClickAddItem = handleSubmit(async (values) => {
    ws.send(
      JSON.stringify({
        methodType: '1',
        tempUserID: tempUserID,
        ...values,
      }),
    )

    setValues({
      name: '',
    })
  })

  const onClickArchiveItem = async (id: string) => {
    ws.send(
      JSON.stringify({
        methodType: '2',
        tempUserID: tempUserID,
        id: id,
      }),
    )
  }

  const onClickShare = () => {
    navigator.share({
      title: 'kaimemo!',
      text: 'リンクを共有し、買い物メモを共有しよう！',
      url: window.location.href + `kaimemo?share=${tempUserID}`,
    })
  }

  const filteredItems = computed(() => {
    if (!selectedFilters.value.length) {
      return items.value
    }
    return items.value?.filter((item) => selectedFilters.value.includes(item.tag))
  })

  return {
    items,
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
    onClickShare,
  }
}
