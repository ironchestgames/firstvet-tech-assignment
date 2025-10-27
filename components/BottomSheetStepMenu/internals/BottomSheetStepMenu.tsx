import Container from "@/components/Container";
import Paragraph from "@/components/Paragraph";
import useViewStyles from "@/hooks/useViewStyles";
import { reset } from "@/store/surveySlice";
import { useRouter } from "expo-router";
import { Modal, Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import bottomSheetStepMenuStyles from "./BottomSheetStepMenu.styles";

type BottomSheetStepMenuProps = {
  visible: boolean;
  onRequestClose: () => void;
};

const BottomSheetStepMenu = ({
  visible,
  onRequestClose,
}: BottomSheetStepMenuProps) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const styles = useViewStyles(bottomSheetStepMenuStyles);

  return (
    <Modal transparent visible={visible} onRequestClose={onRequestClose}>
      <Pressable style={styles.overlay} onPress={onRequestClose} />
      <View style={styles.sheetContainer}>
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
