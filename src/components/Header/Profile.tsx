import { Avatar, Box, Flex, Text } from "@chakra-ui/react"

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        < Flex
            align="center"
        >
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>
                        Clarinha Prado
                    </Text>
                    <Text color="gray.300" fontSize="small">
                        clarinha.prado@gmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Clarinha Prado" src="https://avatars.githubusercontent.com/u/54044330?v=4" />
        </Flex >);
}