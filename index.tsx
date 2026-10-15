import React from 'react';
import { Coffee, MapPin, ChevronRight, Menu, Search, Instagram, Facebook, Twitter } from 'lucide-react';

export default function CafeBlogApp() {
  const blogPosts = [
    {
      id: 1,
      title: "手沖咖啡的藝術：如何在家泡出完美的一杯",
      excerpt: "探索水溫、研磨度與沖泡時間的微妙平衡，讓您的早晨充滿濃郁的咖啡香...",
      date: "2026年10月15日",
      category: "咖啡知識",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "秋季限定！肉桂蘋果塔全新上市",
      excerpt: "隨著微涼的秋風吹起，我們的主廚為您帶來充滿溫暖氣息的全新甜點...",
      date: "2026年10月10日",
      category: "新品上市",
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "尋訪世界咖啡莊園：哥倫比亞的奇幻旅程",
      excerpt: "跟隨我們的尋豆師，一起走入高海拔的雲霧林中，尋找最純粹的咖啡風味...",
      date: "2026年10月5日",
      category: "產地故事",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-stone-800">
      {/* Navigation */}
      <nav className="border-b border-stone-200 bg-white sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-2 cursor-pointer">
              <Coffee className="h-8 w-8 text-amber-700" />
              <span className="font-serif text-2xl font-bold tracking-tight text-stone-900">
                Brew & Read
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">首頁</a>
              <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">文章分類</a>
              <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">我們的豆子</a>
              <a href="#" className="text-stone-600 hover:text-amber-700 transition-colors font-medium">關於我們</a>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-stone-600 hover:text-amber-700 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="md:hidden p-2 text-stone-600">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-stone-900 h-[60vh] flex items-center justify-center">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=2000')" }}
        />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <span className="text-amber-400 font-medium tracking-wider uppercase text-sm mb-4 block">
            Welcome to the Cafe
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            一杯好咖啡，<br/>一段好時光。
          </h1>
          <p className="text-lg text-stone-200 mb-8 max-w-xl mx-auto">
            在這裡，我們分享關於咖啡的知識、甜點的故事，以及那些發生在咖啡館裡的美好日常。
          </p>
          <button className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300">
            閱讀最新文章
          </button>
        </div>
      </div>

      {/* Main Content - Blog Grid */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif font-bold text-stone-900">最新文章</h2>
          <a href="#" className="hidden sm:flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors">
            查看全部 <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-amber-800 uppercase tracking-wide">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-sm text-stone-500 mb-3">{post.date}</div>
                <h3 className="text-xl font-bold font-serif text-stone-900 mb-3 group-hover:text-amber-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-stone-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-amber-700 font-medium text-sm mt-auto">
                  繼續閱讀 <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-stone-100 py-20 border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Coffee className="h-10 w-10 text-stone-400 mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold text-stone-900 mb-4">訂閱咖啡香</h2>
          <p className="text-stone-600 mb-8 max-w-lg mx-auto">
            加入我們的電子報，每月接收最新的咖啡沖煮技巧、新豆資訊與限定甜點優惠。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="您的電子郵件" 
              className="flex-grow px-4 py-3 rounded-full border border-stone-300 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600"
            />
            <button className="bg-stone-900 hover:bg-stone-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 whitespace-nowrap">
              訂閱
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-stone-800 pb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Coffee className="h-6 w-6 text-amber-600" />
                <span className="font-serif text-xl font-bold text-white">
                  Brew & Read
                </span>
              </div>
              <p className="text-sm max-w-sm mb-6">
                一個致力於分享咖啡文化與美好生活的部落格。我們相信，一杯好咖啡能喚醒不僅是精神，還有對生活的熱情。
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">快速連結</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-amber-500 transition-colors">關於我們</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">文章歸檔</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">咖啡豆選購</a></li>
                <li><a href="#" className="hover:text-amber-500 transition-colors">聯絡我們</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">實體店面</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>106 台北市大安區<br/>咖啡路 123 號 1 樓</span>
                </li>
                <li>營業時間：<br/>週一至週日 10:00 - 18:00</li>
              </ul>
            </div>
          </div>
          <div className="text-sm text-center text-stone-500">
            &copy; {new Date().getFullYear()} Brew & Read Cafe Blog. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}