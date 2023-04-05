import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGeneres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

export default function GenreSideBar() {
  const { data: Genres } = useGeneres();
  return (
    <List>
      {Genres.map((g) => (
        <ListItem key={g.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Text fontSize={"lg"}>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
