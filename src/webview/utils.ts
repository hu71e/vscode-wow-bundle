
// Teste si une chaîne représente une couleur hexa
export const HEX_COLOR_REGEX = /^#(?:(?:[\da-f]{3}){1,2}|(?:[\da-f]{4}){1,2})$/ui     // #RGB, #RRGGBB, #RGBA, #RRGGBBAA
export function isColor(str?: string): boolean {
    return typeof str === 'string' && HEX_COLOR_REGEX.test(str)
}

// Teste si une chaîne représente un style
export const FONT_STYLE_REGEX = /\b(bold|italic|underline)\b/ui
export function isStyle(str?: string): boolean {
    return typeof str === 'string' && (str === '' || FONT_STYLE_REGEX.test(str))
}

// Teste si une valeur est un objet
// https://webbjocke.com/javascript-check-data-types/
export function isObject(x?: any): boolean {
    return typeof x === 'object' && !!x && x.constructor === Object
}