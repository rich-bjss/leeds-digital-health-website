import Image from "next/image"

import Footer from "@/components/layout/footer"

import backgroundImage from "@/public/TMP_FALLBACK_GRAPHIC.jpg"
import ldhCommitteeImage from "@/public/LDHCommittee.png"

export default function SponsorPage() {
  return (
    <>
      <section id="committee" className="h-screen w-screen">
        <div className="fixed h-screen w-screen overflow-hidden -z-30">
          <Image
            src={backgroundImage}
            fill
            alt="Tech background image"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="h-screen w-screen -z-20 fixed bg-gradient-to-b from-white">
          <div className="text-center"></div>
        </div>
        <div className="fixed top-5 h-screen w-screen -z-10">
          <Image
            src={ldhCommitteeImage}
            fill
            alt="LDH Committee Member Organisations"
            style={{ objectFit: "scale-down" }}
          />
        </div>
      </section>
      <Footer />
    </>
  )
}
