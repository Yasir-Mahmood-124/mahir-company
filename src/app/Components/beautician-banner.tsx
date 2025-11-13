import React, { useState, useEffect } from 'react';

interface Service {
  id: number;
  title: string;
  price: number;
  priceComment: string;
  slug: string;
}

const services: Service[] = [
  { id: 60001, title: "Eye Makeup Without Lashes", price: 1500, priceComment: "Signature Makeup", slug: "makeup-services" },
  { id: 60002, title: "Party Makeup With Free Hairstyling and Lashes", price: 4000, priceComment: "Signature Makeup", slug: "makeup-services" },
  { id: 60010, title: "Hair Dye and Wash", price: 1500, priceComment: "Without Color", slug: "hair-treatment-services" },
  { id: 60013, title: "Full Body Fruit Wax Except Face", price: 3550, priceComment: "Discounted Price", slug: "waxing-services" },
  { id: 60020, title: "Mani Pedi", price: 2250, priceComment: "Discounted Price", slug: "mani-pedi-services" },
  { id: 60024, title: "Gold Facial", price: 2500, priceComment: "Discounted Price", slug: "facial-services" }
];

const bannerImages = [
  "https://cdn.mrmahir.com/uploads/c23d8f3f-65bc-4f41-94dc-5256fc3c3a76.jpg",
  "https://cdn.mrmahir.com/uploads/908eca6a-b66e-437d-ba5d-8f0530332e02.png",
  "https://cdn.mrmahir.com/uploads/c04c04ed-52bd-44d3-a3df-bf15c6bdcb30.png"
];

export default function BeauticianBanner() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showServices, setShowServices] = useState(false);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [callDialogOpen, setCallDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phoneNo: '' });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % bannerImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = services.filter(service =>
        service.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredServices(filtered);
      setShowServices(true);
    } else {
      setFilteredServices([]);
      setShowServices(false);
    }
  }, [searchQuery]);

  const handleServiceSelect = (service: Service) => {
    console.log('Selected service:', service);
    setShowServices(false);
    setSearchQuery('');
  };

  const handleCallRequest = () => {
    console.log('Call request submitted:', formData);
    setCallDialogOpen(false);
    setFormData({ name: '', phoneNo: '' });
  };

  return (
    <>
      <style jsx>{`
        .banner-section { background-color: #FFF5F7; padding: 80px 0; position: relative; overflow: hidden; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .banner-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: center; }
        @media (max-width: 768px) {
          .banner-grid { grid-template-columns: 1fr; }
          .banner-section { padding: 40px 0; }
          .banner-heading { font-size: 2rem !important; }
        }
        .banner-heading { color: #B76E78; font-size: 3rem; font-weight: bold; margin-bottom: 20px; font-family: serif; }
        .banner-detail { color: #666; font-size: 1.2rem; margin-bottom: 30px; font-style: italic; }
        .button-group { display: flex; gap: 15px; margin-bottom: 30px; flex-wrap: wrap; }
        .btn { padding: 12px 32px; border-radius: 25px; border: none; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; }
        .btn-primary { background-color: #CB0E55; color: white; }
        .btn-primary:hover { background-color: #A00C44; }
        .btn-icon { width: 50px; height: 50px; border-radius: 50%; background-color: #CB0E55; color: white; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
        .btn-icon:hover { background-color: #A00C44; }
        .search-container { position: relative; }
        .search-input { width: 100%; padding: 15px 20px 15px 50px; border: 2px solid #E0E0E0; border-radius: 25px; font-size: 1rem; outline: none; transition: border-color 0.3s ease; }
        .search-input:focus { border-color: #CB0E55; }
        .search-icon { position: absolute; left: 20px; top: 50%; transform: translateY(-50%); color: #999; }
        .service-list { position: absolute; top: calc(100% + 10px); left: 0; right: 0; background: white; border-radius: 15px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); max-height: 400px; overflow-y: auto; z-index: 1000; }
        .service-item { padding: 15px 20px; border-bottom: 1px solid #F0F0F0; cursor: pointer; transition: background-color 0.2s ease; }
        .service-item:hover { background-color: #FFF5F7; }
        .service-title { font-weight: 600; color: #333; margin-bottom: 5px; }
        .service-price { color: #666; font-size: 0.9rem; }
        .image-slider { border-radius: 20px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.12); }
        .slider-image { width: 100%; height: auto; display: block; transition: opacity 0.5s ease; }
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 2000; }
        .modal-content { background: white; padding: 30px; border-radius: 15px; width: 90%; max-width: 500px; position: relative; }
        .modal-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; }
        .modal-title { font-size: 1.5rem; font-weight: 600; color: #333; }
        .close-btn { background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #999; }
        .form-group { margin-bottom: 20px; }
        .form-label { display: block; margin-bottom: 8px; color: #555; font-weight: 500; }
        .form-input { width: 100%; padding: 12px 15px; border: 2px solid #E0E0E0; border-radius: 10px; font-size: 1rem; outline: none; transition: border-color 0.3s ease; box-sizing: border-box; }
        .form-input:focus { border-color: #CB0E55; }
        .icon { width: 24px; height: 24px; }
      `}</style>

      <div className="banner-section">
        <div className="container">
          <div className="banner-grid">
            <div>
              <h1 className="banner-heading">Professional Personal Care Services at Home</h1>
              <p className="banner-detail">we like taking care of you!</p>

              <div className="button-group">
                <button className="btn btn-primary">Book Now</button>
                <button className="btn-icon" onClick={() => setCallDialogOpen(true)}>
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </button>
              </div>

              <div className="search-container">
                <span className="search-icon">
                  <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </span>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                
                {showServices && filteredServices.length > 0 && (
                  <div className="service-list">
                    {filteredServices.map((service) => (
                      <div key={service.id} className="service-item" onClick={() => handleServiceSelect(service)}>
                        <div className="service-title">{service.title}</div>
                        <div className="service-price">PKR {service.price} - {service.priceComment}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="image-slider">
              <img src={bannerImages[currentImageIndex]} alt="Service Banner" className="slider-image" />
            </div>
          </div>
        </div>
      </div>

      {callDialogOpen && (
        <div className="modal-overlay" onClick={() => setCallDialogOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">Request a Call</h2>
              <button className="close-btn" onClick={() => setCallDialogOpen(false)}>×</button>
            </div>
            <div>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Mobile Number</label>
                <input
                  type="tel"
                  className="form-input"
                  value={formData.phoneNo}
                  onChange={(e) => setFormData({ ...formData, phoneNo: e.target.value })}
                />
              </div>
              <button onClick={handleCallRequest} className="btn btn-primary" style={{ width: '100%' }}>
                Send Request
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}