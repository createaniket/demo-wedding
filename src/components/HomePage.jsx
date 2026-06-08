import heroDrone      from '../assets/hero-drone.jpg'
import aboutStillLife  from '../assets/about-still-life.jpg'
import destLakeComo    from '../assets/dest-lake-como.jpg'
import destSantorini   from '../assets/dest-santorini.jpg'
import destBali        from '../assets/dest-bali.jpg'
import destDubai       from '../assets/dest-dubai.jpg'
import destMaldives    from '../assets/dest-maldives.jpg'
import destTuscany     from '../assets/dest-tuscany.jpg'
import destMarrakech   from '../assets/dest-marrakech.jpg'
import destIbiza       from '../assets/dest-ibiza.jpg'
import destMykonos     from '../assets/dest-mykonos.jpg'
import destPhuket      from '../assets/dest-phuket.jpg'
import portfolioIndian   from '../assets/portfolio-indian.jpg'
import portfolioBeach    from '../assets/portfolio-beach.jpg'
import portfolioVineyard from '../assets/portfolio-vineyard.jpg'
import portfolioSunset   from '../assets/portfolio-sunset.jpg'

// Drop your hosted .mp4 URL here to re-enable the hero video
const HERO_VIDEO_URL = ''

export default function HomePage() {
  return (
    <div className="bg-background text-foreground font-sans selection:bg-accent/20">

      {/* ==================== HERO ==================== */}
      <section className="relative h-screen w-full overflow-hidden bg-stone-900">
        <div className="absolute inset-0">
          {HERO_VIDEO_URL ? (
            <video
              src={HERO_VIDEO_URL}
              poster={heroDrone}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Cinematic drone view of a Santorini cliffside wedding at golden hour"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={heroDrone}
              alt="Cinematic drone view of a Santorini cliffside wedding at golden hour"
              className="w-full h-full object-cover animate-hero-zoom"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white italic leading-[1.15] text-balance max-w-[32ch] animate-fade-up">
            Extraordinary Weddings.<br />Anywhere in the World.
          </h1>
          <p className="mt-8 text-white/80 max-w-[50ch] text-base md:text-lg leading-relaxed animate-fade-up [animation-delay:200ms]">
            Curated, designed and delivered for couples seeking unforgettable celebrations across the world's most iconic destinations.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up [animation-delay:400ms]">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-foreground hover:bg-accent hover:text-white transition-colors duration-500 uppercase tracking-[0.2em] text-[11px] font-medium"
            >
              Plan Your Wedding
            </a>
            <a
              href="#"
              className="px-8 py-4 border border-white/30 text-white backdrop-blur-sm hover:bg-white/10 transition-colors duration-500 uppercase tracking-[0.2em] text-[11px] font-medium"
            >
              Download Brochure
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/40 animate-scroll-line" />
        </div>
      </section>

      {/* ==================== ABOUT ==================== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
                The Atelier
              </span>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
                We Are{' '}
                <span className="italic">Curators</span> of the
                Extraordinary.
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg mb-10">
                We don't simply organise weddings. We source destinations,
                negotiate venues, design experiences, coordinate suppliers and
                deliver world-class celebrations from concept to completion.
              </p>
              <a
                href="#services"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-medium border-b border-foreground pb-2 hover:text-accent hover:border-accent transition-colors"
              >
                Discover Our Services
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div className="p-6 md:p-8 border border-border space-y-3 hover:border-accent/50 transition-colors">
                  <h3 className="font-serif text-xl md:text-2xl italic">Wedding Curators</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The architects of your vision, selecting only the most exclusive venues and partners worldwide.
                  </p>
                </div>
                <div className="p-6 md:p-8 border border-border space-y-3 hover:border-accent/50 transition-colors">
                  <h3 className="font-serif text-xl md:text-2xl italic">Creative Designers</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Mastering the visual language of your day, from floral concepts to custom lighting design.
                  </p>
                </div>
                <div className="p-6 md:p-8 border border-border space-y-3 hover:border-accent/50 transition-colors">
                  <h3 className="font-serif text-xl md:text-2xl italic">Event Producers</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managing the invisible logistics that make high-stakes events feel effortless and magical.
                  </p>
                </div>
                <div className="p-6 md:p-8 border border-border space-y-3 hover:border-accent/50 transition-colors">
                  <h3 className="font-serif text-xl md:text-2xl italic">Travel Specialists</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Curating guest experiences, transfers, and accommodations across the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 md:mt-24">
            <img
              src={aboutStillLife}
              alt="Luxury wedding stationery with gold wax seal and silk ribbon"
              className="w-full h-[300px] md:h-[500px] object-cover"
              loading="lazy"
              width={800}
              height={1000}
            />
          </div>
        </div>
      </section>

      {/* ==================== DESTINATIONS ==================== */}
      <section id="destinations" className="bg-stone-100 py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
                (01) Horizons
              </span>
              <h2 className="font-serif text-4xl md:text-5xl italic">
                Featured Destinations
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-foreground/20 pb-1">
              Explore the Globe
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Lake Como */}
            <div className="group cursor-pointer relative overflow-hidden aspect-[3/4]">
              <img
                src={destLakeComo}
                alt="Aerial view of a grand Italian villa on Lake Como"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">Italy</span>
                <h3 className="text-2xl md:text-3xl font-serif italic mt-1">Lake Como</h3>
              </div>
            </div>

            {/* Dubai */}
            <div className="group cursor-pointer relative overflow-hidden aspect-[3/4]">
              <img
                src={destDubai}
                alt="Dubai desert dunes at golden hour with luxury dinner setup"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">UAE</span>
                <h3 className="text-2xl md:text-3xl font-serif italic mt-1">Dubai</h3>
              </div>
            </div>

            {/* Maldives */}
            <div className="group cursor-pointer relative overflow-hidden aspect-[3/4]">
              <img
                src={destMaldives}
                alt="Maldives overwater villa at sunset with turquoise lagoon"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                loading="lazy"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 text-white">
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">Indian Ocean</span>
                <h3 className="text-2xl md:text-3xl font-serif italic mt-1">Maldives</h3>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[
              { name: 'Santorini', img: destSantorini },
              { name: 'Bali',      img: destBali },
              { name: 'Marrakech', img: destMarrakech },
              { name: 'Ibiza',     img: destIbiza },
              { name: 'Phuket',    img: destPhuket },
            ].map((dest) => (
              <div key={dest.name} className="group cursor-pointer relative overflow-hidden aspect-[4/3]">
                <img
                  src={dest.img}
                  alt={`${dest.name} destination`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-[0.2em] font-medium">{dest.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 max-w-md mx-auto">
            {['Tuscany', 'Mykonos'].map((name) => (
              <div key={name} className="group cursor-pointer relative overflow-hidden aspect-[4/3]">
                <img
                  src={name === 'Tuscany' ? destTuscany : destMykonos}
                  alt={`${name} destination`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <span className="text-white text-xs uppercase tracking-[0.2em] font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WEDDING COLLECTIONS ==================== */}
      <section id="collections" className="bg-stone-900 text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
                (02) Collections
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic leading-tight">
                Our Collections
              </h2>
              <p className="mt-6 text-white/60 text-base md:text-lg max-w-md leading-relaxed">
                Every love story deserves a setting as unique as the couple.
                Explore our signature wedding experiences.
              </p>
            </div>
            <div className="space-y-0">
              {[
                { num: '01', title: 'Beach Weddings',       desc: 'Sunset ceremonies on white sand beaches with the ocean as your backdrop.' },
                { num: '02', title: 'Villa Weddings',        desc: 'Private luxury estates and exclusive-use properties for intimate celebrations.' },
                { num: '03', title: 'Luxury Hotel Weddings', desc: 'Five-star resorts and iconic destinations with world-class service.' },
                { num: '04', title: 'Cultural Weddings',     desc: 'Indian, Hindu, Sikh, Muslim, Christian and mixed-faith celebrations.' },
                { num: '05', title: 'Multi-Day Experiences', desc: 'Immersive 3–7 day celebrations spanning welcome parties to farewell brunches.' },
              ].map((item) => (
                <div key={item.num} className="group border-b border-white/10 py-6 md:py-8 cursor-pointer">
                  <div className="flex justify-between items-center">
                    <h4 className="text-xl md:text-2xl font-serif">{item.title}</h4>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 group-hover:text-accent transition-colors">
                      {item.num} / 05
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/40 max-w-lg hidden group-hover:block animate-fade-in">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
              (03) What We Deliver
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: 'Wedding Planning',
                items: ['Venue sourcing', 'Supplier management', 'Guest logistics', 'Budget management', 'Timeline planning'],
              },
              {
                title: 'Wedding Design',
                items: ['Mood boards', 'Styling & decor', 'Floral concepts', 'Table design', 'Lighting design', 'Entertainment planning'],
              },
              {
                title: 'Guest Experience',
                items: ['Flights & hotels', 'Airport transfers', 'Welcome gifts', 'Activities & excursions', 'Concierge services'],
              },
              {
                title: 'Production',
                items: ['Lighting & sound', 'Staging', 'Special effects', 'Live entertainment', 'Drone filming', 'Content creation'],
              },
            ].map((service) => (
              <div key={service.title} className="p-6 md:p-8 border border-border hover:border-accent/40 transition-colors">
                <h3 className="font-serif text-xl md:text-2xl italic mb-6 pb-4 border-b border-border">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== THE PROCESS ==================== */}
      <section className="bg-stone-900 text-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent mb-6 block">
              Methodology
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 italic">
              The Journey to I Do
            </h2>
            <p className="text-white/60 mb-10 text-base md:text-lg leading-relaxed">
              A meticulous six-step process refined through decades of global
              event production. From first conversation to final toast.
            </p>
            <a
              href="#contact"
              className="inline-flex px-10 py-4 bg-white text-foreground uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-accent hover:text-white transition-colors duration-500"
            >
              Start Your Journey
            </a>
          </div>
          <div className="space-y-0">
            {[
              { num: '01', title: 'Discovery',             desc: 'Tell us your vision. We listen, understand, and begin translating dreams into blueprints.' },
              { num: '02', title: 'Destination Selection', desc: 'We shortlist destinations and venues, arranging private site visits and negotiations.' },
              { num: '03', title: 'Design & Budget',       desc: 'Concept creation paired with granular financial engineering and aesthetic mood boarding.' },
              { num: '04', title: 'Planning',              desc: 'Supplier sourcing, guest management, and logistics coordination across time zones.' },
              { num: '05', title: 'Wedding Week',          desc: '24/7 on-site concierge and executive production management from arrival to departure.' },
              { num: '06', title: 'Celebration',           desc: "The moment you've been waiting for. You become a guest at your own extraordinary party." },
            ].map((step) => (
              <div key={step.num} className="group border-b border-white/10 py-6 md:py-8 flex items-start gap-6 md:gap-8">
                <span className="font-mono text-lg md:text-xl text-accent shrink-0 w-8">{step.num}</span>
                <div>
                  <h3 className="text-lg md:text-xl font-serif italic mb-1">{step.title}</h3>
                  <p className="text-sm text-white/40 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PORTFOLIO ==================== */}
      <section id="portfolio" className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
            Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl italic">The Portfolio</h2>
        </div>

        <div className="flex overflow-x-auto gap-6 px-6 pb-8 no-scrollbar snap-x snap-mandatory">
          {[
            { img: portfolioIndian,   title: 'The Jaipur Palace Wedding', tag: 'Cultural Heritage', alt: 'Vibrant traditional Indian wedding ceremony in a palace garden' },
            { img: portfolioBeach,    title: 'Amanpuri Oceanside',        tag: 'Minimalist Luxe',   alt: 'Minimalist white sand beach wedding ceremony in Phuket' },
            { img: portfolioVineyard, title: 'The Chianti Celebration',   tag: 'Editorial Vineyard', alt: 'Champagne tower at a black tie reception in a Tuscan vineyard' },
            { img: portfolioSunset,   title: 'Santorini Sunset Vows',     tag: 'Cliffside Ceremony', alt: 'Sunset vows ceremony on a cliff edge with dramatic sky' },
          ].map((item) => (
            <div key={item.title} className="min-w-[300px] md:min-w-[500px] lg:min-w-[600px] snap-start space-y-4 md:space-y-6">
              <div className="overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  className="w-full aspect-[3/2] object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={1200}
                  height={800}
                />
              </div>
              <div className="flex justify-between items-center px-1">
                <h4 className="font-serif text-xl md:text-2xl">{item.title}</h4>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  {item.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== WEDDING WEEK ==================== */}
      <section className="bg-stone-100 py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
              (04) Immersive Experiences
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic">Wedding Week Experiences</h2>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Show your guests this is more than a wedding. Curated itineraries
              that transform a single day into an unforgettable journey.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { day: 'Day 1', title: 'Welcome Party',      desc: 'Cocktails and canapés as guests arrive from across the world.' },
              { day: 'Day 2', title: 'Boat Charter',        desc: 'Private yacht or traditional longtail cruise along the coastline.' },
              { day: 'Day 3', title: 'Wedding Ceremony',    desc: "The moment you've dreamed of, set against an extraordinary backdrop." },
              { day: 'Day 4', title: 'Beach Club Recovery', desc: 'Relaxed brunch, spa treatments, and sunset cocktails by the water.' },
              { day: 'Day 5', title: 'Farewell Brunch',     desc: 'A final gathering before guests depart with hearts full of memories.' },
            ].map((day) => (
              <div key={day.day} className="bg-background p-6 md:p-8 border border-border hover:border-accent/30 transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">{day.day}</span>
                <h3 className="font-serif text-xl md:text-2xl italic mt-3 mb-3">{day.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{day.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== LUXURY PARTNERS ==================== */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
              Global Network
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic">Luxury Partners</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              'Five-Star Hotels', 'Private Villas', 'Exclusive Islands',
              'Photographers', 'Videographers', 'Florists',
              'Luxury Transport', 'Private Chefs', 'Entertainment',
              'Wine Partners', 'Jewellers', 'Fashion Houses',
            ].map((partner) => (
              <div key={partner} className="p-6 md:p-8 border border-border text-center hover:border-accent/30 transition-colors">
                <span className="text-xs uppercase tracking-[0.15em] font-medium text-muted-foreground">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="bg-stone-100 py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
              Client Stories
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic">Testimonials</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                quote: "Saanti didn't just plan our wedding—they crafted an experience none of our guests will ever forget. Every detail was extraordinary.",
                name: 'Amara & James', location: 'Lake Como, Italy',
              },
              {
                quote: 'From our first call to the final fireworks, the team was impeccable. They turned our vision into something beyond our imagination.',
                name: 'Priya & Raj', location: 'Jaipur, India',
              },
              {
                quote: 'A seamless, stress-free celebration across five days in Bali. Our guests are still talking about it two years later.',
                name: 'Sophie & Thomas', location: 'Bali, Indonesia',
              },
            ].map((t) => (
              <div key={t.name} className="bg-background p-8 md:p-10 border border-border">
                <p className="font-serif text-lg md:text-xl italic leading-relaxed text-foreground/90 mb-8">
                  "{t.quote}"
                </p>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== JOURNAL ==================== */}
      <section id="journal" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 md:mb-16 gap-4">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
                Insights
              </span>
              <h2 className="font-serif text-4xl md:text-5xl italic">The Journal</h2>
            </div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground border-b border-foreground/20 pb-1 cursor-pointer hover:text-accent hover:border-accent transition-colors">
              View All Articles
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { title: 'Best Wedding Destinations for 2027', date: 'December 2025', category: 'Destinations' },
              { title: 'Lake Como vs Santorini: A Guide',    date: 'November 2025', category: 'Comparisons' },
              { title: 'Destination Wedding Budget Guide',   date: 'October 2025',  category: 'Planning' },
              { title: 'Wedding Week Itinerary Ideas',       date: 'September 2025', category: 'Experiences' },
              { title: 'Luxury Wedding Trends',              date: 'August 2025',   category: 'Trends' },
              { title: 'Cultural Wedding Traditions',        date: 'July 2025',     category: 'Culture' },
            ].map((article) => (
              <a
                key={article.title}
                href="#"
                className="group block border border-border p-6 md:p-8 hover:border-accent/30 transition-colors"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  {article.category}
                </span>
                <h3 className="font-serif text-xl md:text-2xl italic mt-3 mb-4 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {article.date}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section id="contact" className="py-24 md:py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto border border-border p-8 md:p-16 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 -mr-16 -mt-16 rounded-full" />
          <div className="text-center mb-12 md:mb-16">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent block mb-4">
              Enquire
            </span>
            <h2 className="font-serif text-4xl md:text-5xl italic mb-4">Begin Your Narrative</h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Tell us about your dream celebration. Our team will contact you within 48 hours.
            </p>
          </div>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Wedding Date
                </label>
                <input
                  type="text"
                  placeholder="Spring 2026"
                  className="w-full border-b border-border py-3 focus:border-accent outline-none transition-colors bg-transparent text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Estimated Guests
                </label>
                <input
                  type="text"
                  placeholder="50 - 150"
                  className="w-full border-b border-border py-3 focus:border-accent outline-none transition-colors bg-transparent text-sm"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Budget Range
                </label>
                <select className="w-full border-b border-border py-3 focus:border-accent outline-none transition-colors bg-transparent text-sm appearance-none cursor-pointer">
                  <option>€100,000 – €250,000</option>
                  <option>€250,000 – €500,000</option>
                  <option>€500,000 – €1,000,000</option>
                  <option>€1,000,000+</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Preferred Destinations
                </label>
                <input
                  type="text"
                  placeholder="Lake Como, Bali, or Maldives"
                  className="w-full border-b border-border py-3 focus:border-accent outline-none transition-colors bg-transparent text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Wedding Style
              </label>
              <input
                type="text"
                placeholder="e.g. Minimalist, Traditional, Bohemian"
                className="w-full border-b border-border py-3 focus:border-accent outline-none transition-colors bg-transparent text-sm"
              />
            </div>

            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full border-b border-border py-3 focus:border-accent outline-none transition-colors bg-transparent text-sm"
              />
            </div>

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-foreground text-background py-5 uppercase tracking-[0.2em] text-[11px] font-semibold hover:bg-accent transition-colors duration-500"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-16 md:py-20 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="font-serif text-3xl md:text-4xl italic">Saanti Weddings</h3>
              <p className="text-xs text-muted-foreground mt-2 tracking-[0.2em] uppercase">
                Global Wedding Atelier
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-8 md:gap-12 text-[10px] uppercase tracking-[0.2em] font-medium">
              <a href="#destinations" className="hover:text-accent transition-colors">Destinations</a>
              <a href="#collections"  className="hover:text-accent transition-colors">Collections</a>
              <a href="#services"     className="hover:text-accent transition-colors">Services</a>
              <a href="#journal"      className="hover:text-accent transition-colors">Journal</a>
              <a href="#contact"      className="hover:text-accent transition-colors">Contact</a>
            </nav>

            <div className="flex gap-4">
              <a href="#" aria-label="Instagram" className="size-10 rounded-full border border-border flex items-center justify-center text-[10px] hover:bg-accent hover:text-white hover:border-accent transition-colors">IG</a>
              <a href="#" aria-label="Pinterest"  className="size-10 rounded-full border border-border flex items-center justify-center text-[10px] hover:bg-accent hover:text-white hover:border-accent transition-colors">PI</a>
              <a href="#" aria-label="LinkedIn"   className="size-10 rounded-full border border-border flex items-center justify-center text-[10px] hover:bg-accent hover:text-white hover:border-accent transition-colors">LI</a>
            </div>
          </div>

          <div className="mt-16 md:mt-20 pt-8 border-t border-border/50 text-center">
            <p className="font-mono text-[10px] text-muted-foreground opacity-60 uppercase tracking-[0.2em]">
              &copy; {new Date().getFullYear()} Saanti Weddings — Curated in London, Delivered Globally
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
