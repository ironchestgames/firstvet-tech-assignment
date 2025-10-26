import useViewStyles from "@/hooks/useViewStyles";
import { useEffect, useState } from "react";
import { View } from "react-native";
import OptionCheckbox from "./components/OptionCheckbox";
import multipleChoiceStyles from "./MultipleChoice.styles";

export type MultipleChoiceOption = {
  id: string;
  label: string;
};

type MultipleChoiceProps = {
  options: MultipleChoiceOption[];
  onChange: (selectedOptions: string[]) => void;
};

const MultipleChoice = ({ options, onChange }: MultipleChoiceProps) => {
  const styles = useViewStyles(multipleChoiceStyles);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  useEffect(() => {
    onChange(selectedOptions);
  }, [onChange, selectedOptions]);

  return (
    <View style={styles.multipleChoiceContainer}>
      {options.map((option, index) => (
        <OptionCheckbox
          key={index}
          text={option.label}
          checked={selectedOptions.includes(option.id)}
          onPress={() => {
            setSelectedOptions((prev) =>
              prev.includes(option.id)
                ? prev.filter((id) => id !== option.id)
                : [...prev, option.id]
            );
          }}
        />
      ))}
    </View>
  );
};

export default MultipleChoice;
