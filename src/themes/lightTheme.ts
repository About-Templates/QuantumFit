import {
    MD3LightTheme, MD3Theme,
} from 'react-native-paper';

const QuantumFitLightScheme = {
    "colors": {
        "primary": "rgb(104, 71, 192)",
        "onPrimary": "rgb(255, 255, 255)",
        "primaryContainer": "rgb(232, 221, 255)",
        "onPrimaryContainer": "rgb(33, 0, 93)",
        "secondary": "rgb(0, 103, 131)",
        "onSecondary": "rgb(255, 255, 255)",
        "secondaryContainer": "rgb(188, 233, 255)",
        "onSecondaryContainer": "rgb(0, 31, 42)",
        "tertiary": "rgb(71, 85, 182)",
        "onTertiary": "rgb(255, 255, 255)",
        "tertiaryContainer": "rgb(223, 224, 255)",
        "onTertiaryContainer": "rgb(0, 13, 95)",
        "error": "rgb(186, 26, 26)",
        "onError": "rgb(255, 255, 255)",
        "errorContainer": "rgb(255, 218, 214)",
        "onErrorContainer": "rgb(65, 0, 2)",
        "background": "rgb(255, 251, 255)",
        "onBackground": "rgb(28, 27, 30)",
        "surface": "rgb(255, 251, 255)",
        "onSurface": "rgb(28, 27, 30)",
        "surfaceVariant": "rgb(230, 224, 236)",
        "onSurfaceVariant": "rgb(72, 69, 78)",
        "outline": "rgb(121, 117, 127)",
        "outlineVariant": "rgb(202, 196, 207)",
        "shadow": "rgb(0, 0, 0)",
        "scrim": "rgb(0, 0, 0)",
        "inverseSurface": "rgb(49, 48, 51)",
        "inverseOnSurface": "rgb(244, 239, 244)",
        "inversePrimary": "rgb(206, 189, 255)",
        "elevation": {
            "level0": "transparent",
            "level1": "rgb(247, 242, 252)",
            "level2": "rgb(243, 237, 250)",
            "level3": "rgb(238, 231, 248)",
            "level4": "rgb(237, 229, 247)",
            "level5": "rgb(234, 226, 246)"
        },
        "surfaceDisabled": "rgba(28, 27, 30, 0.12)",
        "onSurfaceDisabled": "rgba(28, 27, 30, 0.38)",
        "backdrop": "rgba(50, 47, 56, 0.4)"
    }
};

export default {
    ...MD3LightTheme,
    colors: {...MD3LightTheme.colors, ...QuantumFitLightScheme.colors},
} as MD3Theme;