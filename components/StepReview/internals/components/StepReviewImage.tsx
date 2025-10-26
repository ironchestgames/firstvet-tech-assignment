import { useTheme } from "@/components/Theme";
import { Image } from "react-native";

type SurveyImageProps = {
  src: string;
  accessibilityLabel?: string;
};

const SurveyImage = ({ src, accessibilityLabel }: SurveyImageProps) => {
  const { theme } = useTheme();

  return (
    <Image
      source={{ uri: src }}
      accessibilityLabel={accessibilityLabel}
      style={{
        width: "100%",
        aspectRatio: 1,
        resizeMode: "contain",
        marginBottom: theme.layout.spacing.normal,
      }}
    />
  );
};

export default SurveyImage;
