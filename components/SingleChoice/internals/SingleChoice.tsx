import useViewStyles from "@/hooks/useViewStyles";
import { useEffect, useState } from "react";
import { View } from "react-native";
import OptionRadioButton from "./components/OptionRadioButton";
import singleChoiceStyles from "./SingleChoice.styles";

export type SingleChoiceOption = {
  id: string;
  label: string;
};

type SingleChoiceProps = {
  options: SingleChoiceOption[];
  onChange: (selectedOption: string) => void;
};

const SingleChoice = ({ options, onChange }: SingleChoiceProps) => {
  const styles = useViewStyles(singleChoiceStyles);

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    if (selectedOption !== null) {
      onChange(selectedOption);
    }
  }, [onChange, selectedOption]);

  return (
    <View style={styles.singleChoiceContainer}>
      {options.map((option, index) => (
        <OptionRadioButton
          key={index}
          text={option.label}
          selected={selectedOption === option.id}
          onPress={() => {
            setSelectedOption(option.id);
          }}
        />
      ))}
    </View>
  );
};

export default SingleChoice;
