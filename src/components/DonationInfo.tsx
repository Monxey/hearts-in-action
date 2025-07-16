import { Heart} from "lucide-react";

import './DonationInfo.css'
import DonationProgress from "./DonationProgress";
function DonationInfo() {

    const raisedAmount = 0;
    const donorAmount= 0;
    const mealAmount = 0;

    const goalAmount = 25000;

    return (
        <div className='donate-info-card'>
            <div className='info-header'>
                <Heart />
                Our Impact So Far
            </div>
            <div className='value-body'>
                <div className='value-description'>
                    <div style={{ fontSize: '1.5rem', color: 'var(--brand-secondary)', fontWeight: 'bold' }}>${raisedAmount}</div>
                    <div>Total Raised</div>
                </div>
                <div className='value-description'>
                    <div style={{ fontSize: '1.5rem', color: 'var(--brand-secondary)', fontWeight: 'bold' }}>{donorAmount}</div>
                    <div>Donors</div>
                </div>
                <div className='value-description'>
                    <div style={{ fontSize: '1.5rem', color: 'var(--brand-secondary)', fontWeight: 'bold' }}>{mealAmount}</div>
                    <div>Meals Provided</div>
                </div>
            </div>
            <DonationProgress current={raisedAmount} goal={goalAmount}/>
        </div>
    )
}

export default DonationInfo;