import React from "react";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Card({
  title,
  subtitle,
  description,
  websiteLink,
  githubLink,
  logoImage,
  screenshotImages,
  numberOfUsers,
}: {
  title;
  subtitle?;
  description;
  websiteLink?;
  githubLink?;
  logoImage?;
  screenshotImages?;
  numberOfUsers?;
}) {
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
              className="h-24 w-24 object-cover rounded-lg"
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
    </div>
  );
}
