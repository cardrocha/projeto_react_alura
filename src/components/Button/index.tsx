type Props = {
  type: 'button'
  title: string
  onclick?: () => void
  children: string
}

const Button = ({ type, title, children, onclick }: Props) => (
  <button title={title} type={type} onClick={onclick}>
    {children}
  </button>
)
export default Button
