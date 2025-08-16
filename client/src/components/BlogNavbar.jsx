"use client";

import React from 'react';
import Link from "next/link";
import { Home } from "lucide-react";

const BlogNavbar = () => {
  return (
    <div className="h-16 py-12 flex items-center justify-end">
      <div className="flex items-center gap-4">
        <Link 
          href="/" 
          className="flex items-center gap-2 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogNavbar;
