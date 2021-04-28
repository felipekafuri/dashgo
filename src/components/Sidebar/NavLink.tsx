import {
  Link,
  Icon,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinkProp extends ChakraLinkProps {
  title: string
  icon: ElementType
}

export function NavLink({ title, icon, ...rest }: NavLinkProp) {
  return (
    <Link display="flex" align="center" py="1" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  )
}
