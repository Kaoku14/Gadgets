import React from 'react';
import '../About/app.css';
import { useNavigate } from 'react-router-dom';
import EmployeeInfo from '../Employees';


const urls = [
    {
      path: 'employees',
      element: <EmployeeInfo/>
    },
]


function About() {

    
  const navigate = useNavigate();
  return (
    <div className="about-page">
        <div className='butt'>
<button className='briggs' onClick={() => navigate('/home')}>Home</button>
<button className='briggs' onClick={() => navigate('employees')}>Add Staff</button>
</div>
      <h1>About Us</h1>
      <p>
        
      Here, customer satisfaction is paramount. Our friendly and knowledgeable staff takes the time to understand your specific needs and preferences. Whether you're a seasoned tech enthusiast or a first-time buyer, we offer clear and informative guidance, assisting you in finding the perfect electronics that seamlessly integrate into your life. We believe in offering a diverse selection of high-quality electronics from reputable brands. From the latest smartphones and laptops to cutting-edge home entertainment systems and essential accessories, we carry a comprehensive range of products to cater to every budget and technological requirement. Does your trusty gadget need a second chance? Our skilled technicians possess extensive expertise in diagnosing and repairing a wide variety of electronic devices. We utilize cutting-edge technology and genuine parts to ensure your equipment is restored to its former glory, saving you the cost of purchasing a new device altogether.  We understand that navigating the world of electronics can sometimes feel overwhelming. At Ken's Electronics, we foster a welcoming and comfortable atmosphere. Our staff is approachable and eager to answer any questions you may have, providing clear explanations and personalized recommendations. We strive to make your shopping experience enjoyable and stress-free.
      </p>
    </div>
  );
}

export default About;
