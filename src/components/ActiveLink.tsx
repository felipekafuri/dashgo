import { useRouter } from 'next/dist/client/router'
import Link, { LinkProps } from 'next/link'
import { cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement
  shouldMatchExactHref?: boolean
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  let isActive = false
  const { asPath } = useRouter()

  if (shouldMatchExactHref && asPath === rest.href) {
    isActive = true
  }

  if (!shouldMatchExactHref && asPath.startsWith(String(rest.href))) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50'
      })}
    </Link>
  )
}
