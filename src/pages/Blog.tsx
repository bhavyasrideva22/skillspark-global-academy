
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { blogPosts, BlogPost } from '@/data/blogData';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Search, Calendar, Clock, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(blogPosts);
  const [activeTab, setActiveTab] = useState(categoryParam || 'all');

  useEffect(() => {
    let filtered = blogPosts;
    
    // Apply category filter if specified
    if (categoryParam) {
      filtered = filtered.filter(post => post.category === categoryParam);
      setActiveTab(categoryParam);
    } else {
      setActiveTab('all');
    }
    
    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredPosts(filtered);
  }, [categoryParam, searchTerm]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
  };

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'tech-trends', label: 'Tech Trends' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'career', label: 'Career Advice' },
    { id: 'success-stories', label: 'Success Stories' },
  ];

  // Get featured post (most recent)
  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16">
          <div className="container-section">
            <div className="text-center mb-10 space-y-4">
              <div className="inline-block px-4 py-1.5 bg-brand-purple bg-opacity-10 rounded-full text-brand-purple font-medium text-sm">
                SkillSpark Blog
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">
                Insights & Expertise
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Industry insights, technical tutorials, career advice, and success stories to help you navigate the rapidly evolving tech landscape.
              </p>
            </div>

            {/* Search Box */}
            <div className="max-w-md mx-auto relative mb-16">
              <Search className="absolute left-3 top-3 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search articles, topics, or tags..."
                className="pl-10 py-6 h-auto rounded-xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Tabs */}
            <Tabs value={activeTab} onValueChange={handleTabChange} className="mb-6">
              <TabsList className="mx-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="px-4 py-2"
                  >
                    {category.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </section>

        {/* Featured Post */}
        {activeTab === 'all' && !searchTerm && (
          <section className="py-12 bg-white">
            <div className="container-section">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/2">
                  <img 
                    src={featuredPost.coverImage || '/placeholder.svg'} 
                    alt={featuredPost.title}
                    className="rounded-xl w-full h-[350px] object-cover shadow-lg"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <Badge variant="outline" className="bg-brand-purple bg-opacity-10 text-brand-purple border-brand-purple">
                    Featured
                  </Badge>
                  <h2 className="text-3xl font-bold text-brand-dark">{featuredPost.title}</h2>
                  <p className="text-gray-600">{featuredPost.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <span>{featuredPost.publishDate}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      <span>{featuredPost.readTime} min read</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 mt-2">
                    <img 
                      src={featuredPost.author.avatar} 
                      alt={featuredPost.author.name} 
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-brand-dark">{featuredPost.author.name}</p>
                      <p className="text-sm text-gray-500">{featuredPost.author.title}</p>
                    </div>
                  </div>
                  <Button className="mt-4 bg-brand-purple" asChild>
                    <Link to={`/blog/${featuredPost.slug}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts */}
        <section className="py-16 bg-gray-50">
          <div className="container-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Link to={`/blog/${post.slug}`} key={post.id} className="group">
                  <Card className="h-full hover:shadow-md transition-shadow card-hover overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={post.coverImage || '/placeholder.svg'} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white text-brand-purple font-medium">
                          {post.categoryLabel}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6 space-y-4">
                      <h3 className="text-xl font-bold text-brand-dark group-hover:text-brand-purple transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-1" />
                          <span>{post.publishDate}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-1" />
                          <span>{post.readTime} min read</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name} 
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="text-sm font-medium">{post.author.name}</span>
                      </div>
                      <div className="pt-2 flex justify-between items-center text-brand-purple font-medium">
                        <span>Read more</span>
                        <ArrowUpRight size={16} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-700">No articles found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search or filtering criteria</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
