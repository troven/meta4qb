import colorbrewer from "colorbrewer";

export default function colors() {
    return {
        "blue": {
            colors: colorbrewer.Blues[9]
        },
        "green": {
            colors: colorbrewer.Greens[9]
        },
        "red": {
            colors: colorbrewer.Reds[9]
        },
        "orange": {
            colors: colorbrewer.Oranges[9]
        },
        "grey": {
            colors: colorbrewer.Greys[9]
        },
        "default": {
            colors: colorbrewer.Blues[9]
        }
    }
}