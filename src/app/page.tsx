"use client";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import BeTheWinner from "@/asset/img/picbaru.png";
import BeTheWinner2 from "@/asset/img/picbaru2.png";
import BeTheWinner3 from "@/asset/img/picbaru3.png";
import BeTheWinner4 from "@/asset/img/picbaru4.png";
import logo from "@/asset/img/headerlogo.png";
import goal from "@/asset/img/goal.png";
import quotes from "@/asset/img/“.png";
import people from "@/asset/img/people.png";
import goal2 from "@/asset/img/goal2.png";
import goal3 from "@/asset/img/goal3.png";
import goal4 from "@/asset/img/goal4.png";
import arrow from "@/asset/img/next icon.png";
import bgni from "@/asset/img/bgni.png";
import Header from "./component/header";

useEmblaCarousel.globalOptions = { loop: true };

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ align: "start" });
  return (
    <>
      <div className="embla relative h-[713px]" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide h-[100px] bg1"></div>
          <div className="embla__slide h-[100px] bg-black bg2"></div>
          <div className="embla__slide h-[100px] bg-black bg2"></div>
        </div>
        <div
          className={clsx(
            "w-[90%] absolute top-0 flex justify-center h-[713px]"
          )}
        >
          <div
            className={clsx(
              "w-[100%] relative flex justify-center h-full bg-red"
            )}
          >
            {/* form */}
            <div
              className={clsx(
                "w-[400px] h-[573px] bottom-0 z-10 right-[70px] lg:flex items-center absolute border-[1px] border-[#2B312E]",
                "hidden"
              )}
            >
              <div
                className={clsx(
                  "w-[400px] h-[532px] absolute flex flex-col gap-[20px] items-center justify-center left-[20px] bg-white"
                )}
              >
                <div className={clsx("w-[340px] flex flex-col gap-[5px]")}>
                  <h1
                    className={clsx("text-[18px] text-[#AEAFAE] font-medium")}
                  >
                    Activity
                  </h1>
                  <div
                    className={clsx(
                      "w-[340px] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
                    )}
                  >
                    Nature & Adventure
                  </div>
                </div>
                <div className={clsx("w-[340px] flex flex-col gap-[5px]")}>
                  <h1
                    className={clsx("text-[18px] text-[#AEAFAE] font-medium")}
                  >
                    Location
                  </h1>
                  <div
                    className={clsx(
                      "w-[340px] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
                    )}
                  >
                    Bandung & Indonesia
                  </div>
                </div>
                <div className={clsx("w-[340px] flex flex-col gap-[5px]")}>
                  <h1
                    className={clsx("text-[18px] text-[#AEAFAE] font-medium")}
                  >
                    Date
                  </h1>
                  <div
                    className={clsx(
                      "w-[340px] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
                    )}
                  >
                    Friday, August 8, 2021
                  </div>
                </div>
                <div className={clsx("w-[340px] flex justify-between ")}>
                  <div className={clsx("w-[160px]")}>
                    <div className={clsx("")}>
                      <h1
                        className={clsx(
                          "text-[18px] text-[#AEAFAE] font-medium"
                        )}
                      >
                        Adult
                      </h1>
                    </div>
                    <div
                      className={clsx(
                        "w-[100%] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
                      )}
                    >
                      12 People
                    </div>
                  </div>
                  <div className={clsx("w-[160px]")}>
                    <div className={clsx("")}>
                      <h1
                        className={clsx(
                          "text-[18px] text-[#AEAFAE] font-medium"
                        )}
                      >
                        Kid
                      </h1>
                    </div>
                    <div
                      className={clsx(
                        "w-[100%] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
                      )}
                    >
                      3 People
                    </div>
                  </div>
                </div>
                <div
                  className={clsx(
                    "w-[340px] mt-[20px] h-[60px] bg-[#539592] text-white text-[18px] font-bold items-center flex justify-center "
                  )}
                >
                  <p>EXPLORE NOW</p>
                </div>
              </div>
            </div>
            {/* form */}
            {/* navbar */}
            <div
              className={clsx(
                "w-[100%] hidden  h-[100px] lg:flex absolute top-0 "
              )}
            >
              <div className={clsx("w-[100%] relative h-full")}>
                <div
                  className={clsx(
                    "w-[100%] text-white items-center absolute h-full flex justify-between"
                  )}
                >
                  <div className={clsx("w-[36px] h-[36px")}></div>
                  <div className={clsx("flex gap-8 items-center pr-[50px]")}>
                    <div className={clsx("")}>Landing</div>
                    <div className={clsx("")}>Packages</div>
                    <div className={clsx("")}>Stories</div>
                    <div className={clsx("")}>Product</div>
                    <div className={clsx("")}>Gallery</div>
                    <div
                      className={clsx("h-[40px] border-[1px] border-[#fff]")}
                    ></div>
                    <div className={clsx("")}>Sign Up</div>
                    <div className={clsx("")}>Log In</div>
                  </div>
                </div>
              </div>
            </div>
            {/* navbar */}
          </div>
        </div>
        {/* title */}
        <div
          className={clsx(
            "w-[100%] flex justify-center items-center h-[630px] absolute top-0"
          )}
        >
          <div
            className={clsx(
              "flex   lg:w-[1285px] text-white flex-col gap-[25px]"
            )}
          >
            <div className="">
              <h1
                className={clsx("w-[360px] font-header text-[48px] font-bold")}
              >
                Find Your True Adventure Soul
              </h1>
            </div>
            <div className={clsx("w-[330px] text-[18px] font-normal")}>
              <p>
                Time to reconstruct your imagination with what we provide
                special just for you
              </p>
            </div>
            <div className={clsx("flex items-center gap-3")}>
              <div
                className={clsx("w-[6px]  h-[6px] rounded-full bg-white")}
              ></div>
              <div
                className={clsx(
                  "w-[14px] h-[14px] flex justify-center items-center rounded-full border-[1px] border-[#fff]"
                )}
              >
                <div
                  className={clsx("w-[6px] h-[6px] rounded-full bg-[#FF9050]")}
                ></div>
              </div>
              <div
                className={clsx("w-[6px] h-[6px] rounded-full bg-white")}
              ></div>
              <div
                className={clsx("w-[6px] h-[6px] rounded-full bg-white")}
              ></div>
              <div
                className={clsx("w-[6px] h-[6px] rounded-full bg-white")}
              ></div>
              <div
                className={clsx("w-[6px] h-[6px] rounded-full bg-white")}
              ></div>
            </div>
          </div>
        </div>
        <div className={clsx("w-full lg:hidden block absolute top-0")}>
          <Header />
        </div>
        {/* navbar desk2*/}
        <div
          className={clsx(
            "w-[100%] lg:flex hidden justify-center items-center h-[100px] absolute top-0"
          )}
        >
          <div
            className={clsx(
              "lg:flex h-[100px] hidden lg:w-[1285px] text-white items-center"
            )}
          >
            <div className={clsx("")}>
              <Image src={logo} alt="logo" />
            </div>
          </div>
        </div>
        {/* navbar desk2 */}
        {/* title */}
      </div>
      {/* form mobile */}
      <div className={clsx("w-full lg:hidden flex justify-center ")}>
        <div
          className={clsx(
            "w-[90%] h-[532px] border-[1px] mt-[-220px] z-50 flex flex-col gap-[20px] items-center justify-center left-[20px] bg-white"
          )}
        >
          <div className={clsx("w-[90%] flex flex-col gap-[5px]")}>
            <h1 className={clsx("text-[18px] text-[#AEAFAE] font-medium")}>
              Activity
            </h1>
            <div
              className={clsx(
                "w-[100%] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
              )}
            >
              Nature & Adventure
            </div>
          </div>
          <div className={clsx("w-[90%] flex flex-col gap-[5px]")}>
            <h1 className={clsx("text-[18px] text-[#AEAFAE] font-medium")}>
              Location
            </h1>
            <div
              className={clsx(
                "w-[100%] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
              )}
            >
              Bandung & Indonesia
            </div>
          </div>
          <div className={clsx("w-[90%] flex flex-col gap-[5px]")}>
            <h1 className={clsx("text-[18px] text-[#AEAFAE] font-medium")}>
              Date
            </h1>
            <div
              className={clsx(
                "w-[100%] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
              )}
            >
              Friday, August 8, 2021
            </div>
          </div>
          <div className={clsx("w-[90%] flex justify-between ")}>
            <div className={clsx("w-[160px]")}>
              <div className={clsx("")}>
                <h1 className={clsx("text-[18px] text-[#AEAFAE] font-medium")}>
                  Adult
                </h1>
              </div>
              <div
                className={clsx(
                  "w-[100%] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
                )}
              >
                12 People
              </div>
            </div>
            <div className={clsx("w-[160px]")}>
              <div className={clsx("")}>
                <h1 className={clsx("text-[18px] text-[#AEAFAE] font-medium")}>
                  Kid
                </h1>
              </div>
              <div
                className={clsx(
                  "w-[100%] bg-[#FAFAFB] flex items-center text-[18px] text-[#2B312E] font-medium pl-[15px] border-[1px] h-[50px] border-[#F1F2F3]"
                )}
              >
                3 People
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "w-[90%] mt-[20px] h-[60px] bg-[#539592] text-white text-[18px] font-bold items-center flex justify-center "
            )}
          >
            <p>EXPLORE NOW</p>
          </div>
        </div>
      </div>
      {/* form mobile */}
      {/* Dreams */}
      <div
        className={clsx(
          "w-full lg:mt-[200px] relative gap-[80px] flex items-center flex-col",
          "mt-[100px]"
        )}
      >
        <Image
          className={clsx("absolute w-[2000px] mt-[150px]")}
          src={bgni}
          alt="gooal"
        />
        <div className={clsx("title")}>
          <h3 className={clsx("text-center text-[18px] text-[#FF9050]")}>
            YOUR DREAMS
          </h3>
          <h1
            className={clsx(
              "w-[410px] font-header font-bold text-[36px] text-center"
            )}
          >
            We Have Few Packages With Friendly Price
          </h1>
        </div>
        <div
          className={clsx(
            "lg:w-[1285px] h-[400px] lg:justify-between items-center flex",
            "w-[100%] justify-center"
          )}
        >
          <div className={clsx("w-[285px] h-[400px] relative bg-black")}>
            <Image src={BeTheWinner} alt="btw" />
            <div
              className={clsx(
                "flex absolute bottom-[25px] left-[30px] flex-col gap-2"
              )}
            >
              <h2 className={clsx("text-[20px] text-white font-medium")}>
                Pastelina Hurra
              </h2>
              <h2 className={clsx("text-[16px] text-white")}>
                Jambi, Indonesia
              </h2>
            </div>
          </div>
          <div
            className={clsx(
              "w-[285px] h-[400px] hidden lg:block relative bg-black"
            )}
          >
            <Image src={BeTheWinner2} alt="btw" />
            <div
              className={clsx(
                "flex absolute bottom-[25px] left-[30px] flex-col gap-2"
              )}
            >
              <h2 className={clsx("text-[20px] text-white font-medium")}>
                Kame Kinno
              </h2>
              <h2 className={clsx("text-[16px] text-white")}>
                Bogor, Indonesia
              </h2>
            </div>
          </div>
          <div
            className={clsx(
              "w-[285px] h-[400px] hidden lg:block relative bg-black"
            )}
          >
            <Image src={BeTheWinner3} alt="btw" />
            <div
              className={clsx(
                "flex absolute bottom-[25px] left-[30px] flex-col gap-2"
              )}
            >
              <h2 className={clsx("text-[20px] text-white font-medium")}>
                Belitunq
              </h2>
              <h2 className={clsx("text-[16px] text-white")}>
                Guess, Palo Alto
              </h2>
            </div>
          </div>
          <div
            className={clsx(
              "w-[285px] hidden lg:block h-[400px] relative bg-black"
            )}
          >
            <Image src={BeTheWinner4} alt="btw" />
            <div
              className={clsx(
                "flex absolute bottom-[25px] left-[30px] flex-col gap-2"
              )}
            >
              <h2 className={clsx("text-[20px] text-white font-medium")}>
                Takk Tawu
              </h2>
              <h2 className={clsx("text-[16px] text-white")}>
                Cimahi, Bandung
              </h2>
            </div>
          </div>
          <div
            className={clsx(
              "w-[50px] rounded-full flex items-center justify-center h-[50px] z-40 lg:ml-[-65px] bg-[#539592]",
              "ml-[-30px]"
            )}
          >
            <Image src={arrow} alt="arrow" />
          </div>
        </div>
      </div>
      {/* Dreams */}
      {/* Goal */}
      <div
        className={clsx(
          "w-full lg:h-[912px] flex lg:flex-row gap-10 items-center justify-center lg:mt-[200px] lg:px-[0px] bg-[#FCFBFF]",
          "flex-col-reverse py-[40px] h-max items-center justify-center mt-[100px] px-[50px]"
        )}
      >
        <div
          className={clsx(
            "lg:w-[484px] relative lg:h-[560px]",
            "w-[90%] h-[350px] "
          )}
        >
          <div
            className={clsx(
              "lg:w-[464px]  border-[1px] z-[10] border-[#2B312E] absolute lg:bottom-0 lg:right-0 lg:h-[540px]",
              "w-[90%] h-[300px] bottom-[20px] right-0"
            )}
          ></div>
          <div
            className={clsx(
              "lg:w-[464px] absolute top-0 left-0 z-[100] bg-white lg:h-[540px]",
              "w-[90%] h-[300px]"
            )}
          >
            <Image src={goal} className={clsx("w-full h-full")} alt="gooal" />
          </div>
        </div>
        <div className={clsx("flex h-[560px] flex-col justify-between")}>
          <div
            className={clsx(
              "title w-full flex flex-col items-center",
              "lg:items-start"
            )}
          >
            <h3 className={clsx("text-[18px] text-[#FF9050]")}>OUR GOAL</h3>
            <h1
              className={clsx(
                "w-[290px] lg:text-start font-header font-bold text-[36px]",
                "text-center"
              )}
            >
              Set The Destiny You Can’t Refuse
            </h1>
          </div>
          <div className={clsx("relative flex flex-col gap-6")}>
            <div className={clsx("")}>
              <Image className={clsx("")} src={quotes} alt="gooal" />
              <p
                className={clsx(
                  "text-[22px] mt-[-40px] lg:text-start lg:ml-[60px] lg:w-[540px] leading-10 text-[#6B6A6A] font-normal",
                  "ml-0 text-center w-full"
                )}
              >
                At first, we have no clue where to go for the entire session.
                Lora convinced us to take the special package that suits for our
                family, and it was pretty worthy
              </p>
            </div>
            <div
              className={clsx(
                "flex gap-5 justify-center lg:justify-start lg:ml-[60px]"
              )}
            >
              <div className={clsx("w-[50px] h-[50px] rounded-full")}>
                <Image src={people} alt="gooal" />
              </div>
              <div className={clsx("")}>
                <h1 className="text-[18px] font-medium text-[#2B312E]">
                  Angelina Cameroon
                </h1>
                <h3 className="text-[14px] font-normal text-[#787676]">
                  Ex. Website Developer
                </h3>
              </div>
            </div>
            <div className={clsx("flex mt-16 gap-10")}>
              <Image className={clsx("")} src={goal2} alt="gooal" />
              <Image className={clsx("")} src={goal3} alt="gooal" />
              <Image className={clsx("")} src={goal4} alt="gooal" />
            </div>
          </div>
        </div>
      </div>
      {/* Goal */}
      {/* footer */}
      <div className={clsx("w-full bg-[#FCFBFF] h-full")}>
        <div
          className={clsx(
            "lg:w-[90.6%] rounded-tr-[60px] lg:pb-[0px] lg:pt-[0px] lg:py-[0px] relative flex items-center lg:px-[0px] lg:justify-around lg:h-[420px] bg-[#192E46]",
            "w-full h-max py-[50px] pb-[180px] pt-[130px] px-[50px]"
          )}
        >
          <div
            className={clsx(
              "lg:w-[835px] lg:h-[130px] bg-white flex lg:flex-row lg:py-[0px] justify-center lg:gap-[50px] items-center rounded-[12px] lg:top-[-70px] lg:right-[60px] absolute",
              "w-full right-0 h-max flex flex-col gap-5 py-[20px] top-[90%]"
            )}
          >
            <div
              className={clsx(
                "text-[#2B312E] text-[24px] flex flex-col gap-[5px] font-bold"
              )}
            >
              <h1 className="font-header">Subscribe for Discount</h1>
              <p className={clsx("text-[16px] font-normal text-[#AEAFAE]")}>
                We never send you any spam
              </p>
            </div>
            <div
              className={clsx("lg:w-[447px] flex bg-[#FAFAFB] h-[50px]", "")}
            >
              <div
                className={clsx(
                  "lg:w-[287px] border-[1px] border-[#F1F2F3] flex items-center h-full",
                  ""
                )}
              >
                <h2
                  className={clsx(
                    "ml-4 font-medium text-[18px] text-[#2B312E]"
                  )}
                >
                  masayoshi@bwa.co.id
                </h2>
              </div>
              <div
                className={clsx(
                  "w-[160px] bg-[#539592] h-full flex justify-center items-center"
                )}
              >
                <h2 className={clsx(" font-bold text-[18px] text-[#ffffff]")}>
                  SUBSCRIBE
                </h2>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              "lg:flex lg:flex-row lg:w-[1285px]  lg:justify-around",
              "flex flex-col gap-10"
            )}
          >
            <div className={clsx("flex flex-col gap-[30px]")}>
              <div className="">
                <Image className={clsx("")} src={logo} alt="gooal" />
              </div>
              <p className={clsx("text-[18px] text-[#fff]")}>
                Travel the place you always <br /> dreaming about, easier.
              </p>
            </div>
            <div className={clsx("flex flex-col gap-[30px]")}>
              <div className="">
                <h1 className={clsx("font-medium text-[18px] text-[#fff]")}>
                  Company
                </h1>
              </div>
              <div
                className={clsx(
                  "flex flex-col gap-[10px] text-[18px] text-[#FFFFFF] font-light"
                )}
              >
                <h3>Flight Partners</h3>
                <h3>Hotel Group</h3>
                <h3>Accomodations</h3>
                <h3>Packages</h3>
              </div>
            </div>
            <div className={clsx("flex flex-col gap-[30px]")}>
              <div className="">
                <h1 className={clsx("font-medium text-[18px] text-[#fff]")}>
                  Account
                </h1>
              </div>
              <div
                className={clsx(
                  "flex flex-col gap-[10px] text-[18px] text-[#FFFFFF] font-extralight"
                )}
              >
                <h3>Refund Policy</h3>
                <h3 className={clsx("text-[#539592] underline")}>Settings</h3>
                <h3>Terms & Conditions</h3>
              </div>
            </div>
            <div className={clsx("flex flex-col gap-[30px]")}>
              <div className="">
                <h1 className={clsx("font-medium text-[18px] text-[#fff]")}>
                  Fast Response
                </h1>
              </div>
              <div
                className={clsx(
                  "flex flex-col gap-[10px] text-[18px] text-[#FFFFFF] font-light"
                )}
              >
                <h3>M Building No, 11</h3>
                <h3>cs@lorra.co.id</h3>
                <h3>+021 2208 1996 1993</h3>
                <h3>@lorragroup</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* fofoter */}
    </>
  );
}
