import React from 'react';

const LoginBackground = () => {
  return (
    <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <img
          src="hotel-view.jpg"
          alt="Luxury hotel lobby with modern design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative -mt-24 z-10 flex flex-col justify-center px-12 w-full backdrop-blur-[4px] text-white">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-6">
            Streamline Your Hotel Operations
          </h2>
          
          <p className="text-xl mb-8 text-primary-100">
            Manage bookings, rooms, and guests with our comprehensive hotel management platform.
          </p>

          {/* Feature List */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">✓</span>
              </div>
              <span className="text-primary-100">Real-time booking management</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">✓</span>
              </div>
              <span className="text-primary-100">Room inventory tracking</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">✓</span>
              </div>
              <span className="text-primary-100">Guest profile management</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">✓</span>
              </div>
              <span className="text-primary-100">Performance analytics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBackground;