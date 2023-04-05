import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreSideBar from "./components/GenreSideBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem marginX={5} area="aside">
          <GenreSideBar />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
