import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";
import GenreSelectSkeletons from "./GenreSelectSkeletons";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreSideBar({ onSelectGenre, selectedGenre }: Props) {
  const { data: genres, isLoading, error } = useGeneres();
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  if (error) return null;

  return (
    <>
      <Heading marginBottom={3} fontSize={"3xl"}>
        Genres
      </Heading>
      <List>
        {isLoading && skeletons.map((s) => <GenreSelectSkeletons key={s} />)}
        {genres.map((g) => (
          <ListItem key={g.id} paddingY={"5px"}>
            <HStack>
              <Image
                objectFit={"cover"}
                onClick={() => onSelectGenre(g)}
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(g.image_background)}
              />
              <Button
                textAlign={"left"}
                whiteSpace={"normal"}
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
    </>
  );
}
