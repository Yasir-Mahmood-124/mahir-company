'use client';
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
        @import url('https://fonts.googleapis.com/css2?family=Dawning+of+a+New+Day&display=swap');
        
        .banner-section { 
          background: linear-gradient(to right, #f5ebe8 0%, #faf5f3 50%, #fff 100%);
          padding: 40px 0;
          position: relative;
          overflow: hidden;
          min-height: 550px;
        }
        
        .decorative-leaf-top {
          position: absolute;
          top: 10px;
          right: 50px;
          width: 180px;
          height: 180px;
          z-index: 0;
        }
        
        .decorative-leaf-bottom {
          position: absolute;
          bottom: 20px;
          left: 20px;
          width: 120px;
          height: 120px;
          z-index: 0;
        }
        
        .container { 
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }
        
        .banner-grid { 
          display: grid;
          grid-template-columns: 48% 52%;
          gap: 20px;
          align-items: center;
        }
        
        .content-order-1 { order: 1; }
        .content-order-2 { order: 2; }
        
        @media (max-width: 1024px) {
          .banner-grid { 
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .content-order-1 { order: 2; }
          .content-order-2 { order: 1; }
          .container {
            padding: 0 30px;
          }
          .left-content {
            padding-right: 0;
            text-align: center;
          }
          .banner-heading { 
            font-size: 3.2rem !important;
            margin-bottom: 12px;
          }
          .banner-detail {
            font-size: 1.05rem;
          }
          .button-group {
            justify-content: center;
          }
          .search-container {
            max-width: 500px;
            margin: 0 auto;
          }
          .image-container {
            padding-left: 0;
            justify-content: center;
          }
          .decorative-shape {
            width: 500px;
            height: 420px;
          }
          .image-slider {
            max-width: 480px;
          }
          .pink-circle {
            right: 10px;
            width: 55px;
            height: 55px;
          }
          .decorative-leaf-top {
            width: 140px;
            height: 140px;
            top: 5px;
            right: 25px;
          }
          .decorative-leaf-bottom {
            width: 90px;
            height: 90px;
          }
        }
        
        @media (max-width: 768px) {
          .banner-section { 
            padding: 30px 0;
            min-height: auto;
          }
          .banner-grid {
            gap: 25px;
          }
          .content-order-1 { order: 2; }
          .content-order-2 { order: 1; }
          .container {
            padding: 0 20px;
          }
          .banner-heading { 
            font-size: 2.6rem !important;
            line-height: 1.2;
          }
          .banner-detail {
            font-size: 1rem;
            margin-bottom: 20px;
          }
          .button-group {
            gap: 12px;
            margin-bottom: 20px;
          }
          .btn {
            padding: 11px 30px;
            font-size: 0.95rem;
          }
          .btn-icon {
            width: 48px;
            height: 48px;
          }
          .search-container {
            max-width: 100%;
          }
          .search-input {
            padding: 12px 18px 12px 40px;
            font-size: 0.9rem;
          }
          .decorative-shape {
            width: 420px;
            height: 360px;
          }
          .image-slider {
            max-width: 400px;
          }
          .pink-circle {
            right: 5px;
            width: 48px;
            height: 48px;
            top: 15%;
          }
          .decorative-leaf-top {
            width: 110px;
            height: 110px;
            top: 10px;
            right: 15px;
          }
          .decorative-leaf-bottom {
            width: 75px;
            height: 75px;
          }
          .modal-content {
            padding: 25px;
          }
          .modal-title {
            font-size: 1.2rem;
          }
        }
        
        @media (max-width: 480px) {
          .banner-section {
            padding: 20px 0;
          }
          .banner-grid {
            gap: 20px;
          }
          .content-order-1 { order: 2; }
          .content-order-2 { order: 1; }
          .container {
            padding: 0 15px;
          }
          .banner-heading { 
            font-size: 2.2rem !important;
          }
          .banner-detail {
            font-size: 0.95rem;
            margin-bottom: 16px;
          }
          .button-group {
            flex-direction: column;
            width: 100%;
            gap: 10px;
          }
          .btn {
            width: 100%;
            padding: 12px 20px;
          }
          .btn-icon {
            width: 45px;
            height: 45px;
            align-self: center;
          }
          .search-container {
            max-width: 100%;
          }
          .search-input {
            padding: 11px 16px 11px 38px;
            font-size: 0.88rem;
          }
          .search-icon {
            left: 12px;
          }
          .decorative-shape {
            width: 340px;
            height: 290px;
          }
          .image-slider {
            max-width: 320px;
            border: 4px solid white;
          }
          .pink-circle {
            right: -10px;
            width: 40px;
            height: 40px;
            top: 12%;
          }
          .decorative-leaf-top {
            width: 85px;
            height: 85px;
            top: 5px;
            right: 10px;
          }
          .decorative-leaf-bottom {
            width: 55px;
            height: 55px;
            bottom: 10px;
            left: 5px;
          }
          .service-list {
            max-height: 250px;
          }
          .service-item {
            padding: 12px 14px;
          }
          .service-title {
            font-size: 0.88rem;
          }
          .service-price {
            font-size: 0.8rem;
          }
          .modal-content {
            padding: 20px;
            width: 95%;
          }
          .form-input {
            padding: 10px 14px;
          }
        }
        
        @media (max-width: 360px) {
          .banner-section {
            padding: 15px 0;
          }
          .content-order-1 { order: 2; }
          .content-order-2 { order: 1; }
          .container {
            padding: 0 12px;
          }
          .banner-heading { 
            font-size: 1.9rem !important;
          }
          .btn {
            font-size: 0.9rem;
            padding: 10px 18px;
          }
          .search-input {
            padding: 10px 14px 10px 36px;
            font-size: 0.85rem;
          }
          .search-icon {
            left: 10px;
          }
          .icon {
            width: 18px;
            height: 18px;
          }
          .decorative-shape {
            width: 290px;
            height: 250px;
          }
          .image-slider {
            max-width: 280px;
          }
          .decorative-leaf-top {
            width: 65px;
            height: 65px;
          }
          .decorative-leaf-bottom {
            width: 45px;
            height: 45px;
          }
          .service-item {
            padding: 10px 12px;
          }
          .service-title {
            font-size: 0.82rem;
          }
          .service-price {
            font-size: 0.75rem;
          }
        }
        
        .left-content {
          padding-right: 20px;
        }
        
        .banner-heading { 
          color: #B76E78;
          font-size: 4.2rem;
          font-weight: 400;
          margin-bottom: 8px;
          font-family: 'Dawning of a New Day', cursive;
          line-height: 1.15;
          letter-spacing: 0.5px;
        }
        
        .banner-detail { 
          color: #4a4a4a;
          font-size: 1.05rem;
          margin-bottom: 28px;
          font-weight: 400;
          letter-spacing: 0.3px;
        }
        
        .button-group { 
          display: flex;
          gap: 18px;
          margin-bottom: 28px;
          align-items: center;
        }
        
        .btn { 
          padding: 13px 42px;
          border-radius: 8px;
          border: none;
          font-size: 1.05rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(183, 110, 120, 0.25);
        }
        
        .btn-primary { 
          background-color: #B27381;
          color: white;
        }
        
        .btn-primary:hover { 
          background-color: #9d6370;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(183, 110, 120, 0.35);
        }
        
        .btn-icon { 
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: #B27381;
          color: white;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(183, 110, 120, 0.25);
        }
        
        .btn-icon:hover { 
          background-color: #9d6370;
          transform: scale(1.08);
        }
        
        .search-container { 
          position: relative;
          max-width: 100%;
        }
        
        .search-input { 
          width: 100%;
          padding: 14px 20px 14px 45px;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
          background: white;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          box-sizing: border-box;
        }
        
        .search-input:focus { 
          border-color: #B76E78;
          box-shadow: 0 2px 8px rgba(183, 110, 120, 0.15);
        }
        
        .search-icon { 
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
          pointer-events: none;
        }
        
        .service-list { 
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          max-height: 350px;
          overflow-y: auto;
          z-index: 1000;
        }
        
        .service-item { 
          padding: 14px 18px;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .service-item:last-child {
          border-bottom: none;
        }
        
        .service-item:hover { 
          background-color: #fef9f9;
          padding-left: 22px;
        }
        
        .service-title { 
          font-weight: 600;
          color: #333;
          margin-bottom: 4px;
          font-size: 0.95rem;
        }
        
        .service-price { 
          color: #B76E78;
          font-size: 0.85rem;
          font-weight: 500;
        }
        
        .image-container {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 30px;
        }
        
        .decorative-shape {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 650px;
          height: 520px;
          border: 2.5px solid #d4a5ad;
          border-radius: 48% 52% 45% 55% / 55% 48% 52% 45%;
          opacity: 0.6;
          z-index: 0;
        }
        
        .image-slider { 
          border-radius: 48% 52% 45% 55% / 55% 48% 52% 45%;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          position: relative;
          z-index: 1;
          max-width: 600px;
          border: 6px solid white;
        }
        
        .slider-image { 
          width: 100%;
          height: auto;
          display: block;
        }
        
        .pink-circle {
          position: absolute;
          top: 20%;
          right: -30px;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #ff6b9d 0%, #f5a5ba 100%);
          border-radius: 50%;
          z-index: 2;
          box-shadow: 0 4px 15px rgba(255, 107, 157, 0.3);
        }
        
        .modal-overlay { 
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          backdrop-filter: blur(3px);
        }
        
        .modal-content { 
          background: white;
          padding: 32px;
          border-radius: 16px;
          width: 90%;
          max-width: 420px;
          position: relative;
          box-shadow: 0 15px 40px rgba(0,0,0,0.2);
        }
        
        .modal-header { 
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 22px;
          border-bottom: 2px solid #f5e6e8;
          padding-bottom: 12px;
        }
        
        .modal-title { 
          font-size: 1.4rem;
          font-weight: 600;
          color: #B76E78;
        }
        
        .close-btn { 
          background: none;
          border: none;
          font-size: 1.7rem;
          cursor: pointer;
          color: #999;
          transition: color 0.2s ease;
          line-height: 1;
        }
        
        .close-btn:hover {
          color: #B76E78;
        }
        
        .form-group { margin-bottom: 18px; }
        
        .form-label { 
          display: block;
          margin-bottom: 7px;
          color: #555;
          font-weight: 500;
          font-size: 0.95rem;
        }
        
        .form-input { 
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e8d4d7;
          border-radius: 10px;
          font-size: 0.95rem;
          outline: none;
          transition: all 0.3s ease;
          box-sizing: border-box;
        }
        
        .form-input:focus { 
          border-color: #B76E78;
          box-shadow: 0 0 0 3px rgba(183, 110, 120, 0.1);
        }
        
        .icon { width: 20px; height: 20px; }
      `}</style>

      <div className="banner-section">
        {/* Decorative Leaves */}
        <div className="decorative-leaf-top">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M140 20 L180 40 L170 80 L160 100 Q150 90 140 80 L130 60 Z" fill="#d63384" opacity="0.5"/>
            <path d="M150 50 Q160 70 150 90" stroke="#ff6b9d" strokeWidth="3" fill="none" opacity="0.6"/>
            <circle cx="165" cy="35" r="12" fill="#ff6b9d" opacity="0.7"/>
            <ellipse cx="145" cy="70" rx="8" ry="15" fill="#d63384" opacity="0.4"/>
            <path d="M175 55 L185 70 L175 85" stroke="#d63384" strokeWidth="2" fill="none" opacity="0.5"/>
          </svg>
        </div>
        
        <div className="decorative-leaf-bottom">
          <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="90" r="18" fill="#d63384" opacity="0.4"/>
            <path d="M15 75 Q25 60 40 70 L50 85" stroke="#ff6b9d" strokeWidth="2.5" fill="none" opacity="0.5"/>
            <ellipse cx="45" cy="95" rx="12" ry="8" fill="#ff6b9d" opacity="0.6"/>
          </svg>
        </div>

        <div className="container">
          <div className="banner-grid">
            <div className="left-content content-order-1">
              <h1 className="banner-heading">
                Professional<br/>
                Personal Care<br/>
                Services at Home
              </h1>
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
                  placeholder="search"
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

            <div className="image-container content-order-2">
              <div className="decorative-shape"></div>
              <div className="image-slider">
                <img src={bannerImages[currentImageIndex]} alt="Beautician Service" className="slider-image" />
              </div>
              <div className="pink-circle"></div>
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