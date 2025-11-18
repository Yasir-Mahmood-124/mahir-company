"use client";

import React from "react";
import Image from "next/image";
import { ArrowForward } from "@mui/icons-material";

// ✅ Props type (optional - agar dynamic content chahiye)
type AnnouncementProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  onReadMore?: () => void;
  megaphoneIcon?: any; // Megaphone image import
  appViewImage?: any; // App view image import
};

export default function AnnouncementSection({
  title = "Mr. UstadonCall is Now UstadonCall Company!",
  description = "Previously known as Mr. UstadonCall. UstadonCall Company is your go-to and on-demand expert for all your Home & Personal Care Services. We are serving you 24/7 since 2019. The trust and love you have shown us over this period, has inspired us to go bigger & better. Now accelerating & expanding our operations to become even more accessible, reliable, fast, safe, and pocket-friendly for you, our users. And a pioneer of enablement and empowerment to our vendors.",
  buttonText = "Read more",
  onReadMore,
  megaphoneIcon,
  appViewImage,
}: AnnouncementProps) {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    if (onReadMore) {
      onReadMore();
    } else {
      console.log("Read more clicked");
    }
  };

  return (
    <div
      style={{
        background: "#ffffff",
        padding: isMobile ? "40px 20px" : "60px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            background: "#e8e8e8",
            borderRadius: "20px",
            padding: isMobile ? "40px 25px" : "50px 60px",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 350px",
            gap: isMobile ? "30px" : "40px",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Left Content */}
          <div style={{ zIndex: 2 }}>
            <h2
              style={{
                fontSize: isMobile ? "1.5rem" : "2rem",
                fontWeight: "700",
                color: "#000",
                marginBottom: "20px",
                lineHeight: 1.3,
              }}
            >
              {title}
            </h2>

            <p
              style={{
                fontSize: isMobile ? "0.95rem" : "1.05rem",
                color: "#000",
                lineHeight: 1.7,
                marginBottom: "25px",
                fontWeight: "400",
              }}
            >
              {description}
            </p>

            <button
              onClick={handleClick}
              style={{
                background: "transparent",
                color: "#000",
                border: "none",
                padding: "0",
                fontSize: "1.05rem",
                fontWeight: "700",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateX(5px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              {buttonText}
              <ArrowForward sx={{ fontSize: "20px" }} />
            </button>
          </div>

          {/* Right Images */}
          {!isMobile && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                position: "relative",
                zIndex: 2,
              }}
            >
              {/* Megaphone Icon */}
              <div
                style={{
                  width: "140px",
                  height: "140px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {megaphoneIcon ? (
                  <Image
                    src={megaphoneIcon}
                    alt="Announcement"
                    width={140}
                    height={140}
                    style={{
                      objectFit: "contain",
                    }}
                  />
                ) : (
                  <div style={{ fontSize: "100px" }}>📢</div>
                )}
              </div>

              {/* App View Image */}
              {appViewImage && (
                <div
                  style={{
                    width: "250px",
                    height: "80px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    background: "#fff",
                  }}
                >
                  <Image
                    src={appViewImage}
                    alt="App View"
                    width={250}
                    height={80}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
            </div>
          )}

          {/* Decorative Wave Pattern - Exact same as image */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              background: "rgba(255,255,255,0.15)",
              clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)",
              zIndex: 1,
            }}
          />
        </div>
      </div>
    </div>
  );
}