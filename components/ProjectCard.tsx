"use client";

// components/ProjectCard.js
import React, { useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

export default function Card({
  title,
  subtitle,
  description,
  websiteLink,
  githubLink,
  logoImage,
  screenshotImages,
  numberOfUsers,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? screenshotImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === screenshotImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to close modal if clicked outside the image
  const handleClickOutside = (event) => {
    if (event.target.id === "modal-background") {
      closeModal();
    }
  };

  return (
    <div className="bg-zinc-800/30 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center">
        {logoImage && (
          <img
            src={logoImage}
            alt={`${title} logo`}
            className="h-12 w-12 mr-4"
          />
        )}
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {subtitle && (
            <h3 className="text-lg font-semibold text-gray-400">{subtitle}</h3>
          )}
        </div>
      </div>
      <p className="text-gray-300 mt-4">{description}</p>
      {numberOfUsers && (
        <p className="text-sm text-gray-500 mt-2">Users: {numberOfUsers}</p>
      )}
      {screenshotImages && (
        <div className="flex space-x-4 mt-4">
          {screenshotImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              className="h-24 w-24 object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      )}
      <div className="flex space-x-4 mt-6">
        {websiteLink && (
          <Link
            href={websiteLink}
            className="text-blue-400 hover:text-blue-300"
          >
            <FaExternalLinkAlt size={20} />
          </Link>
        )}
        {githubLink && (
          <Link href={githubLink} className="text-blue-400 hover:text-blue-300">
            <FaGithub size={20} />
          </Link>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-75"
          onClick={handleClickOutside}
        >
          <div className="relative w-11/12 sm:w-3/4 lg:w-1/2">
            <img
              src={screenshotImages[currentImageIndex]}
              alt={`Screenshot ${currentImageIndex + 1}`}
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-4 right-4 z-40 ">
              <button className=" text-white p-1 rounded-full bg-gray-800 bg-opacity-50" onClick={closeModal}>
                <FaTimes size={24} />
              </button>
            </div>

            <div className="absolute inset-y-0 left-4 flex items-center justify-center">
              <button
                className="text-white p-2 bg-gray-800 bg-opacity-50 rounded-full"
                onClick={goToPreviousImage}
              >
                <FaChevronLeft size={30} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center justify-center">
              <button
                className="text-white p-2 bg-gray-800 bg-opacity-50 rounded-full"
                onClick={goToNextImage}
              >
                <FaChevronRight size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
