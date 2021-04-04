import { Flex, Icon, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
    // se for controlled components, usa state e atualiza o conteúdo no onChange
    //const [search, setSearch] = useState('');
    // formik biblioteca mais usada de formulários no react
    // vamos usar react hook form

    // uncontrolled components usam ref e useRef<>()
    const searchInputRef = useRef<HTMLInputElement>(null);

    console.log(searchInputRef.current?.value);
    searchInputRef.current?.focus();  // interface imperativa

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
                px="4"
                mr="4"
                placeholder="Buscar na plataforma"
                _placeholder={{ color: 'gray.400' }}
                ref={searchInputRef}
            /*              se fosse controlled components
                            value={search}
                            onChange={event => setSearch(event.target.value)} */
            />

            <Icon as={RiSearchLine} fontSize="20" />

        </Flex>


    );
}