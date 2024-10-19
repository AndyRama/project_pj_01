import React from 'react';
import Image from "next/image";

const ReviewSmall = () => {
  return (
    <div className="flex items-center text-white space-x-4  rounded-lg mt-8">
      {/* Avatar Section */}
      <div className="flex -space-x-2">
        <Image src="/images/user1.jpg" width={40} height={40} alt="avatar1" className="rounded-full border-2 border-black" />
        <Image src="/images/user2.jpg" width={40} height={40} alt="avatar2" className="rounded-full border-2 border-black" />
        <Image src="/images/user3.jpg" width={40} height={40} alt="avatar3" className="rounded-full border-2 border-black" />
        <Image src="/images/user4.jpg" width={40} height={40} alt="avatar4" className="rounded-full border-2 border-black" />
        <Image src="/images/user5.jpg" width={40} height={40} alt="avatar5" className="rounded-full border-2 border-black" />
      </div>

      {/* Review Details */}
      <div className="ml-4 flex flex-col">
        <div className=" flex items-center">
          {Array(5).fill().map((_, index) => (
            <span key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400">⭐</span>
          ))}
        </div>
        <p className="text-md mt-3">3500+ followers <br/> sur Instagram</p>
      </div>
    </div>
  );
};

export default ReviewSmall;
