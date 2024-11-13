import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">About Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-lg text-gray-700">
          <p className="mb-4">
            Welcome to <strong>Our Bookstore</strong>! We're a team of passionate individuals dedicated to delivering exceptional products and services to our customers.
          </p>
          <p className="mb-4">
            Our journey started in [Year], with the vision to create [a specific product or service] that would solve [a particular problem or need]. Since then, we've grown into a trusted brand that values innovation, quality, and customer satisfaction.
          </p>
          <p className="mb-4">
            At <strong>Our Bookstore</strong>, we pride ourselves on our team of experts who work tirelessly to ensure that each product we create and each service we provide meets the highest standards. Whether you're a first-time customer or a long-time partner, we are committed to making your experience seamless and enjoyable.
          </p>
          <p className="mb-4">
            Our mission is to [state your mission clearly – e.g., "make technology more accessible to everyone" or "provide sustainable solutions to everyday problems"]. We're constantly pushing the boundaries of what's possible and are excited for what the future holds.
          </p>
          <p className="mb-4">
            Thank you for choosing us! We look forward to serving you.
          </p>
        </div>
        <div className="text-center md:text-left">
          <img
            src="https://via.placeholder.com/500" // Replace with your own image URL
            alt="About Us"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg text-gray-700">
          If you have any questions or want to learn more, feel free to <a href="/contact" className="text-blue-500 underline">contact us</a>.
        </p>
      </div>
    </div>
  );
};

export default About;