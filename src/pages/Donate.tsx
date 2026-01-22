import DonationInfo from "../components/DonationInfo";
import SecureInfo from "../components/SecureInfo";
import UseInfo from "../components/UseInfo";
import styles from "./Donate.module.css"
import { useState } from "react";
function Donate() {

    const [selectedAmount, setSelectedAmount] = useState<number | null>(0);
    const [customAmount, setCustomAmount] = useState<string>("");

    const handlePresetClick = (amount: number) => {
        setSelectedAmount(amount);
        setCustomAmount(amount.toString()); // Clear custom amount if preset selected
    };

    const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCustomAmount(value);

        const numeric = parseFloat(value);
        setSelectedAmount(isNaN(numeric) ? null : numeric);
    };

    const handleDonate = async () => {
        if (selectedAmount && selectedAmount > 0) {
            alert(`Donating $${selectedAmount.toFixed(2)}`);
            alert('ERR: Donation payment system not integrated');
            const res = await fetch("/api/create-checkout-session", { 
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: selectedAmount })
             });
            const data = await res.json();

            if (data.url) {
                window.location.href = data.url;
            }
        } 
        else {
            alert("Please enter or select a valid amount.");
        }
    };

    return ( 
    <>
        <div className="main-background">
            <div className={styles['donate-layout']}>
                <div className={styles['donate-system']}>
                    Make a Donation
                    <div className={styles['help-message']}>Every dollar helps us provide meals and support to those in need</div>
                    <div className={styles['donate-card']}>
                        <div style={{textAlign: 'start', marginBottom: '2rem'}}>Choose your impact</div>
                        <div className={styles['button-grid']}>
                            <button className={styles["donation-btn"]} onClick={() => handlePresetClick(2)}>
                                $2
                                <div className={styles['dollar-desc']}>1 meal</div>
                            </button>
                            <button className={styles["donation-btn"]} onClick={() => handlePresetClick(4)}>
                                $4
                                <div className={styles['dollar-desc']}>2 meals</div>
                            </button>
                            <button className={styles["donation-btn"]} onClick={() => handlePresetClick(8)}>
                                $8
                                <div className={styles['dollar-desc']}>4 meals</div>
                            </button>
                            <button className={styles["donation-btn"]} onClick={() => handlePresetClick(16)}>
                                $16
                                <div className={styles['dollar-desc']}>8 meals</div>
                            </button>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', margin: '2rem 0'}}>
                            <label className={styles['dollar-desc']} style={{textAlign: 'start'}}>Enter Custom Amount:</label>
                            <div className={styles['input-container']} style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                                <div className={`${styles['dollar-desc']} ${styles['sign-pos']}`}>$</div>
                                <input className={styles['custom-amount-card']} type="number" id="customAmount" name="customAmount" min="1" placeholder="e.g., 25" value={customAmount} onChange={handleCustomChange}/>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', margin: '2rem 0'}}>
                            <div style={{textAlign: 'start', fontSize: '1.25rem'}}>Donor Information (Optional)</div>
                            <div className={styles['donor-grid']}>
                                <div className={styles['dollar-desc']} style={{textAlign: 'start'}}>Full Name</div>
                                <div className={styles['dollar-desc']} style={{textAlign: 'start'}}>Email</div>
                                <input className={styles['donor-input']} placeholder="Your name"/>
                                <input className={styles['donor-input']} placeholder="your@email.com"/>
                            </div>
                        </div>
                        <div className={styles['stripe-placeholder']}>
                            Payment form will be integrated here
                        </div>
                        <div>
                            <button className={styles['donate-button']} onClick={() => handleDonate()}>Donate ${selectedAmount}</button>
                        </div>
                    </div>
                </div>
                <div className={styles['donate-info']}>
                    <DonationInfo/>
                    <SecureInfo/>
                    <UseInfo/>
                </div>
            </div>
        </div>
    </>
    )
}

export default Donate;