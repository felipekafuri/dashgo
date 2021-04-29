import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { createContext, useContext, useEffect } from 'react'

interface SideBarDrawerProviderProps {
  children: React.ReactNode
}

type SidebarDrawerContextData = UseDisclosureReturn

const SideBarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({
  children
}: SideBarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SideBarDrawerContext)
