"use client";

// Removed Once UI components import; using plain HTML structure
import React from "react";

export interface ArchiveItem {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

interface ArchiveSlideProps {
  item: ArchiveItem;
}

const ArchiveSlide: React.FC<ArchiveSlideProps> = ({ item }) => {
  return (
    <figure className="gallery__item">
            <div className="gallery__item-img">
        <div
          className="gallery__item-imginner"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        />
      </div>
      <figcaption className="gallery__item-caption">
        <h2 className="gallery__item-title" data-splitting>
          {item.title}
        </h2>
        <span className="gallery__item-number">
          {String(item.id).padStart(2, "0")}
        </span>
        <p className="gallery__item-text">{item.description}</p>
        <p className="gallery__item-text">{item.date}</p>
      </figcaption>
        </figure>
  );
};

export default ArchiveSlide;
