'use client'
import { useState } from "react";
import { Sparkles, TrendingUp } from "lucide-react";


const blogPosts = [
  {
    id: 1,
    title: "The Art of Luxury: Redefining Modern Hotel Experiences",
    excerpt: "Discover how contemporary luxury hotels are revolutionizing the guest experience through innovative design, personalized service, and cutting-edge technology that creates unforgettable memories.",
    // image: blogHero,
    category: "Luxury Stays",
    author: "Emma Thompson",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    featured: true
  },
  {
    id: 2,
    title: "Culinary Excellence: A Journey Through Our Award-Winning Restaurant",
    excerpt: "Explore the exceptional dining experience that awaits you at our Michelin-starred restaurant, where every dish tells a story of passion, creativity, and culinary mastery.",
    // image: blogDining,
    category: "Dining",
    author: "Chef Marcus Rodriguez",
    date: "Dec 12, 2024",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Wellness Redefined: The Ultimate Spa Experience",
    excerpt: "Immerse yourself in tranquility at our world-class spa, where ancient healing traditions meet modern wellness techniques for the ultimate rejuvenation experience.",
    // image: blogSpa,
    category: "Spa & Wellness",
    author: "Dr. Sarah Chen",
    date: "Dec 10, 2024",
    readTime: "5 min read"
  },
  {
    id: 4,
    title: "Architectural Marvel: The Story Behind Our Iconic Design",
    excerpt: "Take a behind-the-scenes look at the architectural vision and design philosophy that shaped our hotel's stunning contemporary aesthetic and timeless elegance.",
    // image: blogLobby,
    category: "Luxury Stays",
    author: "David Park",
    date: "Dec 8, 2024",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Hidden Gems: Exploring Local Attractions Near Our Hotel",
    excerpt: "Discover the best-kept secrets and must-visit attractions in our neighborhood, curated by our local experts to enhance your stay with authentic experiences.",
    // image: blogSpa,
    category: "Local Attractions",
    author: "Local Concierge Team",
    date: "Dec 5, 2024",
    readTime: "4 min read"
  },
  {
    id: 6,
    title: "Sustainable Luxury: Our Commitment to Environmental Excellence",
    excerpt: "Learn about our innovative sustainability initiatives and how we're leading the hospitality industry towards a more environmentally conscious future.",
    // image: blogLobby,
    category: "Luxury Stays",
    author: "Sustainability Team",
    date: "Dec 3, 2024",
    readTime: "6 min read"
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 px-6 lg:px-8 bg-gradient-hero">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-8 h-8 text-secondary" />
            <span className="text-secondary font-semibold tracking-wide uppercase">Hotel Blog</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Stories of
            <span className="text-transparent bg-gradient-luxury bg-clip-text"> Luxury</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover the world of exceptional hospitality through our curated collection of stories, 
            insights, and experiences that define modern luxury travel.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Trending Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-secondary" />
              <h2 className="text-2xl font-bold text-foreground">Trending Now</h2>
            </div>
          </div>

          {/* Filters */}
         

          {/* Blog Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Post */}
            {featuredPost && (
             <h1>hi</h1>
            )}

            {/* Regular Posts */}
            {regularPosts.map((post) => (
              <h1 key={post.id}>hi</h1>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">No articles found</p>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;