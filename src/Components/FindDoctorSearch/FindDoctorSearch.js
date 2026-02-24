import React, { useState } from 'react';
import './FindDoctorSearch.css';

const initSpeciality = [
    'Dentist',
    'Gynecologist/obstetrician',
    'General Physician',
    'Dermatologist',
    'Ear-nose-throat (ent) Specialist',
    'Homeopath',
    'Ayurveda'
];

const FindDoctorSearch = ({ onSelectSpeciality }) => {

    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities] = useState(initSpeciality);

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);

        // Instead of navigating, inform parent
        if (onSelectSpeciality) {
            onSelectSpeciality(speciality);
        }
    };

    return (
        <div className='finddoctor'>
            <center>
                <h1>Find a Doctor</h1>

                <div className="home-search-container" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div className="doctor-search-box">

                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search doctors by speciality"
                            onFocus={() => setDoctorResultHidden(false)}
                            onBlur={() => setTimeout(() => setDoctorResultHidden(true), 200)}
                            value={searchDoctor}
                            onChange={(e) => setSearchDoctor(e.target.value)}
                        />

                        <div className="findiconimg">
                            🔍
                        </div>

                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities
                                    .filter(spec =>
                                        spec.toLowerCase().includes(searchDoctor.toLowerCase())
                                    )
                                    .map(speciality => (
                                        <div
                                            className="search-doctor-result-item"
                                            key={speciality}
                                            onMouseDown={() => handleDoctorSelect(speciality)}
                                        >
                                            <span>🔎</span>
                                            <span>{speciality}</span>
                                            <span>SPECIALITY</span>
                                        </div>
                                    ))
                            }
                        </div>

                    </div>
                </div>
            </center>
        </div>
    );
};

export default FindDoctorSearch;