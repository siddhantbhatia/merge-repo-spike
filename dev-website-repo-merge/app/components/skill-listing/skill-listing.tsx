import React from "react";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}

export const SkillListing = () => {
  const array = [
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
    {
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrdUoIjZppJIYq7InQ5w52tPFzaiMs4TXxLA&s",
      title: "JavaScript",
      description: "Fancy language",
    },
  ];

  return (
    <div className="flex flex-row flex-wrap">
      {array.map(({ imageUrl, title, description }) => (
        <div className="basis-1/2 sm:basis-1/3">
          <Card imageUrl={imageUrl} title={title} description={description} />
        </div>
      ))}
    </div>
  );
};

const Card = ({ imageUrl, title, description }: CardProps) => {
  return (
    <div className="max-w-sm rounded shadow-lg bg-gray-800 ">
      <img className="max-w-full h-auto w-auto" src={imageUrl} />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-300">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </div>
  );
};
