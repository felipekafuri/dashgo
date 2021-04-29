import { Stack } from '@chakra-ui/react'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine
} from 'react-icons/ri'

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink title="Dashboard" icon={RiDashboardLine} href="/dashboard" />
        <NavLink title="Usuários" icon={RiContactsLine} href="/users" />
      </NavSection>
      <NavSection title="AUTOMAÇÃO">
        <NavLink title="Formulários" icon={RiInputMethodLine} href="/forms" />
        <NavLink title="Automação" icon={RiGitMergeLine} href="/automation" />
      </NavSection>
    </Stack>
  )
}