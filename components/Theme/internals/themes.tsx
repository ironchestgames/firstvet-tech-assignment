type FontWeight = "normal" | "bold";

export type Theme = {
  colors: {
    background: {
      base: string;
      elevated: string;
    };
    text: {
      neutral: string;
      muted: string;
      cta_primary: string;
    };
    cta: {
      primary: string;
    };
    border: {
      neutral: string;
    };
    element: {
      listItemBottom: string;
      radioButton: string;
      checkbox: string;
      positive: string;
      negative: string;
      bottomSheetOverlay: string;
    };
  };
  layout: {
    spacing: {
      compact1: number;
      normal: number;
      spacious1: number;
    };
    borderRadius: {
      level1: number;
    };
  };
  typography: {
    fontSize: {
      preview: number;
      paragraph: number;
      title: number;
      cta: number;
    };
    fontWeight: {
      paragraph: FontWeight;
      title: FontWeight;
      cta: FontWeight;
    };
  };
};

export const lightTheme: Theme = {
  colors: {
    background: {
      base: "rgba(255, 244, 228, 1)",
      elevated: "#ffffff",
    },
    text: {
      neutral: "rgb(20, 20, 20)",
      muted: "rgb(100, 100, 100)",
      cta_primary: "#ffffff",
    },
    cta: {
      primary: "rgb(0, 97, 255)",
    },
    border: {
      neutral: "#cccccc",
    },
    element: {
      listItemBottom: "#dddddd",
      radioButton: "rgb(20, 20, 20)",
      checkbox: "rgb(20, 20, 20)",
      positive: "rgba(58, 198, 11, 1)",
      negative: "rgba(237, 69, 50, 1)",
      bottomSheetOverlay: "rgba(0,0,0,0.5)",
    },
  },
  layout: {
    spacing: {
      compact1: 8,
      normal: 16,
      spacious1: 24,
    },
    borderRadius: {
      level1: 12,
    },
  },
  typography: {
    fontSize: {
      preview: 12,
      paragraph: 16,
      title: 32,
      cta: 16,
    },
    fontWeight: {
      paragraph: "normal",
      title: "bold",
      cta: "bold",
    },
  },
};

export const darkTheme = lightTheme;
