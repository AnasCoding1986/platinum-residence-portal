
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, Bath, Move, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  imageUrl: string;
  featured?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  area,
  imageUrl,
  featured = false,
}: PropertyCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`property-card group overflow-hidden rounded-lg bg-white shadow-md 
        hover:shadow-xl transition-all duration-500 ease-in-out ${
        featured ? "border-2 border-gold-300" : ""
      }`}
    >
      <div className="relative overflow-hidden h-60">
        {featured && (
          <div className="absolute top-0 right-0 z-10 bg-gold-400 text-white 
            px-4 py-1 text-xs font-semibold transform rotate-0 origin-top-right">
            Featured
          </div>
        )}
        <div className="absolute inset-0 bg-platinum-100 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-platinum-100 to-platinum-200 
            animate-pulse" />
        </div>
        <img
          src={imageUrl}
          alt={title}
          className={`property-image w-full h-full object-cover transition-all duration-700 
            ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 
          group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-cormorant font-bold text-luxury-darkblue 
            group-hover:text-luxury-blue transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
          <p className="text-gold-600 font-semibold text-sm md:text-base">{price}</p>
        </div>

        <div className="flex items-center mt-2 text-platinum-500 text-sm">
          <MapPin size={14} className="mr-1" />
          <p className="line-clamp-1">{location}</p>
        </div>

        <div className="grid grid-cols-3 gap-2 mt-4 border-t border-platinum-100 pt-4">
          <div className="flex items-center text-sm text-platinum-600">
            <Bed size={16} className="mr-1.5" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center text-sm text-platinum-600">
            <Bath size={16} className="mr-1.5" />
            <span>{bathrooms}</span>
          </div>
          <div className="flex items-center text-sm text-platinum-600">
            <Move size={16} className="mr-1.5" />
            <span>{area}</span>
          </div>
        </div>

        <Link
          to={`/properties/${id}`}
          className="mt-4 inline-flex items-center text-sm font-medium text-luxury-blue 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300 
            hover:text-luxury-darkblue"
        >
          View Details
          <ChevronRight size={16} className="ml-1 transition-transform 
            group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
