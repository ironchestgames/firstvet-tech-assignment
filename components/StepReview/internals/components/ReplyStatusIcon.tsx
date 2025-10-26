import { Text } from "react-native";

type ReplyStatusIconProps = {
  hasReply: boolean;
};

const ReplyStatusIcon = ({ hasReply }: ReplyStatusIconProps) => {
  return (
    <Text style={{ fontSize: 16, position: "absolute", right: 8, top: 8 }}>
      {hasReply ? "✅" : "❌"}
    </Text>
  );
};

export default ReplyStatusIcon;
