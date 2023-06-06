type Props = {
  type: 'button'
  onclick?: () => void
  children: string
}

const Button = ({ type, children, onclick }: Props) => (
  <button type={type} onClick={onclick}>
    {children}
  </button>
)
export default Button
