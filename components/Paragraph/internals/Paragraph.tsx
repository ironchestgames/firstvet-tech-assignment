import useViewStyles from "@/hooks/useViewStyles";
import { Text } from "react-native";
import paragraphStyles from "./Paragraph.styles";

type ParagraphProps = {
  children: string;
};

const Paragraph = ({ children }: ParagraphProps) => {
  const styles = useViewStyles(paragraphStyles);

  return <Text style={styles.text}>{children}</Text>;
};

export default Paragraph;
