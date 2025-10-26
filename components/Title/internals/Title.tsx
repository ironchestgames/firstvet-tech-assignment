import useViewStyles from "@/hooks/useViewStyles";
import { Text } from "react-native";
import titleStyles from "./Title.styles";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  const style = useViewStyles(titleStyles);
  return <Text style={style.text}>{text}</Text>;
};

export default Title;
