
export function selectColors(n: number, colors: string[]): string[] {
    const colorsCopy = shuffle(colors);
    const selectedColors: string[] = [];
    const numColors = colorsCopy.length;

    for (let i = 0; i < n; i++) {
        const index = i % numColors;
        const color = colorsCopy[index];
        selectedColors.push(color);
    }

    return selectedColors;
}

export function shuffle(array: any[]) {
    return array.sort(() => 0.5 - Math.random());
}