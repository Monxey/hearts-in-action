import React from "react";
import '../App.css';

interface DonationProgressProps {
    current: number; // e.g. 320
    goal: number;    // e.g. 500
}

const DonationProgress: React.FC<DonationProgressProps> = ({ current, goal }) => {
    const progress = Math.min((current / goal) * 100, 100);

    return (
        <div style={{ maxWidth: "100%", margin: "0.5rem 0" }}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', justifyContent: 'center', alignItems: 'center'}}>
                <p style={{textAlign: 'start' }}>
                    Progress to ${goal} goal
                </p>
                <p style={{textAlign: 'end'}}>{((Number(current) / Number(goal)) * 100).toFixed(1)}%</p>
            </div>
            <div style={{
                height: "1rem",
                background: "var(--brand-dark-outline)",
                borderRadius: "0.5rem",
                overflow: "hidden",
            }}>
                <div
                    style={{
                        width: `${progress}%`,
                        background: "var(--brand-secondary)",
                        height: "100%",
                        transition: "width 0.3s ease"
                    }}
                />
            </div>
        </div>
    );
};

export default DonationProgress;
