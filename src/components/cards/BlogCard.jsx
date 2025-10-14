import { ArrowRight, TagIcon, User } from "lucide-react";
import { TfiComment } from "react-icons/tfi";
import { Button } from "../ui/button";
const BlogCard = () => {
  return (
    <>
      <div className="hover:shadow-xl group rounded-sm overflow-hidden transition-all duration-300">
        <div>
          <img
            src="https://images.pexels.com/photos/235294/pexels-photo-235294.jpeg?_gl=1*8b6e5k*_ga*MTY1NjIwMjMwNy4xNzU1NTMxNDA3*_ga_8JE65Q40S6*czE3NjAxOTAzNTckbzI3JGcwJHQxNzYwMTkwMzU3JGo2MCRsMCRoMA.."
            alt="image of fruit"
            className="aspect-video"
          />
        </div>
        {/* Text Content */}
        <div className="p-6">
          {/* Tag, Posted By, Comment */}
          <div className="flex gap-4">
            <div className="flex gap-1 items-center text-sm text-gray-700">
              <TagIcon size={16} className="text-gray-300" /> Food
            </div>
            <div className="flex gap-1 items-center text-sm text-gray-700">
              <User size={16} className="text-gray-300" /> By Admin
            </div>
            <div className="flex gap-1 items-center text-sm text-gray-700">
              <TfiComment size={16} className="text-gray-300" /> 65 Comment
            </div>
          </div>
          {/* Blog Title */}
          <h1 className="text-lg font-medium line-clamp-2 leading-7 mt-2 group-hover:text-hardPrimary transition-all duration-200">
            Curabitur porttitor orci eget neque accumsan venenatis. Nunc
            fermentum.
          </h1>
          {/* Read More Button */}
          <Button
            variant={"Ghost"}
            className={
              "p-0 has-[>svg]:px-0 text-base font-semibold mt-5 group-hover:text-Primary transition-all duration-200 cursor-pointer"
            }
          >
            Read More <ArrowRight />
          </Button>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
