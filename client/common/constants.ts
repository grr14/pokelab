export const BREAKPOINTS = [300, 600, 900, 1060, 1280, 1440, 1680, 1920, 2180]

export const mq = BREAKPOINTS.map((bp) => `@media (min-width: ${bp}px)`)

export const only_phones = `@media (min-width: ${BREAKPOINTS[0]}px) and (max-width: ${BREAKPOINTS[1]}px)`

export const only_midsize_device = `@media (min-width: ${BREAKPOINTS[1]}px) and (max-width: ${BREAKPOINTS[2]}px)`

export const only_notebooks = `@media (min-width: ${BREAKPOINTS[2]}px) and (max-width: ${BREAKPOINTS[3]}px)`

export const only_big_screens = `@media (min-width: ${BREAKPOINTS[3]}px) and (max-width: ${BREAKPOINTS[8]}px)`

/* ---------------------------------------------------------------------------------------------------------------------------- */

export const LAST_POKEMON_ID = 807

/* ---------------------------------------------------------------------------------------------------------------------------- */

export const NB_TYPES: number = 18

export enum TYPES {
  NORMAL = 1,
  FIGHTING,
  FLYING,
  POISON,
  GROUND = 5,
  ROCK,
  BUG,
  GHOST,
  STEEL,
  FIRE = 10,
  WATER,
  GRASS,
  ELECTRIC,
  PSYCHIC,
  ICE = 15,
  DRAGON,
  DARK,
  FAIRY,
}

const tmp_types_relations: number[][] = new Array(NB_TYPES + 1)
  .fill(0)
  .map(() => new Array(NB_TYPES + 1).fill(0))

tmp_types_relations[TYPES.NORMAL][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.FLYING] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.POISON] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.GROUND] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.ROCK] = 0.5
tmp_types_relations[TYPES.NORMAL][TYPES.BUG] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.GHOST] = 0
tmp_types_relations[TYPES.NORMAL][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.NORMAL][TYPES.FIRE] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.WATER] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.GRASS] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.ICE] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.DARK] = 1
tmp_types_relations[TYPES.NORMAL][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.FIGHTING][TYPES.NORMAL] = 2
tmp_types_relations[TYPES.FIGHTING][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.FIGHTING][TYPES.FLYING] = 0.5
tmp_types_relations[TYPES.FIGHTING][TYPES.POISON] = 0.5
tmp_types_relations[TYPES.FIGHTING][TYPES.GROUND] = 1
tmp_types_relations[TYPES.FIGHTING][TYPES.ROCK] = 2
tmp_types_relations[TYPES.FIGHTING][TYPES.BUG] = 0.5
tmp_types_relations[TYPES.FIGHTING][TYPES.GHOST] = 0
tmp_types_relations[TYPES.FIGHTING][TYPES.STEEL] = 2
tmp_types_relations[TYPES.FIGHTING][TYPES.FIRE] = 1
tmp_types_relations[TYPES.FIGHTING][TYPES.WATER] = 1
tmp_types_relations[TYPES.FIGHTING][TYPES.GRASS] = 1
tmp_types_relations[TYPES.FIGHTING][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.FIGHTING][TYPES.PSYCHIC] = 0.5
tmp_types_relations[TYPES.FIGHTING][TYPES.ICE] = 2
tmp_types_relations[TYPES.FIGHTING][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.FIGHTING][TYPES.DARK] = 2
tmp_types_relations[TYPES.FIGHTING][TYPES.FAIRY] = 0.5

