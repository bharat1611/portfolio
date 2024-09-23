import React from 'react'
import './services.css'
import {AiOutlineRightCircle} from 'react-icons/ai'


const Services = () => {
  return (
    <div>
      <section id="services">
        <h5>What I have done</h5>
        <h2>Experience</h2>

        
        <div className="container services__container">


        {/* SDE exp start */}
        <article className = "service">
        <div className = "service__head">
          <h3>Software Developer Engineer - L2 at HummingBird Web Solutions</h3>
          <h5>Jul 2024 - Present</h5>
        </div>

        <ul className = "service__list">
          <li>
            <AiOutlineRightCircle className = 'service__list-icon'/>
            <p>Architect and deliver web applications for B2B clients using React.js, Express, Node.js, and Nginx, optimizing performance, scalability, and user experience.</p>
          </li>
          <li>
            <AiOutlineRightCircle className = 'service__list-icon'/>
            <p>Leverage AWS services (EC2, S3) for hosting and deploying client applications, driving enhanced reliability and deployment efficiency.</p>
          </li>
          <li>
            <AiOutlineRightCircle className = 'service__list-icon'/>
            <p>Optimize deployment processes by architecting and maintaining CI/CD pipelines with AWS services such as EC2, S3, and Lambda, achieving a considerable reduction in deployment time.</p>
          </li>
          <li>
            <AiOutlineRightCircle className = 'service__list-icon'/>
            <p>Ensure high availability and performance of company websites by managing backend servers using Nginx and Apache, implementing automated monitoring and alerting solutions, improving system reliability.</p>
          </li>
        </ul>
      </article>
      {/* SDE exp end  */}


                  
        {/* Data Science Intern */}
        <article className="service">
          <div className="service__head">
            <h3>Data Science Intern at GEU</h3>
            <h5>Aug 2023 - Dec 2023</h5>
          </div>

          <ul className="service__list">
            <li>
              <AiOutlineRightCircle className="service__list-icon" />
              <p>Formulated a customer churn prediction model using Random Forests and XGBoost, analyzing customer behavior and transaction data to identify high-risk users, improving retention efforts.</p>
            </li>
            <li>
              <AiOutlineRightCircle className="service__list-icon" />
              <p>Utilized Python (Pandas, scikit-learn) for data preprocessing, feature engineering, and model optimization, for prediction accuracy.</p>
            </li>
            <li>
              <AiOutlineRightCircle className="service__list-icon" />
              <p>Collaborated with professors and researchers to interpret complex datasets, ensuring data quality through effective cleaning and preprocessing techniques.</p>
            </li>
            <li>
              <AiOutlineRightCircle className="service__list-icon" />
              <p>Applied machine learning algorithms to extract valuable patterns, providing actionable insights for business strategies and optimization.</p>
            </li>
            <li>
              <AiOutlineRightCircle className="service__list-icon" />
              <p>Effectively communicated findings through detailed reports and visualizations to key stakeholders.</p>
            </li>
          </ul>
        </article>
          {/* data science end */}

          {/* Aptcoder heading */}
          {/* <article className = "service">
            <div className = "service__head">
              <h3>Technical Content Developer At APTCoder</h3>
              <h5>Feb 2023-Aug 2023</h5>

            </div>
            <ul className = "service__list">
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Collaborating with subject matter experts to actively research and develop engaging technical articles and tutorials.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Authoring and editing content related to various frameworks, programming languages, cloud services and emerging technologies.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Conducting in-depth reviews of existing projects, ensuring accuracy, clarity, and adherence to industry standards.</p>
              </li>
              <li>
                <AiOutlineRightCircle className = 'service__list-icon'/>
                <p>Gaining valuable insights into content marketing strategies and audience targeting in the Tech industry.</p>
              </li>
            </ul>
          </article> */}
          {/*  aptcoder end */}



        </div>
      </section>
    </div>
  )
}

export default Services
