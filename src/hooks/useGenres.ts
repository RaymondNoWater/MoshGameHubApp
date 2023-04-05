import useData from "./useData";

interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGeneres = () => useData<Genres>("/genres");

export default useGeneres;
