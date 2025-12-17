"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import TeamMember from "@/components/TeamMember";

const TeamsPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imgDivRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const imgArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
  ];

  const teamMembers = [
    {
      name: "Steven Jack",
      role: "Art Director",
      image: "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
      stickers: [
        { image: "/stickers/creativity.png", label: "Creative Artist", position: { top: "10%", left: "15%" } },
        { image: "/stickers/break.png", label: "Coffee Lover", position: { top: "65%", right: "10%" } },
        { image: "/stickers/karaoke.png", label: "Music Enthusiast", position: { top: "35%", left: "70%" } }
      ]
    },
    {
      name: "Sarah Williams",
      role: "Creative Lead",
      image: "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
      stickers: [
        { image: "/stickers/Smart Camera Icon.png", label: "Innovative Thinker", position: { top: "20%", right: "15%" } },
        { image: "/stickers/Cute Reading Book Icon.png", label: "Bookworm", position: { top: "50%", left: "10%" } },
        { image: "/stickers/Monstera Plant Icon.png", label: "Plant Parent", position: { bottom: "15%", left: "60%" } }
      ]
    },
    {
      name: "Michael Chen",
      role: "UX Designer",
      image: "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
      stickers: [
        { image: "/stickers/Mobile Phone Gadget.png", label: "Tech Enthusiast", position: { top: "25%", left: "20%" } },
        { image: "/stickers/dessert.png", label: "Food Expert", position: { top: "55%", right: "20%" } },
        { image: "/stickers/Plant Icon.png", label: "Mindful", position: { bottom: "20%", left: "15%" } }
      ]
    },
    {
      name: "Emma Rodriguez",
      role: "Frontend Developer",
      image: "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
      stickers: [
        { image: "/stickers/Chat Icon.png", label: "Code Communicator", position: { top: "15%", right: "25%" } },
        { image: "/stickers/F1 Car Icon.png", label: "Speed Runner", position: { top: "45%", left: "15%" } },
        { image: "/stickers/dessert.png", label: "Pizza Addict", position: { bottom: "25%", right: "10%" } }
      ]
    },
    {
      name: "David Kim",
      role: "Backend Developer",
      image: "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
      stickers: [
        { image: "/stickers/Smart Camera Icon.png", label: "Tech Visionary", position: { top: "18%", left: "12%" } },
        { image: "/stickers/oops.png", label: "Debug Master", position: { top: "48%", right: "18%" } },
        { image: "/stickers/karaoke.png", label: "Guitarist", position: { bottom: "18%", left: "55%" } }
      ]
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      image: "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
      stickers: [
        { image: "/stickers/book.png", label: "Data Driven", position: { top: "22%", right: "12%" } },
        { image: "/stickers/Flower Icon (1).png", label: "Nature Explorer", position: { top: "52%", left: "18%" } },
        { image: "/stickers/break.png", label: "Wine Enthusiast", position: { bottom: "22%", right: "25%" } }
      ]
    },
    {
      name: "James Wilson",
      role: "DevOps Engineer",
      image: "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
      stickers: [
        { image: "/stickers/Mobile Phone Gadget.png", label: "System Builder", position: { top: "12%", left: "25%" } },
        { image: "/stickers/Flower Icon (2).png", label: "Outdoor Explorer", position: { top: "42%", right: "15%" } },
        { image: "/stickers/break.png", label: "Craft Beer Lover", position: { bottom: "15%", left: "10%" } }
      ]
    },
    {
      name: "Maria Garcia",
      role: "UI Designer",
      image: "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
      stickers: [
        { image: "/stickers/Flower icon.png", label: "Color Expert", position: { top: "15%", right: "20%" } },
        { image: "/stickers/F1 Car Icon.png", label: "Travel Addict", position: { top: "50%", left: "25%" } },
        { image: "/stickers/creativity.png", label: "Theater Lover", position: { bottom: "20%", right: "15%" } }
      ]
    }
  ];

  const [hoveredMember, setHoveredMember] = useState<{name: string, role: string, image: string, stickers: any[]} | null>(null);
  const [hoveredSticker, setHoveredSticker] = useState<string | null>(null);
  const section3Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(imgDivRef.current, {
      scrollTrigger: {
        trigger: imgDivRef.current,
        markers: true,
        start: "top 33.5%",
        end: "top -55%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const index = Math.floor(progress * (imgArray.length - 1));
          if (imgRef.current) {
            imgRef.current.src = imgArray[index];
          }
        },
      },
    });
  });

  return (
    <>
      <div>
        <div className="section1">
          <div
            ref={imgDivRef}
            className="absolute overflow-hidden h-[20vw] w-[14vw] rounded-3xl top-1/3 left-[30vw]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={imgRef}
              className="h-full w-full object-cover"
              src={imgArray[0]}
              alt="teams"
            />
          </div>
          <div className="relative">
            <div className="mt-[55vh]">
              <h1 className="text-[15vw] leading-[17vw] text-center uppercase font-garet font-bold">
                Let&apos;s Scale <br />
                Together
              </h1>
            </div>
            <div className="pl-[40%]">
              <p className="text-5xl font-garet">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Our
                curiosity fuels our creativity. We remain humble and say no to
                big egos, even yours. A brand is alive. It has values, a
                personality, a story. If we forget that, we may make good
                numbers in the short term, but we&apos;ll kill it in the long term.
                That&apos;s why we&apos;re committed to providing perspective, to building
                influential brands.
              </p>
            </div>
          </div>
        </div>
        <div className="section2">
          <div className="h-screen"></div>
        </div>
        <div className="section3" ref={section3Ref}>
          <div className="min-h-screen py-10 relative">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                onMouseEnter={() => setHoveredMember(member)}
                onMouseLeave={() => setHoveredMember(null)}
              />
            ))}

            {/* Image Popup */}
            {hoveredMember && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-auto">
                <div className="relative w-96 h-[28rem] rounded-lg overflow-hidden shadow-2xl transition-all duration-300 ease-out animate-fade-in">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={hoveredMember.image}
                    alt={hoveredMember.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Stickers */}
                  {hoveredMember.stickers.map((sticker, index) => (
                    <div
                      key={index}
                      className="absolute cursor-pointer transition-all duration-300 hover:scale-110"
                      style={{
                        top: sticker.position.top,
                        bottom: sticker.position.bottom,
                        left: sticker.position.left,
                        right: sticker.position.right
                      }}
                      onMouseEnter={() => setHoveredSticker(sticker.label)}
                      onMouseLeave={() => setHoveredSticker(null)}
                    >
                      <div className="relative group">
                        <div className="w-32 h-32 flex items-center justify-center hover:scale-110 transition-all duration-300 filter drop-shadow-lg">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={sticker.image}
                            alt={sticker.label}
                            className="w-full h-full object-contain"
                          />
                        </div>

                        {/* Tooltip */}
                        {hoveredSticker === sticker.label && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg whitespace-nowrap font-garet z-10">
                            {sticker.label}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-garet text-lg font-bold">{hoveredMember.name}</h3>
                    <p className="text-gray-300 font-garet text-sm">{hoveredMember.role}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default TeamsPage;
