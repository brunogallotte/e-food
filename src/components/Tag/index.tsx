import { TagContainer, TagLink } from './styles'

type Props = {
  type: 'tag' | 'link'
  title: string
  to?: string
  onClick?: () => void
  children: string
}

// const Tag = ({ type, title, to, onClick, children }: Props) => {
//   if (type === 'tag') {
//     return (
//       <TagContainer type="tag" title={title} onClick={onClick}>
//         {children}
//       </TagContainer>
//     )
//   }

//   return (
//     <TagLink to={to as string} title={title}>
//       {children}
//     </TagLink>
//   )
// }

// export default Tag
