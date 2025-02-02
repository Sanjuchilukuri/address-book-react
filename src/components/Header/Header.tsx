import HeaderCss from './Header.module.scss';

function Header() {
  return (
    <header className={`bg-sky-blue d-flex align-items-center ${HeaderCss['header']}`}>
        <p className='text-white display-3 px-3 fw-light'>Address Book</p>
    </header>
  )
}

export default Header