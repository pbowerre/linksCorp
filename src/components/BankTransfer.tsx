import '../styles/BankTransfer.css';
import satisfaction from '../../src/assets/satisfaction.png'
const BankTransfer = () => {
    const phoneNumber = "+639925931734"
    const message = "Hey LinX Corp i have made a transfer and would love to share the receipt"
    const handleClick = () => {
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.location.href = url;
      };
  return (
    <div className="bank-transfer">
      <header className="headers">
        <div className="header-title">Bank Transfer</div>
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <span>Bank Transfer</span>
        </div>
      </header>
      <div className="main-content">
        <p className="instruction">
          MAKE A ONE TIME PAYMENT OF N1000 AND SUBMIT YOUR SCREENSHOT PROOF, USING THE BUTTON BELOW...
        </p>
        <div className="payment-info">
          <div className="price-info">
            <span className="invalid-price">✘N20000</span> | 
            <span className="valid-price"> PAY 1000✔</span>
          </div>
          <p className="amount">One Thousand Naira Only.</p>
          <p className="amount">Expires in one Week</p>
          <div className="bank-details">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9e/Moniepointlogo.png" alt="MoniePoint Logo" className="bank-logo"/>
            <p className="account-number">9035935118</p>
            <p className="account-name">Damien Adikea</p>
          </div>
          <button className="submit-proof-button" onClick={handleClick}>SUBMIT PROOF OF PAYMENT</button>
        </div>
      </div>
      <footer className="footers">
        <img src={satisfaction} alt="Satisfaction Guarantee" className="guarantee-badge"/>
      </footer>
    </div>
  );
};

export default BankTransfer;