tmp_types_relations[TYPES.FLYING][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.FLYING][TYPES.FIGHTING] = 2
tmp_types_relations[TYPES.FLYING][TYPES.FLYING] = 1
tmp_types_relations[TYPES.FLYING][TYPES.POISON] = 1
tmp_types_relations[TYPES.FLYING][TYPES.GROUND] = 1
tmp_types_relations[TYPES.FLYING][TYPES.ROCK] = 0.5
tmp_types_relations[TYPES.FLYING][TYPES.BUG] = 2
tmp_types_relations[TYPES.FLYING][TYPES.GHOST] = 1
tmp_types_relations[TYPES.FLYING][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.FLYING][TYPES.FIRE] = 1
tmp_types_relations[TYPES.FLYING][TYPES.WATER] = 1
tmp_types_relations[TYPES.FLYING][TYPES.GRASS] = 2
tmp_types_relations[TYPES.FLYING][TYPES.ELECTRIC] = 0.5
tmp_types_relations[TYPES.FLYING][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.FLYING][TYPES.ICE] = 1
tmp_types_relations[TYPES.FLYING][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.FLYING][TYPES.DARK] = 1
tmp_types_relations[TYPES.FLYING][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.POISON][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.POISON][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.POISON][TYPES.FLYING] = 1
tmp_types_relations[TYPES.POISON][TYPES.POISON] = 0.5
tmp_types_relations[TYPES.POISON][TYPES.GROUND] = 0.5
tmp_types_relations[TYPES.POISON][TYPES.ROCK] = 0.5
tmp_types_relations[TYPES.POISON][TYPES.BUG] = 1
tmp_types_relations[TYPES.POISON][TYPES.GHOST] = 0.5
tmp_types_relations[TYPES.POISON][TYPES.STEEL] = 0
tmp_types_relations[TYPES.POISON][TYPES.FIRE] = 1
tmp_types_relations[TYPES.POISON][TYPES.WATER] = 1
tmp_types_relations[TYPES.POISON][TYPES.GRASS] = 2
tmp_types_relations[TYPES.POISON][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.POISON][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.POISON][TYPES.ICE] = 1
tmp_types_relations[TYPES.POISON][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.POISON][TYPES.DARK] = 1
tmp_types_relations[TYPES.POISON][TYPES.FAIRY] = 2

tmp_types_relations[TYPES.GROUND][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.GROUND][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.GROUND][TYPES.FLYING] = 0
tmp_types_relations[TYPES.GROUND][TYPES.POISON] = 2
tmp_types_relations[TYPES.GROUND][TYPES.GROUND] = 1
tmp_types_relations[TYPES.GROUND][TYPES.ROCK] = 2
tmp_types_relations[TYPES.GROUND][TYPES.BUG] = 0.5
tmp_types_relations[TYPES.GROUND][TYPES.GHOST] = 1
tmp_types_relations[TYPES.GROUND][TYPES.STEEL] = 2
tmp_types_relations[TYPES.GROUND][TYPES.FIRE] = 2
tmp_types_relations[TYPES.GROUND][TYPES.WATER] = 1
tmp_types_relations[TYPES.GROUND][TYPES.GRASS] = 0.5
tmp_types_relations[TYPES.GROUND][TYPES.ELECTRIC] = 2
tmp_types_relations[TYPES.GROUND][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.GROUND][TYPES.ICE] = 1
tmp_types_relations[TYPES.GROUND][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.GROUND][TYPES.DARK] = 1
tmp_types_relations[TYPES.GROUND][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.ROCK][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.ROCK][TYPES.FIGHTING] = 0.5
tmp_types_relations[TYPES.ROCK][TYPES.FLYING] = 2
tmp_types_relations[TYPES.ROCK][TYPES.POISON] = 1
tmp_types_relations[TYPES.ROCK][TYPES.GROUND] = 0.5
tmp_types_relations[TYPES.ROCK][TYPES.ROCK] = 1
tmp_types_relations[TYPES.ROCK][TYPES.BUG] = 2
tmp_types_relations[TYPES.ROCK][TYPES.GHOST] = 1
tmp_types_relations[TYPES.ROCK][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.ROCK][TYPES.FIRE] = 2
tmp_types_relations[TYPES.ROCK][TYPES.WATER] = 1
tmp_types_relations[TYPES.ROCK][TYPES.GRASS] = 1
tmp_types_relations[TYPES.ROCK][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.ROCK][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.ROCK][TYPES.ICE] = 2
tmp_types_relations[TYPES.ROCK][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.ROCK][TYPES.DARK] = 1
tmp_types_relations[TYPES.ROCK][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.BUG][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.BUG][TYPES.FIGHTING] = 0.5
tmp_types_relations[TYPES.BUG][TYPES.FLYING] = 0.5
tmp_types_relations[TYPES.BUG][TYPES.POISON] = 0.5
tmp_types_relations[TYPES.BUG][TYPES.GROUND] = 1
tmp_types_relations[TYPES.BUG][TYPES.ROCK] = 1
tmp_types_relations[TYPES.BUG][TYPES.BUG] = 1
tmp_types_relations[TYPES.BUG][TYPES.GHOST] = 0.5
tmp_types_relations[TYPES.BUG][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.BUG][TYPES.FIRE] = 0.5
tmp_types_relations[TYPES.BUG][TYPES.WATER] = 1
tmp_types_relations[TYPES.BUG][TYPES.GRASS] = 2
tmp_types_relations[TYPES.BUG][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.BUG][TYPES.PSYCHIC] = 2
tmp_types_relations[TYPES.BUG][TYPES.ICE] = 1
tmp_types_relations[TYPES.BUG][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.BUG][TYPES.DARK] = 2
tmp_types_relations[TYPES.BUG][TYPES.FAIRY] = 0.5

