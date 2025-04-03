import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

// Sample news data
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "New AI Detection Algorithm Achieves 95% Accuracy",
    excerpt: "Our research team has developed a breakthrough algorithm that can detect AI-generated content with unprecedented accuracy.",
    date: "2023-11-15",
    category: "Research",
    imageUrl: "/news-image-1.jpg"
  },
  {
    id: 2,
    title: "The Rise of AI-Generated Content in Marketing",
    excerpt: "How businesses are leveraging AI tools for content creation and the ethical implications of this trend.",
    date: "2023-11-10",
    category: "Industry",
    imageUrl: "/news-image-2.jpg"
  },
  {
    id: 3,
    title: "Watermarking: The Future of AI Content Attribution",
    excerpt: "Exploring how digital watermarking technology is being used to identify the source of AI-generated content.",
    date: "2023-11-05",
    category: "Technology",
    imageUrl: "/news-image-3.jpg"
  }
];

export default function AINewsSection() {
  const [news, setNews] = useState<NewsItem[]>([]);
  
  useEffect(() => {
    // In a real app, this would be an API call
    setNews(newsItems);
  }, []);
  
  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <section className="py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 mb-10 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">AI Detection News</h2>
            <p className="text-muted-foreground mt-2">
              Stay updated with the latest developments in AI content detection
            </p>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary">{item.category}</Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {formatDate(item.date)}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{item.excerpt}</p>
                <Button variant="ghost" className="p-0 h-auto font-medium">
                  Read Article <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
