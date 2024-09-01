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
  FaPlay,
} from "react-icons/fa";

export default function Card({
  title,
  subtitle,
  description,
  websiteLink,
  githubLink,
  logoImage,
  mediaItems, // This will now handle both images and videos
  numberOfUsers,
}: {
  title;
  subtitle?;
  description;
  websiteLink?;
  githubLink?;
  logoImage?;
  mediaItems?; // This will now handle both images and videos
  numberOfUsers?;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const openModal = (index) => {
    setCurrentMediaIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const goToPreviousMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? mediaItems.length - 1 : prevIndex - 1
    );
  };

  const goToNextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to close modal if clicked outside the media
  const handleClickOutside = (event) => {
    if (event.target.id === "modal-background") {
      closeModal();
    }
  };

  const renderMedia = (media) => {
    const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");
    if (isVideo) {
      return (
        <video
          controls
          autoPlay
          className="w-full h-auto max-h-[90vh] rounded-lg"
        >
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    } else {
      return (
        <img
          src={media}
          alt={`Media ${currentMediaIndex + 1}`}
          className="w-full h-auto max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
        />
      );
    }
  };

  const getThumbnail = (media) => {
    const isVideo = media.endsWith(".mp4") || media.endsWith(".webm");
    if (isVideo) {
      // Generate the thumbnail path based on the video URL
      const thumbnailPath = media
        .replace("/videos/", "/thumbnails/")
        .replace(".mp4", ".png")
        .replace(".webm", ".png");
      return (
        <div className="relative h-24 w-24 cursor-pointer">
          <img
            src={thumbnailPath}
            alt={`Thumbnail for ${title}`}
            className="h-full w-full object-cover rounded-lg"
            onClick={() => openModal(currentMediaIndex)}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gray-800 bg-opacity-50 p-2 rounded-full">
              <FaPlay size={30} className="text-white opacity-80 ml-1" />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <img
          src={media}
          alt={`${title} media ${currentMediaIndex + 1}`}
          className="h-24 w-24 object-cover rounded-lg cursor-pointer"
          onClick={() => openModal(currentMediaIndex)}
        />
      );
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
      {mediaItems && (
        <div className="flex space-x-4 mt-4">
          {mediaItems.map((media, index) => (
            <div key={index} onClick={() => openModal(index)}>
              {getThumbnail(media)}
            </div>
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
            {renderMedia(mediaItems[currentMediaIndex])}
            <div className="absolute top-4 right-4 z-40 ">
              <button
                className=" text-white p-1 rounded-full bg-gray-800 bg-opacity-50"
                onClick={closeModal}
              >
                <FaTimes size={24} />
              </button>
            </div>

            <div className="absolute inset-y-0 left-4 flex items-center justify-center">
              <button
                className="text-white p-2 bg-gray-800 bg-opacity-50 rounded-full"
                onClick={goToPreviousMedia}
              >
                <FaChevronLeft size={30} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center justify-center">
              <button
                className="text-white p-2 bg-gray-800 bg-opacity-50 rounded-full"
                onClick={goToNextMedia}
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
