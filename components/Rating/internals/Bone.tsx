import React, { useRef } from "react";
import { Animated, Easing, Image, PanResponder } from "react-native";
import { Box } from "./Rating";

export type ImageAsset = {
  source: any;
};

export type BoneOnChangeStatus =
  | "dragging"
  | "hoveringTarget"
  | "droppingOutside"
  | "droppingOnTarget";

const IMAGE_SIZE = 50;

type BoneProps = {
  id: number;
  img: ImageAsset;
  onChange: (id: number, status: BoneOnChangeStatus) => void;
  target: Box;
  startX: number;
  startY: number;
};

// TODO: this component needs a refactor
const Bone = ({ id, img, onChange, target, startX, startY }: BoneProps) => {
  const layoutPosition = useRef({ x: 0, y: 0 });
  const position = useRef(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    })
  ).current;
  const positionOffset = useRef({ x: 0, y: 0 });
  const rotation = useRef(new Animated.Value(0)).current;

  const isOverlappingTarget = (x: number, y: number) => {
    const result =
      x >= target.x &&
      x <= target.x + target.width &&
      y >= target.y &&
      y <= target.y + target.height;
    return result;
  };

  const startDingle = () => {
    rotation.setValue(0);
    Animated.loop(
      Animated.sequence([
        Animated.timing(rotation, {
          toValue: 1,
          duration: 150,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(rotation, {
          toValue: -1,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(rotation, {
          toValue: 0,
          duration: 150,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ])
    ).start();
  };

  const stopDingle = () => {
    rotation.stopAnimation();
    rotation.setValue(0);
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      startDingle();
    },
    onPanResponderMove: (_, gestureState) => {
      const newX = positionOffset.current.x + gestureState.dx;
      const newY = positionOffset.current.y + gestureState.dy;
      position.setValue({
        x: newX,
        y: newY,
      });

      if (
        isOverlappingTarget(
          layoutPosition.current.x + newX,
          layoutPosition.current.y + newY
        )
      ) {
        onChange(id, "hoveringTarget");
      } else {
        onChange(id, "dragging");
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      const newX = positionOffset.current.x + gestureState.dx;
      const newY = positionOffset.current.y + gestureState.dy;

      if (
        isOverlappingTarget(
          layoutPosition.current.x + newX,
          layoutPosition.current.y + newY
        )
      ) {
        onChange(id, "droppingOnTarget");
      } else {
        onChange(id, "droppingOutside");
      }

      stopDingle();

      positionOffset.current.x += gestureState.dx;
      positionOffset.current.y += gestureState.dy;

      position.setValue({
        x: positionOffset.current.x,
        y: positionOffset.current.y,
      });
    },
  });

  const rotationAnimation = rotation.interpolate({
    inputRange: [-1, 1],
    outputRange: ["-15deg", "15deg"],
  });

  return (
    <Animated.View
      onLayout={(e) => {
        const { x, y } = e.nativeEvent.layout;
        layoutPosition.current = { x, y };
      }}
      {...panResponder.panHandlers}
      style={[
        {
          position: "absolute",
          right: startX,
          top: startY,
          transform: [
            ...position.getTranslateTransform(),
            { rotate: rotationAnimation },
          ],
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
        },
      ]}
    >
      <Image
        source={img.source}
        style={{
          width: IMAGE_SIZE,
          height: IMAGE_SIZE,
        }}
      />
    </Animated.View>
  );
};

export default Bone;
