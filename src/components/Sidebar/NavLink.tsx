import {
  Link as ChakraLink,
  Icon,
  Text,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'
import { ElementType } from 'react'
import { ActiveLink } from '../ActiveLink'

interface NavLinkProp extends ChakraLinkProps {
  title: string
  icon: ElementType
  href: string
}

export function NavLink({ title, icon, href, ...rest }: NavLinkProp) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" py="1" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {title}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
