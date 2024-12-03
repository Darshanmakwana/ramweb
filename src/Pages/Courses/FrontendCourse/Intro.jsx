import React from "react";

const Intro = () => {
  return (
    <section className="py-10 px-6 bg-gray-50 text-gray-900">
      <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Introduction to Frontend Development
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Frontend development refers to the creation of the visual elements and
          user interface (UI) of a website or web application. It involves
          building the structure, design, behavior, and interactivity of the
          website through languages like HTML, CSS, and JavaScript. Frontend
          development is responsible for ensuring a seamless, responsive, and
          user-friendly experience across all devices and screen sizes.
        </p>
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Key Technologies in Frontend Development
        </h3>
        <ul className="list-disc list-inside text-lg mb-6">
          <li>
            HTML (HyperText Markup Language) – The skeleton of any webpage.
          </li>
          <li>
            CSS (Cascading Style Sheets) – Used for styling and layout of the
            webpage.
          </li>
          <li>
            JavaScript – Adds interactivity and dynamic content to the page.
          </li>
          <li>
            Frameworks and Libraries like React, Angular, and Vue.js –
            Simplifies and speeds up development.
          </li>
        </ul>
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Why is Frontend Development Important?
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          Frontend development plays a crucial role in how users experience a
          website. A well-designed frontend not only ensures functionality but
          also improves accessibility and user engagement. A good user interface
          (UI) design and experience (UX) are critical for retaining visitors
          and converting them into customers. Frontend developers are
          responsible for ensuring that the website is both visually appealing
          and responsive, meaning it works well on both desktop and mobile
          devices.
        </p>
        <h3 className="text-2xl font-semibold text-blue-500 mb-4">
          Responsive Design
        </h3>
        <p className="text-lg leading-relaxed">
          Responsive design is a fundamental aspect of modern frontend
          development. It ensures that websites are adaptable to various screen
          sizes and devices, from desktops to tablets and smartphones. Using CSS
          media queries and flexible grid layouts, frontend developers can
          create a layout that dynamically adjusts to different screen
          resolutions and orientations, providing a consistent experience for
          users no matter the device.
        </p>
      </div>
    </section>
  );
};

export default Intro;
