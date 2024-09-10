import React from 'react';
import Certification from "./Certification";

import bg from "../../images/images1/background-images/diego-ph-fIq0tET6llw-unsplash.jpg";
import yumdrop from "../../images/screenshots/yumdrop.png";
import railway from "../../images/screenshots/railway.png";

const Portfolio = () => {
  return (
    <div className="bg-cover bg-no-repeat flex flex-col p-5 rounded-[20px] bg-[#1abc9c]" style={{ backgroundImage: `url(${bg})` }}>
      <h2 className="text-center justify-center mt-0">Projects</h2>
      <div className="flex flex-wrap justify-between">
        
        {/* Project 1 */}
        <div className="w-[45%] mb-5 p-2.5 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-[5px]">
          <img src={yumdrop} alt="Project 2 Logo" className="max-w-[50%] h-auto text-lg items-center justify-center" />
          <h4 className="text-xl mt-2.5 mb-1.5">YumDrop-food delivery app.</h4>
          <p className="text-lg mt-1.5 mb-1.5">YumDrop-The project is a food delivery application developed using ReactJs and Firebase.</p>
          <p className="text-lg mt-1.5 mb-1.5">One of my primary objectives was to integrate Google authentication, allowing users to authenticate with a single click on the avatar.</p>
          <p className="text-lg mt-1.5 mb-1.5">I also included functionality to store contact form data on Firebase's Realtime Database.</p>
          <p className="text-lg mt-1.5 mb-1.5">I implemented an "add to cart" functionality that allows users to select items and store them for later checkout.</p>
          <p className="text-lg mt-1.5 mb-1.5">Lastly, I stored authenticated Google accounts using Firebase Authentication, which provides secure, passwordless access for users.</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">Start Date: Mar 22, 2023</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">End Date: 14/04/2023</p>
          <a href="https://yumdrop-food.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block p-2.5 bg-[#007bff] text-white no-underline rounded-[20px] mt-2.5">Learn More</a>
        </div>

        {/* Project 2 */}
        <div className="w-[45%] mb-5 p-2.5 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-[5px]">
          <img src="https://github.com/Gracelaura/kindergarten-management-system-frontend/blob/main/src/App/components/images/home.png?raw=true" alt="Project 1 Logo" className="max-w-[50%] h-auto text-lg items-center justify-center" />
          <h4 className="text-xl mt-2.5 mb-1.5">School Management System</h4>
          <p className="text-lg mt-1.5 mb-1.5">As a contributor to this project, I worked on developing a full-stack application for managing a kindergarten.</p>
          <p className="text-lg mt-1.5 mb-1.5">The project consists of two main dashboards: an admin dashboard and a parent dashboard.</p>
          <p className="text-lg mt-1.5 mb-1.5">The application allows management of students, teachers, and parents, as well as tracking attendance.</p>
          <p className="text-lg mt-1.5 mb-1.5">Throughout the project, I was responsible for documenting our progress and findings.</p>
          <p className="text-lg mt-1.5 mb-1.5">Finally, we deployed the project's backend using AWS, which involved setting up servers, databases, and other necessary infrastructure.</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">Start Date: 18/12/2022</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">End Date: 13/01/2023</p>
          <a href="http://35.172.230.181:4000/" target="_blank" rel="noopener noreferrer" className="inline-block p-2.5 bg-[#007bff] text-white no-underline rounded-[20px] mt-2.5">Learn More</a>
        </div>

        <div className="w-[45%] mb-5 p-2.5 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-[5px]">
          <img src={railway} alt="Project 1 Logo" className="max-w-[50%] h-auto text-lg items-center justify-center" />
          <h4 className="text-xl mt-2.5 mb-1.5">School Management System</h4>
          <p className="text-lg mt-1.5 mb-1.5">As a contributor to this project, I worked on developing a full-stack application for managing a kindergarten.</p>
          <p className="text-lg mt-1.5 mb-1.5">The project consists of two main dashboards: an admin dashboard and a parent dashboard.</p>
          <p className="text-lg mt-1.5 mb-1.5">The application allows management of students, teachers, and parents, as well as tracking attendance.</p>
          <p className="text-lg mt-1.5 mb-1.5">Throughout the project, I was responsible for documenting our progress and findings.</p>
          <p className="text-lg mt-1.5 mb-1.5">Finally, we deployed the project's backend using AWS, which involved setting up servers, databases, and other necessary infrastructure.</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">Start Date: 18/12/2022</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">End Date: 13/01/2023</p>
          <a href="http://35.172.230.181:4000/" target="_blank" rel="noopener noreferrer" className="inline-block p-2.5 bg-[#007bff] text-white no-underline rounded-[20px] mt-2.5">Learn More</a>
        </div>

        <div className="w-[45%] mb-5 p-2.5 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-[5px]">
          <img src="https://github.com/Gracelaura/kindergarten-management-system-frontend/blob/main/src/App/components/images/home.png?raw=true" alt="Project 1 Logo" className="max-w-[50%] h-auto text-lg items-center justify-center" />
          <h4 className="text-xl mt-2.5 mb-1.5">School Management System</h4>
          <p className="text-lg mt-1.5 mb-1.5">As a contributor to this project, I worked on developing a full-stack application for managing a kindergarten.</p>
          <p className="text-lg mt-1.5 mb-1.5">The project consists of two main dashboards: an admin dashboard and a parent dashboard.</p>
          <p className="text-lg mt-1.5 mb-1.5">The application allows management of students, teachers, and parents, as well as tracking attendance.</p>
          <p className="text-lg mt-1.5 mb-1.5">Throughout the project, I was responsible for documenting our progress and findings.</p>
          <p className="text-lg mt-1.5 mb-1.5">Finally, we deployed the project's backend using AWS, which involved setting up servers, databases, and other necessary infrastructure.</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">Start Date: 18/12/2022</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">End Date: 13/01/2023</p>
          <a href="http://35.172.230.181:4000/" target="_blank" rel="noopener noreferrer" className="inline-block p-2.5 bg-[#007bff] text-white no-underline rounded-[20px] mt-2.5">Learn More</a>
        </div>

        <div className="w-[45%] mb-5 p-2.5 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-[5px]">
          <img src="https://github.com/Gracelaura/kindergarten-management-system-frontend/blob/main/src/App/components/images/home.png?raw=true" alt="Project 1 Logo" className="max-w-[50%] h-auto text-lg items-center justify-center" />
          <h4 className="text-xl mt-2.5 mb-1.5">School Management System</h4>
          <p className="text-lg mt-1.5 mb-1.5">As a contributor to this project, I worked on developing a full-stack application for managing a kindergarten.</p>
          <p className="text-lg mt-1.5 mb-1.5">The project consists of two main dashboards: an admin dashboard and a parent dashboard.</p>
          <p className="text-lg mt-1.5 mb-1.5">The application allows management of students, teachers, and parents, as well as tracking attendance.</p>
          <p className="text-lg mt-1.5 mb-1.5">Throughout the project, I was responsible for documenting our progress and findings.</p>
          <p className="text-lg mt-1.5 mb-1.5">Finally, we deployed the project's backend using AWS, which involved setting up servers, databases, and other necessary infrastructure.</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">Start Date: 18/12/2022</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">End Date: 13/01/2023</p>
          <a href="http://35.172.230.181:4000/" target="_blank" rel="noopener noreferrer" className="inline-block p-2.5 bg-[#007bff] text-white no-underline rounded-[20px] mt-2.5">Learn More</a>
        </div>

        <div className="w-[45%] mb-5 p-2.5 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-[5px]">
          <img src="https://github.com/Gracelaura/kindergarten-management-system-frontend/blob/main/src/App/components/images/home.png?raw=true" alt="Project 1 Logo" className="max-w-[50%] h-auto text-lg items-center justify-center" />
          <h4 className="text-xl mt-2.5 mb-1.5">School Management System</h4>
          <p className="text-lg mt-1.5 mb-1.5">As a contributor to this project, I worked on developing a full-stack application for managing a kindergarten.</p>
          <p className="text-lg mt-1.5 mb-1.5">The project consists of two main dashboards: an admin dashboard and a parent dashboard.</p>
          <p className="text-lg mt-1.5 mb-1.5">The application allows management of students, teachers, and parents, as well as tracking attendance.</p>
          <p className="text-lg mt-1.5 mb-1.5">Throughout the project, I was responsible for documenting our progress and findings.</p>
          <p className="text-lg mt-1.5 mb-1.5">Finally, we deployed the project's backend using AWS, which involved setting up servers, databases, and other necessary infrastructure.</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">Start Date: 18/12/2022</p>
          <p className="font-bold text-xl text-black mt-1.5 mb-1.5">End Date: 13/01/2023</p>
          <a href="http://35.172.230.181:4000/" target="_blank" rel="noopener noreferrer" className="inline-block p-2.5 bg-[#007bff] text-white no-underline rounded-[20px] mt-2.5">Learn More</a>
        </div>

        {/* Add more projects similarly */}
        {/* Project 3 */}
        {/* Project 4 */}
        {/* ... */}
        
      </div>
      <Certification />
    </div>
  );
}

export default Portfolio;
