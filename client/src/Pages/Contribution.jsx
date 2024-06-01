import React from 'react'
import user1 from './PageImages/user1.png'
import user2 from './PageImages/user2.jpg'
import user3 from './PageImages/user3.avif'
import user4 from './PageImages/user4.avif'
import user5 from './PageImages/user5.avif'
import user6 from './PageImages/user6.avif'



function Contribution() {
    const users = [
        { src:user1, alt: 'User 1' },
        { src:user2, alt: 'User 2' },
        { src:user3, alt: 'User 3' },
        { src:user4, alt: 'User 4' },
        { src:user5, alt: 'User 5' },
        { src:user6, alt: 'User 6' },
      ];
  return (
    <>
 <div className="flex flex-col items-center bg-black p-2 rounded-lg shadow-lg">
      
      <div className="flex -space-x-4">
        {users.map((user, index) => (
          <img
            key={index}
            src={user.src}
            alt={user.alt}
            className="w-12 h-12 rounded-full border-2 border-purple-600 shadow-md"
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default Contribution