tmp_types_relations[TYPES.GHOST][TYPES.NORMAL] = 0
tmp_types_relations[TYPES.GHOST][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.GHOST][TYPES.FLYING] = 1
tmp_types_relations[TYPES.GHOST][TYPES.POISON] = 1
tmp_types_relations[TYPES.GHOST][TYPES.GROUND] = 1
tmp_types_relations[TYPES.GHOST][TYPES.ROCK] = 1
tmp_types_relations[TYPES.GHOST][TYPES.BUG] = 1
tmp_types_relations[TYPES.GHOST][TYPES.GHOST] = 2
tmp_types_relations[TYPES.GHOST][TYPES.STEEL] = 1
tmp_types_relations[TYPES.GHOST][TYPES.FIRE] = 1
tmp_types_relations[TYPES.GHOST][TYPES.WATER] = 1
tmp_types_relations[TYPES.GHOST][TYPES.GRASS] = 1
tmp_types_relations[TYPES.GHOST][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.GHOST][TYPES.PSYCHIC] = 2
tmp_types_relations[TYPES.GHOST][TYPES.ICE] = 1
tmp_types_relations[TYPES.GHOST][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.GHOST][TYPES.DARK] = 0.5
tmp_types_relations[TYPES.GHOST][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.STEEL][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.STEEL][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.STEEL][TYPES.FLYING] = 1
tmp_types_relations[TYPES.STEEL][TYPES.POISON] = 1
tmp_types_relations[TYPES.STEEL][TYPES.GROUND] = 1
tmp_types_relations[TYPES.STEEL][TYPES.ROCK] = 2
tmp_types_relations[TYPES.STEEL][TYPES.BUG] = 1
tmp_types_relations[TYPES.STEEL][TYPES.GHOST] = 1
tmp_types_relations[TYPES.STEEL][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.STEEL][TYPES.FIRE] = 0.5
tmp_types_relations[TYPES.STEEL][TYPES.WATER] = 0.5
tmp_types_relations[TYPES.STEEL][TYPES.GRASS] = 1
tmp_types_relations[TYPES.STEEL][TYPES.ELECTRIC] = 0.5
tmp_types_relations[TYPES.STEEL][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.STEEL][TYPES.ICE] = 2
tmp_types_relations[TYPES.STEEL][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.STEEL][TYPES.DARK] = 1
tmp_types_relations[TYPES.STEEL][TYPES.FAIRY] = 2

