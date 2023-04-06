import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreSideBar({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, isLoading, error } = useGeneres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY={"5px"}>
          <HStack>
            <Image
              onClick={() => onSelectGenre(g)}
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button
              fontWeight={g.id === selectedGenre?.id ? "bold" : "normal"}
              variant={"link"}
              fontSize={"lg"}
              onClick={() => onSelectGenre(g)}>
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
