import React from "react";
import "./floofyhomepage.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
function FloofyHomepage() {

      useGSAP(
            () => {
                  const tl = gsap.timeline({
                        scrollTrigger:{
                              trigger:"#mainFloofy",
                              start:"50% 50%",
                              end:"100% 50%",
                              scrub:1,
                              markers: true,
                              pin: true,
                              
                        }
                  });

                  tl.to("#top", {
                        top: "-50%"
                  }, "floofy")
                  .to("#bottom", {
                              bottom: "-50%"
                  }, "floofy")
                  .to("#top h1", {
                              bottom: "-100%",
                  }, "floofy")
                  .to("#bottom h1", {
                              top: "-100%",
                  }, "floofy")
                  .to("#mid h2", {
                              marginTop: "0vh",
                  }, "floofy")
            }
      )
      return (
            <>
                  <div className="page1">
                        
                  </div>
                  <div id="mainFloofy">
                        <div id="top">
                              <h1>FLOOFY</h1>
                        </div>
                        <div id="mid">
                              <h2>Where Every Pet Finds a Place!🐾</h2>
                        </div>
                        <div id="bottom">
                              <h1>FLOOFY</h1>
                        </div>
                  </div>
                  <div className="page1">

                  </div>
                  <div className="page1">

                  </div>

            </>
      )
}

export default FloofyHomepage;
