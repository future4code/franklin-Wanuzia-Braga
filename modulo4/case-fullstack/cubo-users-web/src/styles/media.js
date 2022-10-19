import style from './style'

const media = {
  phone: `(max-width: ${style.screen.xs})`,
  mobile: `(max-width: ${style.screen.sm})`,
  tablet: `(min-width: ${style.screen.xs})`,
  desktop: `(min-width: ${style.screen.desktop})`,
  sm: `(min-width: ${style.screen.sm})`,
  mm: `(min-width: ${style.screen.mm})`,
  md: `(min-width: ${style.screen.md})`,
  lg: `(min-width: ${style.screen.lg})`,
}

export default media