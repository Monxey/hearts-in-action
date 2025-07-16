import { Shield } from "lucide-react"; 
import './SecureInfo.css'
function SecureInfo() {
    return (
        <div className='secure-info-card'>
            <div className='info-header'>
                <Shield/>
                Secure Donations
            </div>
            <p className='secure-info-desc'>Your donation is secure and encrypted. We never store your payment information. All transactions are processed through industry-standard secure payment processors.</p>
        </div>
    )
}

export default SecureInfo;