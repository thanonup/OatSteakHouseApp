import { ImageSourcePropType } from "react-native";
import uuid from "uuid-random";

export interface PreviewData {
  id: number;
  name: string;
  image: ImageSourcePropType;
}

export const previewData: PreviewData[] = [
  {
    id: uuid(),
    name: "Overview Menu",
    image: require("../assets/mockAsset/allmenu.jpg"),
  },
  {
    id: uuid(),
    name: "ComboSet",
    image: require("../assets/mockAsset/commoset.jpg"),
  },
  {
    id: uuid(),
    name: "SuperJumbo",
    image: require("../assets/mockAsset/superjumbo.jpg"),
  },
];
