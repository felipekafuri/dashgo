import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Kafuri</Text>
          <Text color="gray.300" fontSize="small">
            felipe11.rk@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Felipe Kafuri"
        src="https://github.com/felipekafuri.png"
      />
    </Flex>
  )
}
