import { CircleDollarSign } from "lucide-react"; 
import './UseInfo.css'
function UseInfo() {
    return (
        <div className='use-info-card'>
            <div className='info-header'>
                <CircleDollarSign/>
                How we use your donations
            </div>
            <p className='use-info-desc'>Mini-Pantry Restocking</p>
            <p className='use-info-desc'>Clothing Drives</p>
            <p className='use-info-desc'>Educational Supplies</p>
        </div>
    )
}

export default UseInfo;