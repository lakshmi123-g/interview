import { useEffect, useState } from "react";
import { getImages } from "../services/api";
import ImageCard from "./ImageCard";
import SkeletonCard from "./SkeletonCard";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // 👉 Fetch images
  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await getImages(page);
      setImages((prev) => [...prev, ...data]);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  // 👉 Call API when page changes
  useEffect(() => {
    fetchData();
  }, [page]);

  // 👉 Scroll logic (simple)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // if reached bottom → load next page
      if (scrollTop + windowHeight >= fullHeight - 100 && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="grid">
      {images.map((img) => (
        <ImageCard key={img.id} image={img} />
      ))}

      {loading &&
        Array(6)
          .fill(0)
          .map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
};

export default ImageList;