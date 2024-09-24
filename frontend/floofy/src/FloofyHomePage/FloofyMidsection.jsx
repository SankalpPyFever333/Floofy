import React from 'react'
import "./floofymidsection.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)

function FloofyMidsection() {

      useGSAP(() => {
            window.addEventListener('wheel', (events) => {
                  // console.log(events)
                  if (events.deltaY > 0) {
                        gsap.to(".marque", {
                              transform: "translateX(-200%)",
                              ease: "none",
                              repeat: -1,
                              duration: 4
                        });

                        gsap.to(".marque span", {
                              rotate: 180
                        });
                  }
                  else {
                        gsap.to(".marque", {
                              transform: "translateX(0%)",
                              ease: "none",
                              repeat: -1,
                              duration: 4
                        })

                        gsap.to(".marque span", {
                              rotate: 0,
                        });
                  }
            })
      })

      return (
            <>
                  <div>
                        <div id="page2">
                              <div id="move">
                                    <div className="marque">
                                          <h1>Find Your Floofy</h1>
                                          {/* <img src="../Assets/IMG-20240215-WA0022.jpg" alt="" /> */}
                                          <span style={{ fontSize: "4rem" }} >🐶</span>
                                    </div>
                                    <div className="marque">
                                          <h1>Join the Floofy Community</h1>
                                          <span style={{ fontSize: "4rem" }} >🌟</span>
                                    </div>
                                    <div className="marque">
                                          <h1>Celebrate the Love</h1>
                                          <span style={{ fontSize: "4rem" }} >🎉</span>
                                    </div>
                                    <div className="marque">
                                          <h1>Find Your Floofy</h1>
                                          <span style={{ fontSize: "4rem" }} >🐶</span>
                                    </div>
                                    <div className="marque">
                                          <h1>Find Your Floofy</h1>
                                          <span style={{ fontSize: "4rem" }} >🐶</span>
                                    </div>
                              </div>
                        </div>

                        {/* instead if this effect, take the effect from significo website.(empathetic, useful type animation) */}

                        <div className="lastSection">
                              <h1>let's start the floofy adventure</h1>
                              {/* here put an image of dog mouth and upon scrolling, increase its size and zoom out fully, display the inner app. */}
                        </div>

                  </div>
            </>
      )
}

export default FloofyMidsection
