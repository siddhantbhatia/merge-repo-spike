"use client";
import React, { useState, useRef, useEffect } from "react";

interface VirtualListProps {
  items: string[];
  itemHeight: number;
  height: number;
}

const VirtualList = ({ items, itemHeight, height }: VirtualListProps) => {
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalHeight = items.length * itemHeight;
  const visibleItemCount = Math.ceil(height / itemHeight);
  const buffer = 5; // Number of buffer items to render before and after the visible window
  const startIdx = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
  const endIdx = Math.min(
    items.length,
    Math.floor(scrollTop / itemHeight) + visibleItemCount + buffer
  );

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollTop(containerRef.current.scrollTop);
    }
  };

  useEffect(() => {
    if (!containerRef || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ overflowY: "auto", height: `${height}px`, position: "relative" }}
    >
      <div style={{ height: `${totalHeight}px` }}>
        {items.slice(startIdx, endIdx).map((item, index) => (
          <div
            key={startIdx + index}
            style={{
              position: "absolute",
              top: `${(startIdx + index) * itemHeight}px`,
              height: `${itemHeight}px`,
              width: "100%",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default function VirtualListPage() {
  const items = Array.from({ length: 1000 }, (_, index) => `Item ${index + 1}`);
  const itemHeight = 30; // Height of each item
  const height = 200; // Height of the virtual list container

  return (
    <div>
      <h1>Virtual List Example</h1>
      <VirtualList items={items} itemHeight={itemHeight} height={height} />
    </div>
  );
}
