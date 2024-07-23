import '../styles/BankTransfer.css';

const BankTransfer = () => {
  return (
    <div className="bank-transfer">
      <header className="header">
        <div className="header-title">Bank Transfer</div>
        <div className="breadcrumb">
          <a href="/">Home</a> &gt; <span>Bank Transfer</span>
        </div>
      </header>
      <main className="main-content">
        <p className="instruction">
          MAKE A ONE TIME PAYMENT OF N1000 AND SUBMIT YOUR SCREENSHOT PROOF, USING THE BUTTON BELOW...
        </p>
        <div className="payment-info">
          <div className="price-info">
            <span className="invalid-price">✘N9000</span> | 
            <span className="valid-price"> PAY 1000✔</span>
          </div>
          <p className="amount">One Thousand Naira Only.</p>
          <div className="bank-details">
            <img src="/path-to-your-image/uba-logo.png" alt="UBA Logo" className="bank-logo"/>
            <p className="account-number">2162949544</p>
            <p className="account-name">OLUJIMI ABDULRAHEEM SHOLARIN</p>
          </div>
          <button className="submit-proof-button">SUBMIT PROOF OF PAYMENT</button>
        </div>
      </main>
      <footer className="footer">
        <img src="/path-to-your-image/satisfaction-guarantee.png" alt="Satisfaction Guarantee" className="guarantee-badge"/>
      </footer>
    </div>
  );
};

export default BankTransfer;
