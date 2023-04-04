import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Resume = () => {
  return (
    <div className="text-black py-44 px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4 text-center">San Robinson</h1>
        <h1 className=" mb-10 text-black ">🚀 Project/Product Manager | 👩🏿‍💻 Full-Stack Developer | 👥 Mentor | 🎓 Lifelong Learner & 🤖 Tech Enthusiast</h1>

        <div className="grid-cols-2 items-center justify-center gap-12">
          {/* Professional Experience */}
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-10">Professional Experience</h2>
            <h3 className="text-lg  mb-2 text-gray-500">Project & Product Management</h3>
            <ul>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="We Are Enough Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold"><a href="https://www.weareenough.biz/">We Are Enough</a></h3>
                  <p className="text-gray-400 text-sm mb-1">Technical Product Manager - Current Role</p>
                  <p className="text-gray-400 text-sm mb-1">Researcher</p>

                </div>
              </li>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="Fortuna Funding & W.A.E Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold"><a href="https://fortunalookbook.vercel.app/">Fortuna Funding</a></h3>
                  <p className="text-gray-400 text-sm mb-1">UX/UI Software Engineer - Last position</p>
                  <p className="text-gray-400 text-sm mb-1">Researcher</p>

                </div>
              </li>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="CrowdStrike Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold"><a href="https://marty.world/">Marty</a></h3>
                  <p className="text-gray-400 text-sm mb-1">Agile Project Manager</p>
                </div>
              </li>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="CrowdStrike Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold"><a href="https://www.crowdstrike.com/">CrowdStrike</a></h3>
                  <p className="text-gray-400 text-sm mb-1">Software Engineer Intern - Mobile UI</p>

                </div>
              </li>
            </ul>
            <h3 className="text-lg text-gray-500 mb-2">Operations</h3>
            <ul>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="Progyny Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold"><a href="https://progyny.com/">Progyny</a></h3>
                  <p className="text-gray-400 text-sm mb-1">Operations Associate</p>
                </div>
              </li>
              <li className="mb-8 flex items-center">
              <Image src="/github.png" alt="Randstad Logo" width={50} height={50} className="mr-4" />
            <div>
              <h3 className="font-bold"><a href="https://randstadusa.com/">Randstad</a></h3>
              <p className="text-gray-400 text-sm mb-1">Site Manager/Coordinator</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Fellowships & Mentoring */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-10">Fellowships & Mentoring</h2>
        <h3 className="text-lg mb-2 text-gray-500">Fellowships</h3>
        <ul>
          <li className="mb-4 flex items-center">
            <Image src="/colorwave.jpeg" alt="Colorwave Logo" width={50} height={50} className="mr-4" />
            <div>
              <h3 className="font-bold">Colorwave</h3>
              <p className="text-gray-400 text-sm mb-1">Innovation and Technology Fellowship</p>
            </div>
          </li>
          <li className="mb-4 flex items-center">
            <Image src="/futurefounders.jpeg" alt="Future Founders Logo" width={50} height={50} className="mr-4" />
            <div>
              <h3 className="font-bold">Future Founders</h3>
              <p className="text-gray-400 text-sm mb-1">Startup Technology Fellowship</p>
            </div>
          </li>
        </ul>
        <h3 className="text-lg mb-2 text-gray-500">Mentoring</h3>
        <ul>
          <li className="mb-4 flex items-center">
            <Image src="/oit.jpeg" alt="Out in Tech Logo" width={50} height={50} className="mr-4" />
            <div>
              <h3 className="font-bold">Out in Tech</h3>
              <p className="text-gray-400 text-sm mb-1">Mentor</p>
            </div>
          </li>
          <li className="mb-4 flex items-center">
            <Image src="/ada.png" alt="Ada Developers Academy Logo" width={50} height={50} className="mr-4" />
            <div>
              <h3 className="font-bold">Ada Developers Academy</h3>
              <p className="text-gray-400 text-sm mb-1">Mentor</p>
            </div>
          </li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-10">Education</h2>
        <ul>
          <li className="mb-4">
            <h3 className="font-bold">SUNY Oswego</h3>
            <p className="text-gray-400 text-sm mb-1">B.S Business Administration & B.S Accounting</p>
          </li>
          <a href="mailto:san.robinxin@gmail.com" className="flex items-center mb-4 text-gray-400 text-sm mb-1">
            <FaEnvelope className="mr-2" />
            san.robinxin@gmail.com
          </a>
        </ul>
      </div>
      
        {/* Certifications */}
  <div>
    <h2 className="text-2xl font-bold mb-4 mt-10">Certifications</h2>
    <ul>
    <li className="mb-4">
        <h3 className="font-bold">Professional Scrum Master I® (PSM I®)</h3>
        <p className="text-gray-400 text-sm mb-1">Issued by Scrum.org</p>
      </li>
      <li className="mb-4">
        <h3 className="font-bold">AWS Academy Graduate (AWS Cloud Foundations)</h3>
        <p className="text-gray-400 text-sm mb-1">Issued by AWS</p>
      </li>
      <li className="mb-4">
        <h3 className="font-bold">Google Project Management Professional</h3>
        <p className="text-gray-400 text-sm mb-1">Issued by Google</p>
      </li>
    </ul>
  </div>
</div>

</div>
</div>
    );
};
export default Resume;