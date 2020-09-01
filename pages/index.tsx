import { Heading, Grid, Flex } from "@chakra-ui/core";

export default function Home() {
  return (
      <Grid 
      as="main" 
      height="100vh" 
      templateColumns="1fr 480px 480px 1fr" 
      templateRows="1fr 480px 1fr"
      templateAreas="
      '. . . .'
      '. logo form .'
      '. . . .'
      "
      justifyContent="center"
      alignItems="center">
        <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
          <img src="/logo3.png" alt="logo"/>

          <Heading size="2xl" lineHeight="shorter">Faça seu login na plataforma</Heading>
        </Flex>
      </Grid>
  )
}
