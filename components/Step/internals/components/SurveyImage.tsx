import useViewStyles from "@/hooks/useViewStyles";
import { Image } from "react-native";
import surveyImageStyles from "./SurveyImage.styles";

type SurveyImageProps = {
  src: string;
  accessibilityLabel?: string;
};

const SurveyImage = ({ src, accessibilityLabel }: SurveyImageProps) => {
  const styles = useViewStyles(surveyImageStyles);
  return (
    <Image
      source={{ uri: src }}
      accessibilityLabel={accessibilityLabel}
      style={styles.image}
    />
  );
};

export default SurveyImage;
