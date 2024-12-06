import React, { useEffect, useState } from 'react'

const About = () => {

  const images = [
    "https://placehold.co/600x400?text=Image+1",
    "https://placehold.co/600x400?text=Image+2",
    "https://placehold.co/600x400?text=Image+3"
];

const [currentIndex, setCurrentIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
}, [images.length]);

const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
};

const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
};


  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105">
                    <div className="md:w-1/2 p-4 relative overflow-hidden rounded-lg">
                        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105" />
                        <div className="absolute inset-0 bg-theme-color opacity-50 rounded-lg"></div>
                    </div>
                    <div className="md:w-1/2 p-4 flex flex-col justify-center">
                        <h1 className="text-3xl font-extrabold mb-2 text-theme-color animate__animated animate__fadeIn">RAM WEB SOLUTION</h1>
                        <div className="border-b-4 border-blue-500 w-16 mb-4"></div>
                        <p className="text-gray-700 text-lg leading-relaxed animate__animated animate__fadeIn">
                            <span className="font-bold text-2xl font-mono text-theme-color">RAM</span> Web Solution, based in Vadodara, Gujarat, India, is a dynamic web development company dedicated to delivering top-notch IT services and education. We specialize in bridging the gap between academic learning and industry demands by offering tailored IT training and internship programs. Our mission is to equip students and young professionals with the practical skills, in-depth knowledge, and hands-on experience they need to thrive in the ever-evolving software and web development industry. With expert mentors, real-world projects, and a focus on innovation, Ram Web Solution is committed to shaping the next generation of tech leaders.
                        </p>
                    </div>
                </section>

      <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-white rounded-lg shadow-lg mt-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-theme-color mb-2 animate__animated animate__fadeIn">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed animate__animated animate__fadeIn">
            At RAM Web Solution, our vision is to empower individuals and organizations through innovative technology solutions. We aim to be a leader in the web development industry by continuously adapting to the latest trends and technologies.
          </p>
        </div>
        <div className="md:w-1/2 p-4">
          <img src="https://placehold.co/600x400?text=Our+Vision" alt="Our Vision" className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105" />
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg mt-6 transition-transform duration-500 ease-in-out transform hover:scale-105">
        <div className="md:w-1/2 p-4">
          <img src="https://placehold.co/600x400?text=Our+Mission" alt="Our Mission" className="w-full h-auto rounded-lg transition-transform duration-500 ease-in-out transform hover:scale-105" />
        </div>
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-theme-color mb-2 animate__animated animate__fadeIn">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed animate__animated animate__fadeIn">
            Our mission is to provide high-quality IT training and internship opportunities that prepare students for successful careers in technology. We strive to create a supportive learning environment that fosters creativity and innovation.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg mt-6">
        <h2 className="text-4xl font-extrabold text-theme-color mb-8 animate__animated animate__fadeIn">Meet Our Team</h2>
        <div className="flex flex-wrap justify-center gap-8">
            <div className="relative w-52 h-52 bg-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden animate__animated animate__fadeIn animate__delay-1s">
                <img src="https://placehold.co/200x200?text=Team+Member+1" alt="Team Member 1" className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gray-800 bg-opacity-70 rounded-full">
                    <h3 className="text-xl font-bold text-white">John Doe</h3>
                    <p className="text-white">Web Developer</p>
                </div>
            </div>
            <div className="relative w-52 h-52 bg-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden animate__animated animate__fadeIn animate__delay-2s">
                <img src="https://placehold.co/200x200?text=Team+Member+2" alt="Team Member 2" className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gray-800 bg-opacity-70 rounded-full">
                    <h3 className="text-xl font-bold text-white">Jane Smith</h3>
                    <p className="text-white">UI/UX Designer</p>
                </div>
            </div>
            <div className="relative w-52 h-52 bg-white rounded-full shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl overflow-hidden animate__animated animate__fadeIn animate__delay-3s">
                <img src="https://placehold.co/200x200?text=Team+Member+3" alt="Team Member 3" className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out bg-gray-800 bg-opacity-70 rounded-full">
                    <h3 className="text-xl font-bold text-white">Alice Johnson</h3>
                    <p className="text-white">Project Manager</p>
                </div>
            </div>
            {/* Add more team members as needed */}
        </div>
    </section>
    </>
  )
}

export default About
