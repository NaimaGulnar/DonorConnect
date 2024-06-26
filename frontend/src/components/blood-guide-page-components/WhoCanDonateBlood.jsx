/* eslint-disable react/no-unescaped-entities */

import canYouDonateBlood from "../../assets/can-you-donate-blood.jpg"

export default function WhoCanDonateBlood() {
    return (
        <div className="blood-guide-section">
            <h1 >Who Can Donate Blood?</h1>
            <h3>Generally, individuals who meet certain eligibility criteria can donate blood. While specific criteria may vary slightly depending on the country and blood donation organization, here's a general overview of who can donate blood:</h3>
            <div>
                <img src={canYouDonateBlood} />
                <ul>
                    <li>Weight should not be less than 45 kgs.</li>
                    <li>Age should be between 18 and 65.</li>
                    <li>Haemoglobin should be not less than 12.5 grams.</li>
                    <li>Blood pressure, pulse and temperature should be within normal limits for the age group.</li>
                    <li>Donors must be in good general health on the day of donation, without any acute or chronic illnesses.</li>
                    <li>The donor should not be having any form of cancer or heart disease or TB or HIV or any kind of chronic disease.</li>
                    <li>Pregnant individuals and those who are breastfeeding are typically deferred from donating blood.</li>
                    <li>Recent vaccinations may affect eligibility, especially live vaccines.</li>
                </ul>
            </div>
        </div >
    )
}