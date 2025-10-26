import useViewStyles from "@/hooks/useViewStyles";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Image, View } from "react-native";
import Bone, { BoneOnChangeStatus } from "./Bone";
import ratingStyles from "./Rating.styles";
import RatingText from "./RatingText";

const boneImages = [
  { source: require("../../../assets/images/bone1.png") },
  { source: require("../../../assets/images/bone2.png") },
  { source: require("../../../assets/images/bone3.png") },
  { source: require("../../../assets/images/bone4.png") },
  { source: require("../../../assets/images/bone5.png") },
];

export type Box = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type OptionRatingProps = {
  maxRating: number;
  onChange: (rating: number) => void;
};

const OptionRating = ({ maxRating, onChange }: OptionRatingProps) => {
  const styles = useViewStyles(ratingStyles);

  const [target, setTarget] = useState<Box>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const [droppedBones, setDroppedBones] = useState<number[]>([]);
  const [boneStatus, setBoneStatus] = useState<
    BoneOnChangeStatus | undefined
  >();

  const bones = useMemo(() => boneImages.slice(0, maxRating), [maxRating]);

  useEffect(() => {
    onChange(droppedBones.length);
  }, [droppedBones.length, onChange]);

  const onBoneChange = useCallback((id: number, status: BoneOnChangeStatus) => {
    setBoneStatus(status);

    if (status === "droppingOutside") {
      setDroppedBones((prev) => prev.filter((boneId) => boneId !== id));
      return;
    }

    if (status === "droppingOnTarget") {
      setDroppedBones((prev) => {
        if (prev.includes(id)) {
          return prev;
        }
        return [...prev, id];
      });
    }
  }, []);

  return (
    <View style={styles.ratingContainer}>
      <Image
        source={require("../../../assets/images/dogbowl.png")}
        resizeMode="contain"
        style={{
          width: 200,
          height: 200,
        }}
        onLayout={(e) => {
          const { x, y, width, height } = e.nativeEvent.layout;
          setTarget({ x, y, width, height });
        }}
      />
      <RatingText
        rating={droppedBones.length}
        maxRating={bones.length}
        boneStatus={boneStatus}
      />
      {bones.map((img, index) => (
        <Bone
          id={index}
          key={index}
          img={img}
          onChange={onBoneChange}
          startX={96 + index * (target.width / bones.length) * 1.2}
          startY={216 + Math.random() * 32}
          target={target}
        />
      ))}
    </View>
  );
};

export default OptionRating;
