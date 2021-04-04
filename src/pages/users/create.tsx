import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Link from 'next/Link';

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" bg="gray.700" />

                    <Stack spacing={["6", "8"]}>
                        <SimpleGrid minChildWidth="240px" spacing={["2", "8"]} w="100%">
                            <Input name="name" label="Nome completo" />
                            <Input name="email" type="email" label="E-mail" />
                        </SimpleGrid>
                    </Stack>

                    <Stack mt="6" spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["2", "8"]} w="100%">
                            <Input name="password" type="password" label="Senha" />
                            <Input name="password_confirmation" type="password" label="Confirmação da senha" />
                        </SimpleGrid>
                    </Stack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref >
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button colorScheme="pink">Salvar</Button>

                        </HStack>

                    </Flex>

                </Box>
            </Flex>
        </Box>
    );
}