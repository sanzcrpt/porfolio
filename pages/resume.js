import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'


const Resume = () => {
  return (
    <div className="text-white py-44 px-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-black mb-4">San Robinson</h1>
        <a href="mailto:san.robinxin@gmail.com" className="flex items-center mb-4">
          <FaEnvelope className="mr-2" />
          san.robinxin@gmail.com
        </a>
        <div className="flex text-black justify-between mb-12">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-2">Professional Experience</h2>
            <ul>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="CrowdStrike Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold">CrowdStrike</h3>
                  <p>Engineering Intern - Mobile UI</p>
                </div>
              </li>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="Fortuna Funding & W.A.E Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold">Fortuna Funding &amp; W.A.E</h3>
                  <p>Project Manager &amp; Engineer</p>
                </div>
              </li>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="Progyny Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold">Progyny</h3>
                  <p>Operations Associate</p>
                </div>
              </li>
              <li className="mb-8 flex items-center">
                <Image src="/github.png" alt="Randstad USA Logo" width={50} height={50} className="mr-4" />
                <div>
                  <h3 className="font-bold">Randstad USA</h3>
                  <p>Site Manager</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-2">Fellowships &amp; Programs</h2>
            <ul>
              <li className="mb-8">
                <h3 className="font-bold">Colorwave Cohort 6 Fellow</h3>
              </li>
              <li className="mb-8">
                <h3 className="font-bold">Future Founders Startup Bootcamp Fellow</h3>
              </li>
              <li className="mb-8">
                <h3 className="font-bold">The Natives POV Founder</h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Resume
