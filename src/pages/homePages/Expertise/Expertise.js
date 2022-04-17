import './Expertise.css'
import React, { useState } from 'react';
import AwardsExpertise from './EducationalExpertise/AwardsExpertise/AwardsExpertise';
import EducationalExpertise from './EducationalExpertise/EducationalExpertise';
import ExperienceExpertise from './EducationalExpertise/ExperienceExpertise/ExperienceExpertise';

const Expertise = () => {
    const [awardsLoaded, setAwardsLoaded] = useState(true);
    const [educationLoaded, setEducationLoaded] = useState(false);
    const [experienceLoaded, setExperienceLoaded] = useState(false);

    const handleLoading = (e) => {
        const clickedOn = e.target.innerHTML;
        // console.log(clickedOn);
        if (clickedOn === 'Awards') {
            setAwardsLoaded(true);
            setEducationLoaded(false);
            setExperienceLoaded(false);
        } else if (clickedOn === 'Education') {
            setAwardsLoaded(false);
            setEducationLoaded(true);
            setExperienceLoaded(false);
        } else if (clickedOn === 'Experience') {
            setAwardsLoaded(false);
            setEducationLoaded(false);
            setExperienceLoaded(true);
        }
    }
    return (
        <section className='py-5 p-md-5'>
            <div className="container  mb-5">
                <div className="sectionHeading text-center mb-5">
                    <h2>My Expertise & Extra Activity</h2>
                    <hr className="w-25 mx-auto" style={{ color: "#F98080", height: "2px" }} />
                </div>

                <div className="py-5 p-md-5 shadow">
                    <div className='text-center mb-4'>
                    <strong className={`pb-2 cursor-pointer ${educationLoaded && 'customText-F98080'}`} onClick={handleLoading}>Education</strong>
                    <strong className={`mx-1 mx-md-4 cursor-pointer pb-2 ${awardsLoaded && 'customText-F98080'}`} onClick={handleLoading} >Awards</strong>
                    <strong className={`pb-2 cursor-pointer ${experienceLoaded && 'customText-F98080'}`} onClick={handleLoading}>Experience</strong>
                    </div>
                    <div className="p-3 p-md-5">
                        {
                            awardsLoaded && <AwardsExpertise />
                        }
                        {
                            educationLoaded && <EducationalExpertise />
                        }
                        {
                            experienceLoaded && <ExperienceExpertise />
                        }

                        {/* <EducationalExpertise /> */}
                        {/* <AwardsExpertise /> */}
                        {/* <ExperienceExpertise /> */}
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Expertise;