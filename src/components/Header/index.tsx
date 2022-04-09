import * as SC from './styles'
import Logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <SC.Header>
      <img
        src={Logo}
        alt="Logo escrito Squid na cor rosa"
        className="img-fluid"
      />
    </SC.Header>
  )
}

export default Header
