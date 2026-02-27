import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Briefcase, 
  Target, 
  TrendingUp, 
  CheckCircle2, 
  Mail, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Linkedin,
  MessageCircle
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <img 
              src="https://www.utpalghoshofficial.com/images/logo.png" 
              alt="Utpal Ghosh Logo" 
              className="h-10 cursor-pointer object-contain"
            />
          </Link>
          <div className="hidden md:flex gap-8 items-center font-medium text-sm">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#expertise" className="hover:text-primary transition-colors">Expertise</a>
            <a href="#journey" className="hover:text-primary transition-colors">Journey</a>
            <Button className="rounded-full shadow-md" asChild>
              <a href="#contact">Send Message</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
            <motion.div 
              className="w-full md:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Dreamer & Entrepreneur
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-heading text-foreground">
                Hi, I am <br/>
                <span className="text-primary">Utpal Ghosh</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Serial Entrepreneur passionate about Health & Fitness. Empowering start-ups to build sustainable brands and scale businesses.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full text-base shadow-lg hover:shadow-xl transition-all h-14 px-8" asChild>
                  <a href="#contact">
                    Work With Me <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base h-14 px-8" asChild>
                  <a href="https://wa.me/918850916053" target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> Schedule Call
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div 
              className="w-full md:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-[2rem] transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://www.utpalghoshofficial.com/images/section/hero-img.jpg" 
                  alt="Utpal Ghosh" 
                  className="relative z-10 w-full h-full object-cover rounded-[2rem] shadow-2xl"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -left-8 bottom-12 bg-white p-4 rounded-xl shadow-xl z-20 hidden sm:block"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Target className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">15+ Years</p>
                      <p className="text-sm text-muted-foreground">Corporate Exp.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Highlights */}
      <section id="about" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { title: "Building Brands", desc: "Protein Box, Ekaar Wellness, Swagam Hospitality", icon: Briefcase },
              { title: "Business Domains", desc: "Health & Wellness, F&B, Travel & Tourism", icon: Target },
              { title: "Mentorship", desc: "Guiding Start-Ups to achieve their peak potential", icon: TrendingUp },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn}>
                <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-white">
                  <CardContent className="p-8">
                    <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <item.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section id="expertise" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">My Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Utpal's Life Lesson</h3>
            <p className="text-lg text-muted-foreground">
              The Story of Utpal & Healthcode Wellness is a testament to the resilience of human spirit. It reminds us that through determination, passion & a genuine desire to uplift others can become extraordinary entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-5xl mx-auto">
            {[
              { skill: "Leadership", percent: 95 },
              { skill: "Starting, Building & Scaling up Businesses", percent: 75 },
              { skill: "Brand Communication", percent: 90 },
              { skill: "Strategy - Sales & Marketing", percent: 85 },
              { skill: "Talent Management", percent: 80 },
              { skill: "Operation Management", percent: 90 },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-3"
              >
                <div className="flex justify-between font-medium">
                  <span className="text-foreground">{item.skill}</span>
                  <span className="text-primary font-bold">{item.percent}%</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey" className="py-24 bg-foreground text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Utpal's Journey</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading text-white">Professional Experience</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Corporate */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
                <Briefcase className="w-6 h-6" /> 15 Years Corporate
              </h4>
              <div className="space-y-8 border-l-2 border-primary/30 ml-3 pl-8 relative">
                {[
                  { title: "Marketing Head", company: "Altisource Portfolio Solutions", date: "2007-2017", loc: "Delhi" },
                  { title: "Team Leader", company: "Aegis Collection", date: "2005-2007", loc: "Nagpur" },
                  { title: "Marketing Manager", company: "Global Vantage", date: "2003-2005", loc: "Mumbai" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-1 border-4 border-foreground" />
                    <span className="text-primary/80 text-sm font-bold tracking-wider">{item.date}</span>
                    <h5 className="text-xl font-bold mt-1 mb-2 text-white">{item.title}</h5>
                    <p className="text-zinc-400">{item.company} &bull; {item.loc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Entrepreneurial */}
            <div>
              <h4 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
                <Target className="w-6 h-6" /> Entrepreneurial
              </h4>
              <div className="space-y-8 border-l-2 border-primary/30 ml-3 pl-8 relative">
                {[
                  { title: "Healthcode Wellness", desc: "Fitness & Gym Start-up for Creating Awareness" },
                  { title: "Healthcode Protein Box", desc: "Founder. Delivering Healthy Diet to fitness freaks." },
                  { title: "Svagam", desc: "Hospitality. A Boutique Hotel centrally Located in Nagpur." },
                  { title: "Ekaar", desc: "Travel & Tourism. Dealing with Tourism for Elderly People." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[41px] top-1 border-4 border-foreground" />
                    <h5 className="text-xl font-bold mb-2 text-white">{item.title}</h5>
                    <p className="text-zinc-400">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Mentorship Glimpse */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-wider uppercase mb-3">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading">Gallery & Mentorship</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <motion.div 
                key={num}
                whileHover={{ scale: 1.03 }}
                className="group relative rounded-2xl overflow-hidden aspect-square shadow-md"
              >
                <img 
                  src={`https://www.utpalghoshofficial.com/images/portfolio/portfolio${num}.jpg`}
                  alt={`Portfolio ${num}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium text-sm">View Highlight</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-border">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-12 lg:p-16 bg-primary text-primary-foreground flex flex-col justify-between">
                <div>
                  <h3 className="text-4xl font-bold font-heading mb-4 text-white">Contact Info</h3>
                  <p className="text-primary-foreground/90 mb-12 text-lg">
                    Contact us for Collaboration, Mentorship & all other Business Needs.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/80">Call Us</p>
                        <p className="font-bold text-white">+91-88509-16053</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/80">Email Us</p>
                        <p className="font-bold text-white">utpalghoshofficial@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-3 rounded-full">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-primary-foreground/80">Address</p>
                        <p className="font-bold text-white">Miramar, Panaji, Goa - 403001</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-16 pt-8 border-t border-white/20">
                  <p className="text-sm mb-4 font-semibold text-white">Connect on Social</p>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/utpalghosh30" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition-colors">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/utpalghosh30" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition-colors">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://in.linkedin.com/in/utpal-ghosh-a93b4a16" target="_blank" className="bg-white/20 p-3 rounded-full hover:bg-white hover:text-primary transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-12 lg:p-16">
                <h3 className="text-3xl font-bold font-heading mb-8">Just say Hello</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <input type="text" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <input type="text" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email Address</label>
                    <input type="email" className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <textarea rows={4} className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we collaborate?"></textarea>
                  </div>
                  <Button size="lg" className="w-full rounded-xl text-lg h-14">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="py-8 border-t border-border text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Utpal Ghosh. All rights reserved.</p>
      </footer>
    </div>
  );
}
