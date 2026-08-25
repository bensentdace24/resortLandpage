import { useState } from 'react';
import { ArrowDown, ArrowRight, CalendarDays, Check, ChevronDown, Clock3, MapPin, Menu, Phone, Shell, Sparkles, Star, Utensils, Waves, X } from 'lucide-react';
import { calculateEstimate, roomOptions } from './booking';

const stays = [
  { name: 'Standard room', detail: 'A breezy base for two', price: 'From ₱3,500', image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Garden room', detail: 'Easygoing stays for four', price: 'From ₱4,000', image: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Two-bedroom villa', detail: 'Room for the whole barkada', price: 'From ₱6,000', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85' },
];

const moments = [
  { icon: Waves, title: 'Float into blue', text: 'Move between the sea and an infinity pool with a wide-open horizon.' },
  { icon: Utensils, title: 'Stay for the flavors', text: 'Make lunch part of the escape at the resort restaurant.' },
  { icon: Shell, title: 'Play all day', text: 'Kayak, ride, swim, or simply claim a quiet patch of sand.' },
];

const notes = [
  { quote: 'The kind of place where the plan becomes: pool, lunch, beach, repeat.', name: 'Couples’ escape', tag: 'Illustrative traveler note' },
  { quote: 'Close enough for an easy arrival, relaxed enough to feel far away.', name: 'Weekend with friends', tag: 'Illustrative traveler note' },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ checkIn: '', checkOut: '', guests: 2, room: 'standard' });
  const [estimate, setEstimate] = useState(null);
  const [attempted, setAttempted] = useState(false);

  const preview = (event) => {
    event.preventDefault();
    setAttempted(true);
    setEstimate(calculateEstimate(form));
  };

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Samal Sands and Shores home">
          <span className="brand-mark"><Waves size={21} /></span>
          <span>Samal Sands<br /><b>& Shores</b></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
          <a href="#stay" onClick={() => setMenuOpen(false)}>Stay</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#plan" onClick={() => setMenuOpen(false)}>Plan your trip</a>
          <a href="#find-us" onClick={() => setMenuOpen(false)}>Find us</a>
          <a className="nav-cta" href="tel:+639687213567"><Phone size={16} /> Call to inquire</a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main id="top">
        <section className="hero">
          <div className="aurora aurora-one" />
          <div className="aurora aurora-two" />
          <div className="hero-copy">
            <div className="island-chip"><Sparkles size={15} /> Your easy island escape</div>
            <h1>Island days,<br /><em>closer than you think.</em></h1>
            <p>Trade the city rush for salt air, poolside afternoons, and unhurried meals—reportedly just five minutes from Samal Ferry Wharf.</p>
            <div className="hero-actions">
              <a className="button button-sun" href="#plan">Plan your stay <ArrowRight size={18} /></a>
              <a className="text-link" href="#experience">Feel the place <ArrowDown size={18} /></a>
            </div>
          </div>
          <div className="hero-visual" aria-label="Tropical beachfront escape">
            <div className="hero-photo" />
            <div className="sun-disc" />
            <div className="floating-note note-top"><MapPin size={17} /><span><b>Caliclic, Babak</b>Samal Island</span></div>
            <div className="floating-note note-bottom"><Clock3 size={17} /><span><b>5 min*</b>from the wharf</span></div>
            <span className="photo-credit">Presentation imagery</span>
          </div>
          <div className="hero-proof">
            <span><Check /> Beachfront</span><span><Check /> Infinity pool</span><span><Check /> Restaurant</span><span><Check /> Pet-friendly*</span>
          </div>
        </section>

        <section className="intro" id="experience">
          <p className="script-line">This is your sign to slow down.</p>
          <div className="intro-heading">
            <h2>Come for the shore.<br />Stay for the feeling.</h2>
            <p>A stay here can be as full or as beautifully empty as you want it. The water is always nearby; the day is yours to shape.</p>
          </div>
          <div className="moment-grid">
            {moments.map(({ icon: Icon, title, text }) => (
              <article className="moment" key={title}><Icon /><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </section>

        <section className="stay-section" id="stay">
          <div className="section-head">
            <h2>Pick your kind<br />of island time.</h2>
            <p>Cozy for two, roomy for the family, or a villa for the whole crew. Sample public rates shown for presentation only.</p>
          </div>
          <div className="stay-track">
            {stays.map((stay, index) => (
              <article className={`stay-card stay-${index + 1}`} key={stay.name}>
                <img src={stay.image} alt="Tropical resort accommodation inspiration" />
                <div className="stay-overlay"><span>{stay.price}*</span><h3>{stay.name}</h3><p>{stay.detail}</p></div>
              </article>
            ))}
          </div>
          <p className="fine-print">*Sample rates found in a public 2025 listing. Please confirm current pricing, capacity, and inclusions directly with the resort.</p>
        </section>

        <section className="planner-section" id="plan">
          <div className="planner-story">
            <span className="round-icon"><CalendarDays /></span>
            <h2>Your island chapter starts here.</h2>
            <p>Try dates, choose a stay, and preview a sample budget. When it feels right, call the resort to confirm real availability.</p>
            <div className="mini-facts"><span>Check-in <b>2:00 PM</b></span><span>Check-out <b>11:00 AM</b></span></div>
          </div>
          <form className="booking-card" onSubmit={preview}>
            <div className="form-top"><span>Stay preview</span><small>Not a live booking</small></div>
            <div className="date-row">
              <label>Check in<input aria-label="Check in" type="date" value={form.checkIn} onChange={e => setForm({ ...form, checkIn: e.target.value })} /></label>
              <label>Check out<input aria-label="Check out" type="date" value={form.checkOut} onChange={e => setForm({ ...form, checkOut: e.target.value })} /></label>
            </div>
            <label>Room type<span className="select-wrap"><select value={form.room} onChange={e => setForm({ ...form, room: e.target.value })}>{Object.entries(roomOptions).map(([value, room]) => <option value={value} key={value}>{room.label}</option>)}</select><ChevronDown /></span></label>
            <label>Travelers<input type="number" min="1" max="12" value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} /></label>
            {estimate && <div className="estimate" role="status"><span><small>{estimate.nights} night{estimate.nights !== 1 ? 's' : ''} · sample estimate</small><strong>₱{estimate.total.toLocaleString()}</strong></span><small>Final rates and availability must be confirmed directly.</small></div>}
            {attempted && !estimate && <p className="form-error" role="alert">Choose a check-out date after your check-in date.</p>}
            <button className="button button-ink" type="submit">Preview my stay <ArrowRight /></button>
            <a className="call-direct" href="tel:+639687213567"><Phone size={16} /> Or call 0968 721 3567</a>
          </form>
        </section>

        <section className="voices">
          <div className="voices-title"><Star fill="currentColor" /><h2>Wish you<br />were here.</h2></div>
          <div className="voice-list">
            {notes.map(note => <blockquote key={note.name}><p>“{note.quote}”</p><footer><b>{note.name}</b><span>{note.tag}</span></footer></blockquote>)}
          </div>
        </section>

        <section className="location" id="find-us">
          <div className="map-panel"><div className="map-lines" /><span className="map-pin"><MapPin /></span><span className="map-label">Samal<br /><b>Sands & Shores</b></span><span className="davao-label">Davao City</span></div>
          <div className="location-copy">
            <h2>Near the city.<br />A world away.</h2>
            <p>Babak, Caliclic (Dangca-an), Samal, 8119 Davao del Norte</p>
            <div className="contact-list">
              <a href="tel:+639687213567"><Phone /> <span>Call or text<b>0968 721 3567</b></span></a>
              <a href="mailto:samalsandshore@gmail.com"><Shell /> <span>Email inquiry<b>samalsandshore@gmail.com</b></span></a>
            </div>
            <a className="button button-sun" href="https://www.google.com/maps/search/?api=1&query=4M47%2BWH%20Samal%2C%20Davao%20del%20Norte" target="_blank" rel="noreferrer">Open in Maps <ArrowRight /></a>
          </div>
        </section>

        <section className="closing">
          <div className="closing-image" />
          <div className="closing-copy"><Sparkles /><h2>The tide is calling.</h2><p>Bring your favorite people. Leave the rush behind.</p><a className="button button-light" href="tel:+639687213567">Ask about your dates <ArrowRight /></a></div>
        </section>
      </main>

      <footer className="footer"><div className="brand footer-brand"><span className="brand-mark"><Waves /></span><span>Samal Sands<br /><b>& Shores</b></span></div><p>Presentation mockup · Public details should be verified with the resort before publishing.</p><a href="#top">Back to top ↑</a></footer>
    </div>
  );
}

export default App;
