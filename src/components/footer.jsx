import facebook from '../../public/facebook.webp'
import instagram from '../../public/instagram.webp'
import telegram from '../../public/telegram.webp'

export default function Footer(){
    return (
        <>
            <footer>
                <div>
                    <img src={facebook} alt=""/>
                    <p>Facebook</p>
                </div>
                <div>
                    <img src={instagram} alt=""/>
                    <p>Instagram</p>
                </div>
                <div>
                    <img src={telegram} alt=""/>
                    <p>Telegram</p>
                </div>
            </footer>
        </>
    )
}