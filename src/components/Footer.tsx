import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footerText">
            <h2>LinKsCorp<sup>FinTech</sup></h2>
        </div>
        <ul>
            <li>
                <a href="https://x.com/i/lists/1734379877099360479?t=1k86LSd7exJ7fxL2hG-N4Q&s=09">
                <img src='../src/assets/twitter.png' alt='twitter logo'/>
                </a>
            </li>
            <li>
                <a href="https://chat.whatsapp.com/EMWNkk0ebB3BgBWA276hsU">
                <img src='../src/assets/whatsapp.png' alt='whatsapp logo'/>
                </a>
            </li>
            <li>
                <a href="https://t.me/Crypto_CircleC">
                    <img src='../src/assets/telegram.png' alt='telegram logo'/>
                </a>
            </li>

        </ul>

    </div>
  )
}

export default Footer