import { Skeleton, SkeletonCircle, HStack } from "@chakra-ui/react";

export default function GenreSelectSkeletons() {
  return (
    <HStack paddingY={"5px"}>
      <SkeletonCircle />
      <Skeleton height="20px" width={"120px"} />
    </HStack>
  );
}
