import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerText">
            <h2>LinX Corp<sup>FinTech</sup></h2>
        </div>
        <ul>
            <li>
                <a href="https://x.com/i/lists/1734379877099360479?t=1k86LSd7exJ7fxL2hG-N4Q&s=09">
                <img src='https://static.vecteezy.com/system/resources/previews/027/395/710/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png' alt='twitter logo'/>
                </a>
            </li>
            <li>
                <a href="https://chat.whatsapp.com/EMWNkk0ebB3BgBWA276hsU">
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png?20200503174721' alt='whatsapp logo'/>
                </a>
            </li>
            <li>
                <a href="https://t.me/Crypto_CircleC">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Telegram_font_awesome.svg/1024px-Telegram_font_awesome.svg.png' alt='telegram logo'/>
                </a>
            </li>

        </ul>

    </div>
  )
}

export default Footer