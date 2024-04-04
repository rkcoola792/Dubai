import { Email, Map, Phone } from '@mui/icons-material';
import React from 'react'

const ContactForm = () => {
  return (
    <div className="Contact-form rounded-lg sm:h-[585px] overflow-hidden sm:flex shadow-md my-6">
      <div className="left relative sm:w-[40%] bg-mainBlue text-white sm:h-svh flex flex-col sm:p-12 p-8 rounded-lg gap-16 h-[500px]">
        <div className="top-heading flex flex-col gap-4">
          <h1 className="text-3xl ">Contact Information</h1>
          <h1 className="opacity-75">Say something to start a live chat!</h1>
        </div>
        <div className="middle-details flex flex-col gap-8">
          <div className="flex gap-6">
            <Phone></Phone>
            <h1>+1012 3456 789</h1>
          </div>
          <div className="flex gap-6">
            <Email></Email>
            <h1>demo@gmail.com</h1>
          </div>
          <div className="flex gap-6">
            <Map></Map>
            <h1>
              132 Dartmouth Street Boston, Massachusetts 02156 United States
            </h1>
          </div>
        </div>
        <div className="bottom-links flex gap-6 sm:mt-12">
          <div className="icon">
            <img src="twitter.png" alt="" />
          </div>
          <div className="icon">
            <img src="reddit.png" alt="" />
          </div>
          <div className="icon">
            <img src="twitter.png" alt="" />
          </div>
        </div>
      </div>
      <div className="right w-[80%] sm:p-12 p-8 shadow-lg">
        <div className="top-inputs flex flex-wrap gap-12">
          <div className="first-name ">
            <p className="text-gray-500">First Name</p>
            <input type="text" className="border-b border-gray-400 w-[260px]" />
          </div>
          <div className="first-name">
            <p className="text-gray-500">Last Name</p>
            <input type="text" className="border-b border-gray-400 w-[260px]" />
          </div>
          <div className="first-name">
            <p className="text-gray-500">Email</p>
            <input type="text" className="border-b border-gray-400 w-[260px]" />
          </div>
          <div className="first-name">
            <p className="text-gray-500">Phone Number</p>
            <input type="text" className="border-b border-gray-400 w-[260px]" />
          </div>
        </div>

        <div className="middle-container flex flex-col mt-12">
          <h1 className="text-mainBlue font-semibold text-xl">
            Select Subject ?
          </h1>
          <div className=" sm:flex-row flex flex-col flex-wrap sm:gap-12">
            <div class="options inline-flex items-center mt-4   ">
              <input
                type="radio"
                class="form-radio h-5 w-5 text-blue-600"
                name="option"
                value="option1"
              />
              <span class="ml-2 text-mainBlue sm:text-sm text-xl">
                Option 1
              </span>
            </div>
            <h1 class="inline-flex items-center mt-3">
              <input
                type="radio"
                class="form-radio h-5 w-5 text-blue-600"
                name="option"
                value="option2"
              />
              <span class="ml-2 text-mainBlue sm:text-sm text-xl">
                Option 2
              </span>
            </h1>
            <h1 class="inline-flex items-center mt-3 text-sm">
              <input
                type="radio"
                class="form-radio h-5 w-5"
                name="option"
                value="option2"
              />
              <span class="ml-2 text-mainBlue sm:text-sm text-xl">
                Option 3
              </span>
            </h1>
            <h1 class="inline-flex items-center mt-3">
              <input
                type="radio"
                class="form-radio h-5 w-5 text-mainBlue"
                name="option"
                value="option2"
              />
              <span class="ml-2 text-mainBlue sm:text-sm text-xl">
                Option 4
              </span>
            </h1>
          </div>
        </div>
        <div className="bottom-conatiner mt-12 relative">
          <div className="Message">
            <p className="text-gray-500 text-xl sm:text-base">Message</p>
            <input
              type="text"
              placeholder="Write your message"
              className="border-b py-2 border-gray-400 w-full"
            />
          </div>
          <div className="contact-us-button bg-mainBlue text-white p-2 px-8 rounded-full cursor-pointer w- text-center mt-12  py-3 ">
            Send Message
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm
