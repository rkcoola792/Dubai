import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import { useParams } from 'react-router-dom';
const Section2 = () => {
  const blogName=useParams()
  console.log(blogName.blogName)
  return (
    <div className="section2 my-12 ">
      <div className="top flex flex-col gap-6 items-center justify-center text-center">
        <div className="stars flex">
          <StarIcon className="text-yellow-500"></StarIcon>
          <StarIcon className="text-yellow-500"></StarIcon>
          <StarIcon className="text-yellow-500"></StarIcon>
          <StarIcon className="text-yellow-500"></StarIcon>
          <StarIcon className="text-yellow-500"></StarIcon>
        </div>
        <div className="heading sm:w-[65%]">
          <h1 className="font-bold lg:text-[42px] text-2xl lg:leading-[50px]">
            Remote Work is the Future, but Should You Go Remote?
          </h1>
        </div>
        <div className="subheading sm:w-[75%]">
          <h1 className="text-gray-500">
            We’ve been told it is possible to revolutionize the payment
            industry. We have not reinvented the wheel, we decided to build upon
            it - successfully.
          </h1>
        </div>
      </div>

      <div className="bottom ">
        <div className="section1 mt-12">
          <div className="author-one flex justify-between ">
            <div className="left flex justify-between items-center">
              <div className="author-designation flex gap-2">
                <div className="author-img">
                  <img src="/Avatar.png"></img>
                </div>
                <div className="name-designation">
                  <h1 className="font-semibold text-sm">Andrew Meller </h1>
                  <h1 className="text-gray-600 text-sm">CEO</h1>
                </div>
              </div>
            </div>
            <div className="right flex sm:gap-4 gap-4 ">
              <h1 className="text-gray-600 hidden sm:block">25 Apr,2023</h1>
              <h1 className="w-6">
                <img src="/facebook.png" alt="" />
              </h1>
              <h1 className="w-6">
                <img src="/google.png" alt="" />
              </h1>
              <h1 className="w-6">
                <img src="/instagram.png" alt="" />
              </h1>
            </div>
          </div>
          <h1 className="paragraph1 text-gray-600 mt-6">
            The rise of remote work has been nothing short of transformative,
            with technology advancements and changing workplace dynamics
            enabling individuals to work from anywhere in the world. While
            remote work offers enticing benefits such as flexibility, increased
            autonomy, and a better work-life balance, it's essential to consider
            if going remote is the right choice for you. In this article, we'll
            explore the advantages and challenges of remote work to help you
            make an informed decision.
          </h1>
          <h1 className="paragraph1 text-gray-600 mt-6">
            Remote work provides the freedom to set your own schedule, choose
            your work environment, and eliminate long commutes. This flexibility
            allows for a better work-life integration, giving you more control
            over your time and potentially reducing stress.
          </h1>
        </div>

        <div className="section2">
          <h1 className="font-bold mt-12 sm:text-4xl text-2xl">
            Assessing Your Suitability for Remote Work
          </h1>
          <h1 className="mt-6 text-gray-600">
            Remote work often grants more independence, empowering individuals
            to manage their tasks and projects with minimal supervision. It can
            foster a sense of ownership and self-motivation, leading to
            increased productivity and personal growth.
          </h1>
          <ul className="list-disc ml-4 mt-6">
            <li className="text-gray-600">
              Working remotely opens doors to a global job market. With
              geographical constraints removed, you can explore opportunities
              with companies and clients from around the world, expanding your
              professional network and gaining exposure to diverse perspectives.
            </li>
            <li className="text-gray-600 mt-4">
              Remote work can be isolating, as it lacks the face-to-face
              interactions and social connections typically found in a
              traditional office environment. It's important to proactively
              maintain communication with colleagues and seek out opportunities
              for collaboration and networking.
            </li>
            <div className="mt-8 ">
              <img src="/Img container.png" alt="" className='w-full'/>
            </div>
          </ul>
        </div>

        <div className="section3 ">
          <h1 className="font-bold mt-12 sm:text-4xl text-2xl ">Challenges to Consider</h1>
          <h1 className="mt-6 text-gray-600">
            Working from home requires self-discipline to stay focused amidst
            potential distractions. Setting boundaries between work and personal
            life is crucial to maintain a healthy work-life balance and prevent
            burnout.
          </h1>
          <h1 className="mt-6 text-gray-600">
            Remote work relies heavily on digital communication tools, which may
            not fully replicate the benefits of in-person interactions. Building
            rapport, brainstorming, and resolving conflicts may require extra
            effort to ensure effective communication and teamwork.
          </h1>
          <ul className="list-disc ml-4 mt-6">
            <li className="text-gray-600">
              Evaluate your ability to work independently, stay motivated, and
              meet deadlines without close supervision.
            </li>
            <li className="text-gray-600 mt-4">
              Assess your proficiency in written and verbal communication, as
              effective remote work heavily relies on clear and timely
              communication.
            </li>
            <li className="text-gray-600 mt-4">
              Consider your home setup and whether it can provide a conducive
              and productive workspace. Evaluate factors such as internet
              connectivity, privacy, and potential distractions.
            </li>
          </ul>
          <h1 className='text-gray-600 mt-6'>
            {" "}
            Reflect on your preferred work style and whether the autonomy and
            flexibility of remote work align with your professional goals and
            personal preferences.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Section2
