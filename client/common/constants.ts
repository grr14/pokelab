export const BREAKPOINTS = [300, 600, 900, 1060, 1280, 1440, 1680, 1920, 2180]

export const mq = BREAKPOINTS.map((bp) => `@media (min-width: ${bp}px)`)

export const only_phones = `@media (min-width: ${BREAKPOINTS[0]}px) and (max-width: ${BREAKPOINTS[1]}px)`

export const only_midsize_device = `@media (min-width: ${BREAKPOINTS[1]}px) and (max-width: ${BREAKPOINTS[2]}px)`

export const only_notebooks = `@media (min-width: ${BREAKPOINTS[2]}px) and (max-width: ${BREAKPOINTS[3]}px)`

export const only_big_screens = `@media (min-width: ${BREAKPOINTS[3]}px) and (max-width: ${BREAKPOINTS[8]}px)`

/* ---------------------------------------------------------------------------------------------------------------------------- */

export const LAST_POKEMON_ID = 807
