import React from 'react';
import './pre_delivery.css'; // Assuming the CSS file is in the same directory

const Navbar = () => (
    <div>
        <header>
            <div className="navbar2">
                <div className="logo">
                    Prime <i className="fa-solid fa-car-side" style={{ color: '#f7f9fc', fontSize: '1.3rem' }}></i> <span style={{ color: '#CC5500' }}>Auto</span>
                </div>
                <ul className="links2">
                    <li>
                        <a href="/mainpage"><button className="ab">Home</button></a>
                    </li>
                    <li>
                        <div className="dropdown">
                            <button className="ab">New Cars</button>
                            <div className="dropdown-content">
                                <a className="az" href="/thar_5door">Mahindra Thar ROXX</a>
                                <a className="az" href="/safari">TATA Punch EV</a>
                                <a className="az" href="/innova_hycross">Ennova Hycross</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="/rental_services"><button className="ab">Rental Cars</button></a></li>
                    <li>
                        <div className="dropdown">
                            <button className="ab">Car Services</button>
                            <div className="dropdown-content">
                                <a className="az" href="/challanpage">View And Pay Challan</a>
                                <a className="az" href="/service_history">Car Service History</a>
                                <a className="az" href="/vehicle_details">Check Vehicle Details</a>
                                <a className="az" href="/pre_delivery_inspection">Pre-delivery Inspection</a>
                                <a className="az" href="/car_scrap">Car Scrap</a>
                            </div>
                        </div>
                    </li>
                    <li><a href="/contact_us"><button className="ab">Contact Us</button></a></li>
                </ul>
                <div className="search_sh">
                    <input type="search" id="search" placeholder="Search" />
                    <a className="search"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <div className="toggle_btn">
                    <i className="fa-solid fa-bars"></i>
                </div>
                <div className="login_lg">
                    <i className="fa-solid fa-user"></i>
                    <a href="/signin_form">Login / Signup</a>
                </div>
            </div>
        </header>

        <main className="main">
            <div className="container">
                <div className="main-3">
                    <div className="left-section">
                        <h1>Used Car Inspection: Avoid Risks, Buy Confidently</h1>
                        <p>Spotted a used car outside? Don't stress, we're still here for you. Our inspection will uncover any hidden issues.</p>
                        <div className="features">
                            <div className="feature">Digital Report</div>
                            <div className="feature">Engine Health</div>
                            <div className="feature">Odometer Tampering</div>
                            <div className="feature">Accidental History</div>
                        </div>
                    </div>
                    <div className="right-section">
                        <form>
                            <label htmlFor="car-number">Enter your car number</label>
                            <input type="text" id="car-number" name="car-number" placeholder="DL 01 AB12XX" />
                            <button type="submit">Book Inspection @ ₹999</button>
                        </form>
                        <div className="divider">Or</div>
                        <div className="brand-selection">
                            <p>Start with your car brand</p>
                            <div className="brands">
                                <img src="brand1.png" alt="Brand 1" />
                                <img src="brand2.png" alt="Brand 2" />
                                {/* Add more images as needed */}
                                <button>View All</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <section className="info-cards">
            <div className="card">
                <img src="https://fastly-production.24c.in/cars24/image-gallary/IMG_4_1715618370.png" alt="Water Damage" />
                <h2>Water Damage</h2>
                <p><strong>1 lakh+</strong></p>
                <p>cars are damaged by floods annually, resulting in water damage, rust, and electrical issues</p>
            </div>
            <div className="card">
                <img src="https://fastly-production.24c.in/cars24/image-gallary/IMG_4_1715618431.png" alt="Fake Service History" />
                <h2>Fake Service History</h2>
                <p><strong>15%</strong></p>
                <p>of used car sales have fabricated service records</p>
            </div>
            <div className="card">
                <img src="https://fastly-production.24c.in/cars24/image-gallary/IMG_4_1715618600.png" alt="Tampered Odometers" />
                <h2>Tampered Odometers</h2>
                <p><strong>20-30%</strong></p>
                <p>of used cars in India have tampered odometers</p>
            </div>
            <div className="card">
                <img src="https://fastly-production.24c.in/cars24/image-gallary/IMG_4_1715618704.png" alt="Hidden Accident History" />
                <h2>Hidden Accident History</h2>
                <p><strong>40%</strong></p>
                <p>of used cars have some accidental history</p>
            </div>
        </section>

        <main className="main-5">
            <div className="gray">
                <h2>Hassle-Free Inspection (Here's How)</h2>
                <div className="reas-boxes">
                    <div className="boxes">
                        <div className="imbg">
                            <img src="https://assets.cars24.com/production/c2b-website/240830152555/js/1bce7fdd6907d596d00af70474df8119.png" alt="Step 1" className="imug" />
                        </div>
                        <div className="txtt">
                            <p>Book an inspection</p>
                            <hr />
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="imbg">
                            <img src="https://assets.cars24.com/production/c2b-website/240830152555/js/3eeb56345958ecc5a68c860239df48c4.png" alt="Step 2" className="imug" />
                        </div>
                        <div className="txtt">
                            <p>On-site Inspection, Everytime</p>
                            <hr />
                        </div>
                    </div>
                    <div className="boxes">
                        <div className="imbg">
                            <img src="https://assets.cars24.com/production/c2b-website/240830152555/js/f08b26d1660a3024ac749529423cd576.png" alt="Step 3" className="imug" />
                        </div>
                        <div className="txtt">
                            <p>Digital Report on Your Fingertips</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <section className="S_section">
            <h2>Our happy customers</h2>
            <div className="S_container">
                <div className="S-card">
                    <p className="quote">"Never thought about getting a PDI done, but CARS24 changed my mind. Found some issues I didn't notice before."</p>
                    <div className="rating">
                        <span>★★★★★</span>
                    </div>
                    <div className="customer-info">
                        <p className="customer-name">Rajesh M</p>
                        <p className="customer-location">Amritsar</p>
                    </div>
                    <img src="https://fastly-production.24c.in/cars24/testimonials/1715621163_10160482764.png" alt="Rajesh M" />
                </div>
                <div className="S-card">
                    <p className="quote">"Car truth's PDI helped uncover hidden issues in the car I wanted to buy."</p>
                    <div className="rating">
                        <span>★★★★½</span>
                    </div>
                    <div className="customer-info">
                        <p className="customer-name">Yogendra Mane</p>
                        <p className="customer-location">Mumbai</p>
                    </div>
                    <img src="https://fastly-production.24c.in/cars24/testimonials/1715621109_10177481767.png" alt="Yogendra Mane" />
                </div>
                <div className="S-card">
                    <p className="quote">"Got a PDI done by CARS24 before buying my car. The expert found some issues I didn't even know about."</p>
                    <div className="rating">
                        <span>★★★★★</span>
                    </div>
                    <div className="customer-info">
                        <p className="customer-name">Kavita V</p>
                        <p className="customer-location">Mysore</p>
                    </div>
                    <img src="https://fastly-production.24c.in/cars24/testimonials/1715621326_10121282747.png" alt="Kavita V" />
                </div>
            </div>
        </section>

        <footer className="footer">
            <div className="footer-container">
                <div>
                    <h4>About Us</h4>
                    <p>We provide the best car sales and rental services in the region. With a wide range of vehicles and great deals, we ensure a hassle-free experience.</p>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Featured Cars</a></li>
                        <li><a href="#">Rentals</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h4>Contact Us</h4>
                    <p><strong>Email:</strong> support@CarWebsite.com</p>
                    <p><strong>Phone:</strong> +1 234 567 890</p>
                    <p><strong>Location:</strong> 123 Main St, Cityville, USA</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 CarSalesAndRentals. All Rights Reserved.</p>
            </div>
        </footer>


    </div>
);

export default Navbar;