tmp_types_relations[TYPES.FIRE][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.FIRE][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.FIRE][TYPES.FLYING] = 1
tmp_types_relations[TYPES.FIRE][TYPES.POISON] = 1
tmp_types_relations[TYPES.FIRE][TYPES.GROUND] = 1
tmp_types_relations[TYPES.FIRE][TYPES.ROCK] = 0.5
tmp_types_relations[TYPES.FIRE][TYPES.BUG] = 2
tmp_types_relations[TYPES.FIRE][TYPES.GHOST] = 1
tmp_types_relations[TYPES.FIRE][TYPES.STEEL] = 2
tmp_types_relations[TYPES.FIRE][TYPES.FIRE] = 0.5
tmp_types_relations[TYPES.FIRE][TYPES.WATER] = 0.5
tmp_types_relations[TYPES.FIRE][TYPES.GRASS] = 2
tmp_types_relations[TYPES.FIRE][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.FIRE][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.FIRE][TYPES.ICE] = 2
tmp_types_relations[TYPES.FIRE][TYPES.DRAGON] = 0.5
tmp_types_relations[TYPES.FIRE][TYPES.DARK] = 1
tmp_types_relations[TYPES.FIRE][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.WATER][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.WATER][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.WATER][TYPES.FLYING] = 1
tmp_types_relations[TYPES.WATER][TYPES.POISON] = 1
tmp_types_relations[TYPES.WATER][TYPES.GROUND] = 2
tmp_types_relations[TYPES.WATER][TYPES.ROCK] = 2
tmp_types_relations[TYPES.WATER][TYPES.BUG] = 1
tmp_types_relations[TYPES.WATER][TYPES.GHOST] = 1
tmp_types_relations[TYPES.WATER][TYPES.STEEL] = 1
tmp_types_relations[TYPES.WATER][TYPES.FIRE] = 2
tmp_types_relations[TYPES.WATER][TYPES.WATER] = 0.5
tmp_types_relations[TYPES.WATER][TYPES.GRASS] = 0.5
tmp_types_relations[TYPES.WATER][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.WATER][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.WATER][TYPES.ICE] = 1
tmp_types_relations[TYPES.WATER][TYPES.DRAGON] = 0.5
tmp_types_relations[TYPES.WATER][TYPES.DARK] = 1
tmp_types_relations[TYPES.WATER][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.GRASS][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.GRASS][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.GRASS][TYPES.FLYING] = 0.5
tmp_types_relations[TYPES.GRASS][TYPES.POISON] = 0.5
tmp_types_relations[TYPES.GRASS][TYPES.GROUND] = 2
tmp_types_relations[TYPES.GRASS][TYPES.ROCK] = 2
tmp_types_relations[TYPES.GRASS][TYPES.BUG] = 0.5
tmp_types_relations[TYPES.GRASS][TYPES.GHOST] = 1
tmp_types_relations[TYPES.GRASS][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.GRASS][TYPES.FIRE] = 0.5
tmp_types_relations[TYPES.GRASS][TYPES.WATER] = 2
tmp_types_relations[TYPES.GRASS][TYPES.GRASS] = 0.5
tmp_types_relations[TYPES.GRASS][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.GRASS][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.GRASS][TYPES.ICE] = 1
tmp_types_relations[TYPES.GRASS][TYPES.DRAGON] = 0.5
tmp_types_relations[TYPES.GRASS][TYPES.DARK] = 1
tmp_types_relations[TYPES.GRASS][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.ELECTRIC][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.FLYING] = 2
tmp_types_relations[TYPES.ELECTRIC][TYPES.POISON] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.GROUND] = 0
tmp_types_relations[TYPES.ELECTRIC][TYPES.ROCK] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.BUG] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.GHOST] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.STEEL] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.FIRE] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.WATER] = 2
tmp_types_relations[TYPES.ELECTRIC][TYPES.GRASS] = 0.5
tmp_types_relations[TYPES.ELECTRIC][TYPES.ELECTRIC] = 0.5
tmp_types_relations[TYPES.ELECTRIC][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.ICE] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.DRAGON] = 0.5
tmp_types_relations[TYPES.ELECTRIC][TYPES.DARK] = 1
tmp_types_relations[TYPES.ELECTRIC][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.PSYCHIC][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.FIGHTING] = 2
tmp_types_relations[TYPES.PSYCHIC][TYPES.FLYING] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.POISON] = 2
tmp_types_relations[TYPES.PSYCHIC][TYPES.GROUND] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.ROCK] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.BUG] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.GHOST] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.PSYCHIC][TYPES.FIRE] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.WATER] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.GRASS] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.PSYCHIC] = 0.5
tmp_types_relations[TYPES.PSYCHIC][TYPES.ICE] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.PSYCHIC][TYPES.DARK] = 0
tmp_types_relations[TYPES.PSYCHIC][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.ICE][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.ICE][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.ICE][TYPES.FLYING] = 2
tmp_types_relations[TYPES.ICE][TYPES.POISON] = 1
tmp_types_relations[TYPES.ICE][TYPES.GROUND] = 2
tmp_types_relations[TYPES.ICE][TYPES.ROCK] = 1
tmp_types_relations[TYPES.ICE][TYPES.BUG] = 1
tmp_types_relations[TYPES.ICE][TYPES.GHOST] = 1
tmp_types_relations[TYPES.ICE][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.ICE][TYPES.FIRE] = 0.5
tmp_types_relations[TYPES.ICE][TYPES.WATER] = 0.5
tmp_types_relations[TYPES.ICE][TYPES.GRASS] = 2
tmp_types_relations[TYPES.ICE][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.ICE][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.ICE][TYPES.ICE] = 0.5
tmp_types_relations[TYPES.ICE][TYPES.DRAGON] = 2
tmp_types_relations[TYPES.ICE][TYPES.DARK] = 1
tmp_types_relations[TYPES.ICE][TYPES.FAIRY] = 1

