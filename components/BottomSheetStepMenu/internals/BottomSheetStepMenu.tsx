import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import { useTheme } from "@/components/Theme";
import { reset } from "@/store/surveySlice";
import { useRouter } from "expo-router";
import { Modal, Pressable, View } from "react-native";
import { useDispatch } from "react-redux";

type BottomSheetStepMenuProps = {
  visible: boolean;
  onRequestClose: () => void;
};

const BottomSheetStepMenu = ({
  visible,
  onRequestClose,
}: BottomSheetStepMenuProps) => {
  const { theme } = useTheme();
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Modal transparent visible={visible} onRequestClose={onRequestClose}>
      <Pressable
        style={{
          flex: 1,
          backgroundColor: theme.colors.element.bottomSheetOverlay,
        }}
        onPress={onRequestClose}
      />
      <View
        style={{
          backgroundColor: theme.colors.background.base,
        }}
      >
        <Container.Spacer />
        <Pressable
          onPress={() => {
            dispatch(reset());
            onRequestClose();
            router.dismissAll();
          }}
        >
          <Container.ListItem>
            <Paragraph>{"← Reset survey"}</Paragraph>
          </Container.ListItem>
        </Pressable>
        <Pressable
          onPress={() => {
            onRequestClose();
            router.push("/review");
          }}
        >
          <Container.ListItem>
            <Paragraph>{"Review"}</Paragraph>
            <Paragraph>{"→"}</Paragraph>
          </Container.ListItem>
        </Pressable>
        <Container.Spacer />
      </View>
    </Modal>
  );
};

export default BottomSheetStepMenu;
