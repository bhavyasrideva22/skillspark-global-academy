
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { blogPosts, BlogPost } from '@/data/blogData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Calendar, Clock, Share2, Bookmark, ThumbsUp, Facebook, Twitter, Linkedin } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  
  useEffect(() => {
    // Find the post with the matching slug
    const currentPost = blogPosts.find(post => post.slug === slug);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Get related posts (same category, excluding current post)
      const related = blogPosts
        .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
        .slice(0, 3);
      
      setRelatedPosts(related);
      
      // Scroll to top on page load
      window.scrollTo(0, 0);
    } else {
      // If post not found, navigate to blog listing
      navigate('/blog');
    }
  }, [slug, navigate]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post?.title || '')}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast({
          title: "Link copied",
          description: "The article link has been copied to your clipboard."
        });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Loading article...</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Article Header */}
        <section className="pt-12 pb-8 bg-gray-50">
          <div className="container-section">
            <Link to="/blog" className="inline-flex items-center text-brand-purple hover:underline mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to all articles
            </Link>
            
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-brand-purple bg-opacity-10 text-brand-purple border-brand-purple">
                {post.categoryLabel}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center space-x-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name} 
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-brand-dark">{post.author.name}</p>
                    <p className="text-sm text-gray-500">{post.author.title}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    <span>{post.readTime} min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Article Cover Image */}
        <div className="w-full h-[400px] bg-gray-200">
          <img 
            src={post.coverImage || '/placeholder.svg'} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Article Content */}
        <section className="py-12">
          <div className="container-section">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="w-full lg:w-2/3">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t">
                  <h4 className="text-sm text-gray-500 mb-3">Related Topics</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Engagement Actions */}
                <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row sm:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <Button variant="outline" size="sm" className="rounded-full">
                      <ThumbsUp size={16} className="mr-2" />
                      Helpful
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full">
                      <Bookmark size={16} className="mr-2" />
                      Save
                    </Button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-500">Share:</span>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full h-8 w-8"
                      onClick={() => handleShare('facebook')}
                    >
                      <Facebook size={14} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full h-8 w-8"
                      onClick={() => handleShare('twitter')}
                    >
                      <Twitter size={14} />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="rounded-full h-8 w-8"
                      onClick={() => handleShare('linkedin')}
                    >
                      <Linkedin size={14} />
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="rounded-full h-8 w-8"
                        >
                          <Share2 size={14} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => handleShare('copy')}>
                          Copy link
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="w-full lg:w-1/3">
                {/* Author Info Card */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">About the Author</h3>
                    <div className="flex items-center space-x-4 mb-4">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-14 h-14 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-brand-dark">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.author.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Expert instructor with over 10 years of industry experience, specializing in {post.category.split('-').join(' ')} and related technologies.
                    </p>
                  </CardContent>
                </Card>
                
                {/* Related Articles */}
                {relatedPosts.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link to={`/blog/${relatedPost.slug}`} key={relatedPost.id}>
                          <Card className="card-hover">
                            <CardContent className="p-4 flex gap-4">
                              <img 
                                src={relatedPost.coverImage || '/placeholder.svg'} 
                                alt={relatedPost.title}
                                className="w-20 h-20 object-cover rounded"
                              />
                              <div>
                                <h4 className="font-medium text-brand-dark line-clamp-2">
                                  {relatedPost.title}
                                </h4>
                                <div className="flex items-center mt-2 text-xs text-gray-500">
                                  <Clock size={12} className="mr-1" />
                                  <span>{relatedPost.readTime} min read</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Call to Action */}
                <Card className="mt-8 bg-gradient-to-r from-brand-purple to-brand-teal text-white">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Want to learn more?</h3>
                    <p className="mb-4 text-white/90">
                      Explore our courses and start building in-demand skills for your career.
                    </p>
                    <Button className="w-full bg-white text-brand-purple hover:bg-white/90" asChild>
                      <Link to="/courses">View Courses</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogDetail;
