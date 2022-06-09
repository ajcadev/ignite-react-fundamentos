import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.scss'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
  hasBorder?: boolean
}
export function Avatar({ hasBorder=true, ...props }: AvatarProps) {
  return (
    <img
      className={ hasBorder ? styles.avatarWithBorder : styles.avatar }
      {...props}
    />
  )
}

// Observe que o retorno do componente Avatar em uma img
// Aqui estamos fazendo desestruturação usando rest operator(...pros)
// O que significa que todas as propriedades do elemento img estão
// sendo capturadas no objeto props e depois sendo repassadas ao elemento img.
// Isso nos dá a flexibilidade de no momento de invocar o componente Avatar
// invocá-lo com uma, algumas ou todas as propriedades de um elemento img!!!
// Observe que essa flexibilidade foi possível devido à interface AvatarProps