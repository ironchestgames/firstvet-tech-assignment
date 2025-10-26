import { useTheme } from "@/components/Theme";
import useViewStyles from "@/hooks/useViewStyles";
import { useEffect, useState } from "react";
import { TextInput } from "react-native";
import freeTextInputStyles from "./FreeTextInput.styles";

type FreeTextInputProps = {
  onChange: (text: string) => void;
  placeholder?: string;
};

const FREE_TEXT_INPUT_MAX_HEIGHT = 250;

const FreeTextInput = ({ onChange, placeholder }: FreeTextInputProps) => {
  const { theme } = useTheme();
  const styles = useViewStyles(freeTextInputStyles);

  const [height, setHeight] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    onChange(text);
  }, [text, onChange]);

  return (
    <TextInput
      value={text}
      onContentSizeChange={(e) => {
        setHeight(e.nativeEvent.contentSize.height);
      }}
      style={[
        styles.textInput,
        { maxHeight: Math.max(FREE_TEXT_INPUT_MAX_HEIGHT, height) },
      ]}
      onChangeText={setText}
      placeholder={placeholder}
      inputMode="text"
      multiline
      placeholderTextColor={theme.colors.text.muted}
    />
  );
};

export default FreeTextInput;
