import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

export default function MetacriticScoreBadge({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge fontSize={"14px"} paddingX={4} borderRadius={8} colorScheme={color}>
      {score}
    </Badge>
  );
}
