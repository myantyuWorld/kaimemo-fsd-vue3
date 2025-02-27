interface Props {
  id: () => string
}

export const useInteraction = ({ id }: Props) => {
  console.log(id())
  return {}
}
