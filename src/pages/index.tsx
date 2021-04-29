import { Flex, Button, Stack } from '@chakra-ui/react'
import React, { FormEvent, useState } from 'react'
import { Input } from '../components/Form/Input'
import Link from 'next/link'

export default function SignIn(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    console.log({ email, password })
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit}
      >
        <Stack spacing={4}>
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Senha" />
        </Stack>

        <Link href="/dashboard" passHref>
          <Button type="submit" mt={6} colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}
