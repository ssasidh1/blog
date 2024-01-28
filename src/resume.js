import React from 'react'
import styles from './css/resume.module.css'
import EmailIcon from '@mui/icons-material/Email';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
function Resume() {
  return (
    <div className={styles['body']}>
      <div className={styles['sheet']}>
      <div className={styles['contact']}>
        <EmailIcon sx={{color:'black'}}/>
        <a className={styles['mail']} >srinidhisasidharan99@gmail.com</a>
        <SmartphoneIcon className={styles['phoneIcon']} sx={{color:'black', height:'1.25rem'}}/>
        <a className={styles['phone']}>+1(607)235-8259</a>
        </div >
        <div  className={styles['links']}>
            <LinkedInIcon className={styles['icon']} sx={{color:'black'}}/>
            <a className={styles['linkedin']} href='https://www.linkedin.com/in/srinidhi-sasidharan'>LinkedIn</a>
            <GitHubIcon  className={styles['icon']} sx={{color:'black'}}/>
            <a className={styles['github']} href='https://github.com/ssasidh1'>Github</a>
            <LanguageIcon className={styles['icon']} sx={{color:'black'}}/>
            <a className={styles['portfolio']} href='https://voyages.nidhiworks.com' >Portfolio</a>
        </div>
        <div className={styles['education']}>
                <div className={styles['headers']} >EDUCATION</div>
                <div className={styles['binghamton']}>
                    <div className={styles['title']}>Binghamton University, State University of New York, Thomas J. Watson College of Engineering and Applied Science</div>
                    <div className={styles['course']}>Master of Science in Computer Science, Cumulative GPA: 3.7/4.00
                    <div className={styles['graduation']}>Expected May 2024</div>
                    </div>
                    <div className={styles['related']}>
                    Design and Analysis of algorithms, Machine Learning, Computer Architecture, Operating Systems, Web-Programming, Cloud Computing, Programming Languages, Design Patterns and Database Systems.</div>
                </div>
                <div className={styles['anna']}>
                    <div className={styles['title']}>Anna University, India</div>
                    <div className={styles['course']}>Bachelor of Science in Computer Science, Cumulative GPA: 8.4/10.0
                    <div className={styles['graduation']}>April 2020</div>
                    </div>
                    <div className={styles['related']}>Advanced Computer Architecture, Computer Networks, OOPS and Data Structures.</div>
                </div>
            </div>
                <div className={styles['tech']}>
                    <div className={styles['headers']}>TECHNICAL SKILLS</div>
                   <table className={styles['tech-table']}>
                    <tr>
                        <td className={styles['tech-title']}>Languages:  </td>
                        <td>Java, C#, C, C++, Python, JavaScript, TypeScript, Haskell</td>
                    </tr>
                    <tr>
                        <td className={styles['tech-title']}>Software & OS:&ensp;&ensp;</td>
                        <td>VS Code, Eclipse, Jira, QTest, SSMS, SSRS, Git, Code,Windows, Unix, linux</td>
                    </tr>
                    <tr>
                        <td className={styles['tech-title']}>Additional:&ensp;</td>
                        <td>NodeJS, ReactJS, redux, Kubernetes, AWS, Oracle SQL, SQL-Server, MongoDB, Azure, GCP, AWS.</td>
                    </tr>
                    <tr>
                        <td className={styles['tech-title']}>Certifications:  </td>
                        <td>AWS Certified Developer Associate, 87.5% in CLAD (Certified LabVIEW Associate Developer) in May 2019.</td>
                    </tr>
                   </table>
                </div>
                <div className={styles['experience']}>
                    <div className={styles['headers']}>PROJECT EXPERIENCE</div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>Grovify,</div>
                            <div className={styles['collab']}>Web developer, Independent Project,</div>
                            <a className={styles['prj-url']} href="https://grovify.nidhiworks.com"><OpenInNewIcon sx={{color:"black", height:"1rem"}}/></a>
                        </div>
                        <ul>
                            <li>Engineered a Spotify-inspired music streaming application using ReactJS, AWS-S3, MongoDB, JWT, and NodeTS.</li>
                            <li>Implemented autoplay, favorites functionality, and custom playlist creation to enhance user experience.</li>
                            <li>Currently enhancing the application by integrating missing Spotify features, including nested playlists and playback history.</li>
                            <li>Developing a feature to seamlessly add currently liked songs to user-specified playlists, optimizing user customization.</li>
                            
                        </ul>
                    </div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>Binghamton University Parking Assistant,</div>
                            <div className={styles['collab']}>Team Member, Group Project</div>
                            
                        </div>
                        <ul>
                            <li>Collaborated in the development of a Smart Parking application utilizing AWS Rekognition, AWS Lambda, DynamoDB, Cognito, and React with TypeScript, HTML, and CSS.</li>
                            <li>Implemented a solution to identify available parking spots through our app, enhancing parking efficiency for users.</li>
                            <li>Implemented user-friendly features for pre-booking and real-time spot assignment within the application.</li>
                            <li>Developing ML models to predict parking spot availability using historical usage patterns for enhanced optimization.</li>
                            
                        </ul>
                    </div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>Leaf Decay Detection,</div>
                            <div className={styles['collab']}>Team Member, Group Project</div>
                            
                        </div>
                        <ul>
                            <li>Collaborated on leaf decay detection project using Python, ML models, and Kaggle dataset.</li>
                            <li>Achieved 97% accuracy with Support Vector Machine and 92% accuracy with Convolutional Neural Network.</li>
                            <li>Presented ML model to 100+ students and faculty members.</li>
                            
                        </ul>
                    </div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>RISC out-of-order with branch prediction,</div>
                            <div className={styles['collab']}>Developer, Independent Project</div>
                            
                        </div>
                        <ul>
                            <li>Simulated an out-of-order RISC processor with branch prediction to enhance instructions executed per second.</li>
                            <li>Implemented Load Store queue, Round Robin allocation, Register Renaming, and Data Dependencies using C programming.</li>
                            <li>Incorporated Branch Prediction to predict branch outcomes, reducing instruction pipeline stalls by 90%.</li>
                            
                        </ul>
                    </div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>RedPAl,</div>
                            <div className={styles['collab']}>Team Member, Group Project</div>
                           
                        </div>
                        <ul>
                            <li>Co-developed a heart monitoring wristwatch for the elderly using Raspberry Pi, Python, ReactJS, HTML, CSS etc.</li>
                            <li>Added features: temperature and fall detection, voice-assisted Google Assistant for home automation, and emergency buttons.</li>
                            <li>Enabled automatic audio recording during incidents or threats for quick response and documented in cloud securely.</li>
                            
                        </ul>
                    </div>
                </div>
                <div className={styles['experience']}>
                    <div className={styles['headers']}>PROFESSIONAL EXPERIENCE</div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>Binghamton University, </div>
                            <div className={styles['collab']}>Graduate Assistant, Binghamton, NY</div>
                        </div>
                        <ul>
                            <li>Developing an wearable ECG data transmission system utilizing Bluetooth Low Energy (BLE) through JTAG.</li>
                            <li>Configured BLE parameters like Generic Attribute Profile and Generic Access Profile for seamless communication.</li>
                            <li>Implemented low-energy Analog sensor polling utilizing ADC and comparator through TI Sensor Controller Studio</li>
                            <li>Developed python host application to plot the real-time ECG data using multiprocessing and other libraries.</li>
                            
                        </ul>
                    </div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>Infosys, </div>
                            <div className={styles['collab']}>Specialist Programmer, Chennai, India</div>
                            
                        </div>
                        <ul>
                            <li>Analyzed enterprise databases with Big Data technologies, Azure Synapse, and Data Warehouse.</li>
                            <li>Designed and implemented an automated testing tool, improved 85% efficiency in real-time data testing from kafka topics.</li>
                            <li>Contributed to a research project converting mapping documents to SQL tables using NLP and GPT-3 models.</li>
                            <li>Designed a government housing application UI using C#, TypeScript, AngularJS, and SQL Server.</li>
                            
                        </ul>
                    </div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>National Instruments,</div>
                            <div className={styles['collab']}>Student Intern, Bangalore, India</div>
                            
                        </div>
                        <ul>
                            <li>Designed a rear-view layout and obstacle detection for cars using image processing tools, CNN, producer-consumer semaphore,and state machine architecture.</li>
                        </ul>
                    </div>
                </div>
                <div className={styles['experience']}>
                    <div className={styles['headers']}>PATENT</div>
                    <div className={styles['prj']}>
                        <div className={styles['prj-title']}>
                            <div className={styles['title']}>Patent(RedPal) 202041014806 A,</div>
                        </div>
                        <ul>
                            <li>Published a patent in India titled “A portable wearable apparatus for Aged and isolated Monitoring System” and awarded a funding of $12K for product development.</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
    </div>
  )
}

export default Resume
