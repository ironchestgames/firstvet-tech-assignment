import type { Theme } from "@/components/Theme";
import { useTheme } from "@/components/Theme";
import { useMemo } from "react";

type StyleFunction<T> = (theme: Theme) => T;

// TODO: fix this typing, I don't like it
const useViewStyles = <T = any>(styleFn: StyleFunction<T>): T => {
  const { theme } = useTheme();
  return useMemo(() => styleFn(theme), [styleFn, theme]);
};

export default useViewStyles;
