import './styles.css';

export function Button({ children, ...props }) {
  return <button className='styled-button' {...props} >{children}</button>
}