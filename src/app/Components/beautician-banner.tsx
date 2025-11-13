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
        .banner-section { 
          background: linear-gradient(135deg, #f5e6e8 0%, #f9f2f3 50%, #fef8f9 100%);
          padding: 60px 0;
          position: relative;
          overflow: hidden;
          min-height: 500px;
        }
        .banner-section::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          background: url('data:image/svg+xml,<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M50 20 L80 50 L60 80 L30 70 Z" fill="%23d63384" opacity="0.6"/><circle cx="160" cy="40" r="15" fill="%23ff6b9d" opacity="0.7"/><path d="M170 60 Q180 80 170 100" stroke="%23ff6b9d" stroke-width="3" fill="none" opacity="0.5"/></svg>') no-repeat;
          background-size: contain;
        }
        .banner-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 150px;
          height: 150px;
          background: url('data:image/svg+xml,<svg width="150" height="150" viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg"><circle cx="30" cy="120" r="20" fill="%23d63384" opacity="0.5"/><path d="M10 100 Q20 80 40 90" stroke="%23ff6b9d" stroke-width="2" fill="none" opacity="0.6"/></svg>') no-repeat;
          background-size: contain;
        }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 1; }
        .banner-grid { display: grid; grid-template-columns: 45% 55%; gap: 40px; align-items: center; }
        @media (max-width: 768px) {
          .banner-grid { grid-template-columns: 1fr; }
          .banner-section { padding: 40px 0; }
          .banner-heading { font-size: 2.5rem !important; }
        }
        .banner-heading { 
          color: #B76E78;
          font-size: 3.5rem;
          font-weight: 400;
          margin-bottom: 15px;
          font-family: 'Brush Script MT', cursive, serif;
          line-height: 1.2;
          letter-spacing: 1px;
        }
        .banner-detail { 
          color: #444;
          font-size: 1.1rem;
          margin-bottom: 35px;
          font-weight: 400;
          letter-spacing: 0.5px;
        }
        .button-group { display: flex; gap: 20px; margin-bottom: 35px; flex-wrap: wrap; align-items: center; }
        .btn { 
          padding: 14px 40px;
          border-radius: 30px;
          border: none;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(183, 110, 120, 0.3);
        }
        .btn-primary { 
          background-color: #B76E78;
          color: white;
        }
        .btn-primary:hover { 
          background-color: #A05968;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(183, 110, 120, 0.4);
        }
        .btn-icon { 
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background-color: #ff6b9d;
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        }
        .btn-icon:hover { 
          background-color: #ff5089;
          transform: scale(1.1);
        }
        .search-container { 
          position: relative;
          max-width: 500px;
        }
        .search-input { 
          width: 100%;
          padding: 16px 20px 16px 50px;
          border: 2px solid #e8d4d7;
          border-radius: 30px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 2px 10px rgba(183, 110, 120, 0.1);
        }
        .search-input:focus { 
          border-color: #B76E78;
          box-shadow: 0 4px 15px rgba(183, 110, 120, 0.2);
        }
        .search-icon { 
          position: absolute;
          left: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #B76E78;
        }
        .service-list { 
          position: absolute;
          top: calc(100% + 10px);
          left: 0;
          right: 0;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(183, 110, 120, 0.15);
          max-height: 400px;
          overflow-y: auto;
          z-index: 1000;
        }
        .service-item { 
          padding: 16px 20px;
          border-bottom: 1px solid #f5e6e8;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .service-item:hover { 
          background-color: #fef8f9;
          padding-left: 25px;
        }
        .service-title { 
          font-weight: 600;
          color: #333;
          margin-bottom: 5px;
        }
        .service-price { 
          color: #B76E78;
          font-size: 0.9rem;
          font-weight: 500;
        }
        .image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .image-frame {
          position: relative;
          width: 100%;
          max-width: 550px;
        }
        .image-frame::before {
          content: '';
          position: absolute;
          top: -15px;
          left: -15px;
          right: 15px;
          bottom: 15px;
          border: 3px solid #B76E78;
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          opacity: 0.3;
          z-index: 0;
        }
        .image-slider { 
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(183, 110, 120, 0.25);
          position: relative;
          z-index: 1;
          border: 5px solid white;
        }
        .slider-image { 
          width: 100%;
          height: auto;
          display: block;
          transition: opacity 0.5s ease;
        }
        .modal-overlay { 
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(5px);
        }
        .modal-content { 
          background: white;
          padding: 35px;
          border-radius: 25px;
          width: 90%;
          max-width: 450px;
          position: relative;
          box-shadow: 0 20px 60px rgba(183, 110, 120, 0.3);
        }
        .modal-header { 
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
          border-bottom: 2px solid #f5e6e8;
          padding-bottom: 15px;
        }
        .modal-title { 
          font-size: 1.5rem;
          font-weight: 600;
          color: #B76E78;
        }
        .close-btn { 
          background: none;
          border: none;
          font-size: 1.8rem;
          cursor: pointer;
          color: #999;
          transition: color 0.2s ease;
        }
        .close-btn:hover {
          color: #B76E78;
        }
        .form-group { margin-bottom: 20px; }
        .form-label { 
          display: block;
          margin-bottom: 8px;
          color: #555;
          font-weight: 500;
        }
        .form-input { 
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #e8d4d7;
          border-radius: 15px;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }
        .form-input:focus { 
          border-color: #B76E78;
          box-shadow: 0 0 0 3px rgba(183, 110, 120, 0.1);
        }
        .icon { width: 22px; height: 22px; }
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

            <div className="image-container">
              <div className="image-frame">
                <div className="image-slider">
                  <img src={bannerImages[currentImageIndex]} alt="Service Banner" className="slider-image" />
                </div>
              </div>
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