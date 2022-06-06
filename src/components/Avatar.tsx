import styles from './Avatar.module.scss'

type AvatarProps = {
  src: string
  hasBorder?: boolean
}
export function Avatar({src, hasBorder=true}: AvatarProps) {
  return (
    <img
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar }
      src={ src }
    />
  )
}