tmp_types_relations[TYPES.DRAGON][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.FIGHTING] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.FLYING] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.POISON] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.GROUND] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.ROCK] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.BUG] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.GHOST] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.DRAGON][TYPES.FIRE] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.WATER] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.GRASS] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.ICE] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.DRAGON] = 2
tmp_types_relations[TYPES.DRAGON][TYPES.DARK] = 1
tmp_types_relations[TYPES.DRAGON][TYPES.FAIRY] = 0

tmp_types_relations[TYPES.DARK][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.DARK][TYPES.FIGHTING] = 0.5
tmp_types_relations[TYPES.DARK][TYPES.FLYING] = 1
tmp_types_relations[TYPES.DARK][TYPES.POISON] = 1
tmp_types_relations[TYPES.DARK][TYPES.GROUND] = 1
tmp_types_relations[TYPES.DARK][TYPES.ROCK] = 1
tmp_types_relations[TYPES.DARK][TYPES.BUG] = 1
tmp_types_relations[TYPES.DARK][TYPES.GHOST] = 2
tmp_types_relations[TYPES.DARK][TYPES.STEEL] = 1
tmp_types_relations[TYPES.DARK][TYPES.FIRE] = 1
tmp_types_relations[TYPES.DARK][TYPES.WATER] = 1
tmp_types_relations[TYPES.DARK][TYPES.GRASS] = 1
tmp_types_relations[TYPES.DARK][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.DARK][TYPES.PSYCHIC] = 2
tmp_types_relations[TYPES.DARK][TYPES.ICE] = 1
tmp_types_relations[TYPES.DARK][TYPES.DRAGON] = 1
tmp_types_relations[TYPES.DARK][TYPES.DARK] = 0.5
tmp_types_relations[TYPES.DARK][TYPES.FAIRY] = 0.5

tmp_types_relations[TYPES.FAIRY][TYPES.NORMAL] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.FIGHTING] = 2
tmp_types_relations[TYPES.FAIRY][TYPES.FLYING] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.POISON] = 0.5
tmp_types_relations[TYPES.FAIRY][TYPES.GROUND] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.ROCK] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.BUG] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.STEEL] = 0.5
tmp_types_relations[TYPES.FAIRY][TYPES.FIRE] = 0.5
tmp_types_relations[TYPES.FAIRY][TYPES.WATER] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.GRASS] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.ELECTRIC] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.PSYCHIC] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.ICE] = 1
tmp_types_relations[TYPES.FAIRY][TYPES.DRAGON] = 2
tmp_types_relations[TYPES.FAIRY][TYPES.DARK] = 2
tmp_types_relations[TYPES.FAIRY][TYPES.FAIRY] = 1

export const TYPES_RELATIONS = [...tmp_types_relations]
