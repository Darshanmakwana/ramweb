import React, { useEffect, useState } from "react";
import gif from "../assets/gif.gif";
import { IoCallOutline } from "react-icons/io5";
import Modal from "react-modal";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "RAM WEB SOLUTION";
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    let currentText = "";
    let index = 0;
    let isTyping = true;

    const typeWriter = () => {
      if (isTyping) {
        if (index < fullText.length) {
          currentText += fullText[index];
          setDisplayText(currentText);
          index++;
          setTimeout(typeWriter, 200);
        } else {
          setTimeout(() => {
            isTyping = false;
            setTimeout(resetText, 1000);
          }, 1000);
        }
      }
    };

    const resetText = () => {
      currentText = "";
      index = 0;
      isTyping = true;
      setDisplayText("");
      typeWriter();
    };

    typeWriter();

    return () => {
      isTyping = false;
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const phoneNumber = formData.get("phone");
    const email = formData.get("email");

    // Handle form data (e.g., send to an API or log to console)
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);

    // Send data to Web3Forms API
    fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            access_key: "373fa754-1f0e-438a-aadd-40f3ad11e314", // Replace with your actual Access Key
            subject: "New Contact Form Submission from Web3Forms",
            from_name: "My Website",
            name: name,
            email: email,
            phone: phoneNumber,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log("Success:", data);
        closeModal(); // Close the modal after submission
    })
    .catch((error) => {
        console.error("Error:", error);
    });
  };

  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center px-4 py-8 md:gap-20 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-0 flex justify-center">
          <img
            src={gif}
            alt="Pentagon shapes"
            className="h-[40vh] md:h-[60vh] max-w-full object-contain"
          />
        </div>
        <div className="text-center">
          <div className="mb-4">
            <h1 className="text-3xl text-[#034067] font-[Vidaloka] md:text-5xl font-bold animate-bounce">
              {displayText}
            </h1>
            <hr className="border-t-2 border-[#034067] mt-2" />
          </div>
          <div className="space-y-4 text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold">
              <span className="text-[#034067]">MASTER</span>
              <span className="text-[#2564eb]"> WEB DEVELOPMENT</span>
            </h1>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              <span className="text-[#034067]"> WITH</span>
              <span className="text-[#2564eb]"> US</span>
            </h1>
            <h1 className="text-2xl md:text-4xl font-bold text-[#2564eb]">
              {" "}
              EASY-TO-FOLLOW <span className="text-[#034067]"> TUTORIALS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-4">
              Learn step-by-step and become a professional web developer with
              tutorials designed for all skill levels.
            </p>
          </div>

          <div className="mt-6 md:mt-8 flex justify-center space-x-4">
            <button onClick={openModal} className="px-4 py-2 md:px-6 md:py-2 border-2 border-[#034067] text-blue-500 rounded-full hover:bg-[#034067] hover:text-white transition text-sm md:text-base">
              TRAINING
            </button>
            <button onClick={openModal} className="px-4 py-2 md:px-6 md:py-2 border-2 border-[#034067] text-blue-500 rounded-full hover:bg-[#034067] hover:text-white transition text-sm md:text-base">
              INTERNSHIP
            </button>
          </div>

          <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal max-w-sm mx-auto">
            <h2 className="text-2xl font-bold mt-36 mb-4">Contact Us</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg">
              <label className="flex flex-col">
                Name:
                <input type="text" name="name" required className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </label>
              <label className="flex flex-col">
                Phone Number:
                <input type="tel" name="phone" required className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </label>
              <label className="flex flex-col">
                Email:
                <input type="email" name="email" required className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-300" />
              </label>
              
              <div className="flex justify-between">
                <button type="submit" className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition">Submit</button>
                <button type="button" onClick={closeModal} className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition">Close</button>
              </div>
            </form>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
