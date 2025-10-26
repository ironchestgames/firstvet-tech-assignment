import { Pressable, Text } from "react-native";

type NavButtonStepMenuProps = {
  openMenu: () => void;
};

const NavButtonStepMenu = ({ openMenu }: NavButtonStepMenuProps) => {
  return (
    <Pressable onPress={openMenu}>
      <Text
        style={{
          fontSize: 24,
          width: 36, // TODO: fix the layout of this button
          textAlign: "center",
        }}
      >
        {"⋮"}
      </Text>
    </Pressable>
  );
};

export default NavButtonStepMenu;
