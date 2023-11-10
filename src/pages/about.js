import React from "react";
import Card from 'react-bootstrap/Card';
// Possible Treatments -- what we would do with more time and and how it works
// 
//
//

const About = () => {
	return (
        <div class="container">
        <section class="section1">
        <div class="box-main1">
            <div class="firstHalf">
            <Card class="cardQuote">
            <Card.Header>Treatment Statistics</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    "In 2021, 94% of people aged 12 or older with a substance use disorder did not receive any treatment. Nearly all people with a substance use disorder who did not get treatment at a specialty facility did not think they needed treatment."{' '}
                </p>
                <footer className="blockquote-footer">
                SAMHSA <cite title="Source Title">SAMHSA Announces National Survey on Drug Use and Health (NSDUH) Results Detailing Mental Illness and Substance Use Levels in 2021</cite>
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
            </div>

            <div class="img1">
                <img src={'https://cdn-prod.medicalnewstoday.com/content/images/articles/323/323468/stop-drugs.jpg'} alt="Image Not Found!" style={{height:300, width:400}}/>
            </div>
        </div>

        <div class= "secondHalf">
                <p class="text-small2">
                    Whether the lack of people using treatment be because of a refusal to go, or a belief that they don't need treatment, for the vast majority of people with SUD's, treatment just doesn't seem feasible. People don't know about the many different treatment options available to the public. Everyone just thinks that there is AA for those with Alcoholism, and basic Rehabilitation fascilities. The truth is that there are treatment and rehab programs for everyone, its just a matter of finding what fits you best.
                </p>
            <div class="img2">
                <img src={'https://www.nssbehavioralhealth.com/wp-content/uploads/2020/03/Large-Group-Therapy-Session-Blog.png'} alt="Image Not Found!" style={{height: 350, width:650}}/>
            </div>
        </div>

        <div class="firstHalf2">
            <div class="img3">
                <img src={'https://dailyreckoning.com/wp-content/uploads/2020/06/22Stocks-Only-Go-Up22.png'} alt="Image Not Found!" style={{height: 300, width:450}}/>
                <p class="text-small3">
                    To remedy this, we've created an amalgamation of possible treatment options, and their defining characteristics. All in an effort to help inform the public, and raise the number of people going to treatment. Drugs are regarded as a voodoo topic both in school and out of it. This project is an attempt to provide information straight up; no stigma involved for anyone.
                </p>
        </div>
        </div>

    </section>
    </div>
	);
};

export default About;
