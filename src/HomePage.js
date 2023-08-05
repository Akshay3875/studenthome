import React, { useEffect, useState } from 'react';
import './HomePage.css';

const HeaderImage = () => {
  return (
    <div className="header-image">
      <img src="Student 2.jpg" alt="Consultancy Header" className='hdimg' />
    </div>
  );
};

const HomePage = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  return (
    <div className={`homepage ${isAnimated ? 'animate' : ''}`}>
      <HeaderImage />
      <header>
        <h1>Welcome to Our Consultancy</h1>
      </header>
      <div className={`banner ${isAnimated ? 'animate' : ''}`}>
        <p>Join our consultancy and unlock your potential!</p>
      </div>
      <section className={`student-section ${isAnimated ? 'animate' : ''}`}>
        <div className={`student-info ${isAnimated ? 'animate' : ''}`}>
          <h2>Are You a Student?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam a nisl vel mi luctus ullamcorper. Proin sit amet
            neque nec nunc venenatis vehicula eget nec justo.
          </p>
          <button className="cta-button">Learn More</button>
        </div>
        <div className={`student-image ${isAnimated ? 'animate' : ''}`}>
          <img src="student 1.jpeg" alt="Student"/>
        </div>
      </section>
      <section className={`colleague-stories ${isAnimated ? 'animate' : ''}`}>
        <h2>Student Testimonials</h2>
        <div className="colleague-story">
          <img src="user.png" alt="Colleague 1" />
          <p>
            "The consultancy provided me with valuable insights and guidance
            that helped me advance in my career. I'm grateful for their support!"
          </p>
          <h4>John Doe</h4>
        </div>
        <div className="colleague-story">
          <img src="user.png" alt="Colleague 2" />
          <p>
            "The team at the consultancy is highly knowledgeable and approachable.
            They truly care about their colleagues' growth and success."
          </p>
          <h4>Jane Smith</h4>
        </div>
      </section>
      <section className={`services ${isAnimated ? 'animate' : ''}`}>
        <h2>Our Services</h2>
        <ul>
          <li>Resume Review and Optimization</li>
          <li>Interview Preparation</li>
          <li>Career Counseling</li>
          <li>Internship Placement</li>
          <li>Networking Opportunities</li>
        </ul>
      </section>
      <section className={`faq ${isAnimated ? 'animate' : ''}`}>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How can I apply for an internship through your consultancy?</h4>
          <p>
            Applying for an internship is simple! Just visit our Careers page,
            browse through the available internships, and click on the "Apply Now" button.
            You'll be redirected to the application form.
          </p>
        </div>
        <div className="faq-item">
          <h4>What makes your consultancy different from others?</h4>
          <p>
            Our consultancy focuses on providing personalized guidance and support to each colleague.
            We believe in empowering our colleagues to achieve their career goals and
            offer tailored services to meet their unique needs.
          </p>
        </div>
        {/* Add more FAQs here */}
      </section>
      <section className={`contact-section ${isAnimated ? 'animate' : ''}`}>
        <h2>Contact Us</h2>
        <p>
          Have questions or need more information? Don't hesitate to contact us.
        </p>
        <div className="contact-form">
          {/* Add a form component here for user input */}
        </div>
      </section>
      <section className={`search-jobs ${isAnimated ? 'animate' : ''}`}>
        <h2>Find Your Ideal Job</h2>
        <button className="search-jobs-button">
          Search Jobs <span role="img" aria-label="magnifying-glass">🔍</span>
        </button>
      </section>
    </div>
  );
};

export default HomePage;
