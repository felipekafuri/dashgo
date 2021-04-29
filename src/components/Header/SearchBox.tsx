import { Flex, Input, Icon } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'

export function SearchBox() {
  const [isFocused, setIsFocused] = useState(false)

  function handleInputBlur() {
    setIsFocused(false)
  }

  // refs for uncontrolled components
  const searchInputRef = useRef<HTMLInputElement>(null)

  function handleInputFocus() {
    setIsFocused(true)
  }

  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
        px="4"
        mr="4"
        ref={searchInputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <Icon
        as={RiSearchLine}
        fontSize="20"
        color={isFocused ? 'pink.400' : 'gray.50'}
      />
    </Flex>
  )
}
