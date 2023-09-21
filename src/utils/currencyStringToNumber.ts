export function currencyStringToNumber(value: string) {
    const sanitaze = value.replace(/,/g, '.');

    return Number(sanitaze);
}
