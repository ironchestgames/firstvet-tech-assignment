import { Image } from "react-native";

const PAW_PRINT_SIZE = 32;

type PawPrintProps = {
  x: number;
  y: number;
};

const PawPrint = ({ x, y }: PawPrintProps) => {
  return (
    <Image
      source={require("../../../assets/images/dogpaw.png")}
      style={{
        left: x - PAW_PRINT_SIZE / 2,
        top: y - PAW_PRINT_SIZE / 2,
        position: "absolute",
        width: PAW_PRINT_SIZE,
        height: PAW_PRINT_SIZE,
        opacity: 0.5,
      }}
    />
  );
};

export default PawPrint;
