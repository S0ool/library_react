import LOGO from '../../LOGO.bmp'

export default function Header(){
    return (
        <header>
            <a>Home</a>
            <a>About</a>
            <a>Review</a>
            <a>Phone: &?*$#$%#?*</a>
            <a>Mail: @#$%&*?!%@#</a>
            <img className={'logo'} src={LOGO}/>
        </header>
    )
}