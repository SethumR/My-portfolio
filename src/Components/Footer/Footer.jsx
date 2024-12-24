import React from 'react'

function Footer() {
  return (
    <footer className="px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 py-6 text-gray-300 mb-12">
      <div className="container mx-auto">
        <hr className=" mb-6" />
        <p className="text-center text-sm sm:text-base font-medium">
          © {new Date().getFullYear()} Sethum Ruberu
        </p>
      </div>
    </footer>
  )
}

export default Footer

