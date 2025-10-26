import Title from "@/components/Title";
import { useEffect, useMemo, useRef, useState } from "react";
import { Animated, Easing } from "react-native";
import { BoneOnChangeStatus } from "./Bone";

const RatingText = ({
  rating,
  maxRating,
  boneStatus,
}: {
  rating: number;
  maxRating: number;
  boneStatus: BoneOnChangeStatus | undefined;
}) => {
  const hoverValue = useRef(new Animated.Value(0)).current;
  const dropValue = useRef(new Animated.Value(0)).current;

  const [internalRating, setInternalRating] = useState(rating);

  useEffect(() => {
    setInternalRating(rating);
  }, [rating]);

  const animatedStyle = useMemo(() => {
    if (boneStatus === "droppingOnTarget" && internalRating < rating) {
      hoverValue.stopAnimation();
      hoverValue.setValue(0);

      dropValue.setValue(0);
      Animated.spring(dropValue, {
        toValue: 1,
        useNativeDriver: false,
      }).start();

      return {
        transform: [
          {
            rotate: dropValue.interpolate({
              inputRange: [0, 1],
              outputRange: ["0deg", "360deg"],
            }),
          },
        ],
      };
    }

    if (boneStatus === "hoveringTarget") {
      hoverValue.setValue(0);
      Animated.sequence([
        Animated.delay(180),
        Animated.loop(
          Animated.sequence([
            Animated.timing(hoverValue, {
              toValue: 1,
              duration: 25,
              easing: Easing.ease,
              useNativeDriver: false,
            }),
            Animated.timing(hoverValue, {
              toValue: -1,
              duration: 50,
              easing: Easing.ease,
              useNativeDriver: false,
            }),
            Animated.timing(hoverValue, {
              toValue: 0,
              duration: 25,
              easing: Easing.ease,
              useNativeDriver: false,
            }),
          ])
        ),
      ]).start();

      const hoverAnimation = hoverValue.interpolate({
        inputRange: [-1, 1],
        outputRange: ["-5deg", "5deg"],
      });

      return {
        transform: [{ rotate: hoverAnimation }],
      };
    }
    // NOTE: Removed internalRating from dependencies because we want to compare with previous rating
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boneStatus, dropValue, hoverValue, rating]);

  return (
    <Animated.View
      style={[animatedStyle, { position: "absolute", padding: 16 }]}
    >
      <Title text={`${rating}/${maxRating}`} />
    </Animated.View>
  );
};

export default RatingText;
