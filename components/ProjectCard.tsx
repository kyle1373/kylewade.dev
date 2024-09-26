'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  FaGithub,
  FaExternalLinkAlt,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaPlay,
} from 'react-icons/fa'

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
  title
  subtitle?
  description
  websiteLink?
  githubLink?
  logoImage?
  mediaItems? // This will now handle both images and videos
  numberOfUsers?
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0)

  const openModal = (index) => {
    setCurrentMediaIndex(index)
    setIsModalOpen(true)
  }

  const closeModal = () => setIsModalOpen(false)

  const goToPreviousMedia = () => {
    setCurrentMediaIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1))
  }

  const goToNextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === mediaItems.length - 1 ? prevIndex : prevIndex + 1
    )
  }

  // Function to close modal if clicked outside the media
  const handleClickOutside = (event) => {
    if (event.target.id === 'modal-background') {
      closeModal()
    }
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen) {
        if (event.key === 'ArrowLeft') {
          goToPreviousMedia()
        } else if (event.key === 'ArrowRight') {
          goToNextMedia()
        } else if (event.key === 'Escape') {
          closeModal()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isModalOpen, currentMediaIndex, mediaItems.length])

  const renderMedia = (media) => {
    const isVideo = media.endsWith('.mp4') || media.endsWith('.webm')
    if (isVideo) {
      return (
        <video controls autoPlay className="h-auto max-h-[90vh] w-full rounded-lg">
          <source src={media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )
    } else {
      return (
        <img
          src={media}
          alt={`Media ${currentMediaIndex + 1}`}
          className="h-auto max-h-[90vh] w-full max-w-[90vw] rounded-lg object-contain"
        />
      )
    }
  }

  const getThumbnail = (media) => {
    const isVideo = media.endsWith('.mp4') || media.endsWith('.webm')
    if (isVideo) {
      // Generate the thumbnail path based on the video URL
      const thumbnailPath = media
        .replace('/videos/', '/thumbnails/')
        .replace('.mp4', '.png')
        .replace('.webm', '.png')
      return (
        <div className="relative h-24 w-24 cursor-pointer">
          <img
            src={thumbnailPath}
            alt={`Thumbnail for ${title}`}
            className="h-full w-full rounded-lg object-cover"
            onClick={() => openModal(currentMediaIndex)}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-gray-800 bg-opacity-50 p-2">
              <FaPlay size={30} className="ml-1 text-white opacity-80" />
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <img
          src={media}
          alt={`${title} media ${currentMediaIndex + 1}`}
          className="h-24 w-24 cursor-pointer rounded-lg object-cover"
          onClick={() => openModal(currentMediaIndex)}
        />
      )
    }
  }

  return (
    <div className="rounded-xl bg-zinc-800/30 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <div className="flex items-center">
        {logoImage && <img src={logoImage} alt={`${title} logo`} className="mr-4 h-12 w-12" />}
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {subtitle && <h3 className="text-lg font-semibold text-gray-400">{subtitle}</h3>}
        </div>
      </div>
      <p className="mt-4 text-gray-300">{description}</p>
      {numberOfUsers && <p className="mt-2 text-sm text-gray-500">Users: {numberOfUsers}</p>}
      {mediaItems && (
        <div className="mt-4 flex space-x-4">
          {mediaItems.map((media, index) => (
            <div key={index} onClick={() => openModal(index)}>
              {getThumbnail(media)}
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex space-x-4">
        {websiteLink && (
          <Link
            href={websiteLink}
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt size={20} />
          </Link>
        )}
        {githubLink && (
          <Link
            href={githubLink}
            className="text-blue-400 hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <div className="absolute right-4 top-4 z-40">
              <button
                className="rounded-full bg-gray-800 bg-opacity-50 p-1 text-white"
                onClick={closeModal}
              >
                <FaTimes size={24} />
              </button>
            </div>

            {currentMediaIndex > 0 && (
              <div className="absolute inset-y-0 left-4 flex items-center justify-center">
                <button
                  className="rounded-full bg-gray-800 bg-opacity-50 p-2 text-white"
                  onClick={goToPreviousMedia}
                >
                  <FaChevronLeft size={30} />
                </button>
              </div>
            )}

            {currentMediaIndex < mediaItems.length - 1 && (
              <div className="absolute inset-y-0 right-4 flex items-center justify-center">
                <button
                  className="rounded-full bg-gray-800 bg-opacity-50 p-2 text-white"
                  onClick={goToNextMedia}
                >
                  <FaChevronRight size={30} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
