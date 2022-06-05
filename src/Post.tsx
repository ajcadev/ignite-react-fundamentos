type PostProps = {
  author: string
  content: string
}
export function Post({ author, content }: PostProps){
  return (
    <>
      <p>{author}</p>
      <p>{content}</p>
    </>
  )
}