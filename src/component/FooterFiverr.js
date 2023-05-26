import React from "react";
import { Link } from "react-router-dom";

const FooterFiverr = () => {
  return (
    <div className="">
      <div className="grid gap-4 grid-cols-4 p-10 h-screen bg-slate-200  font-lato text-lg overflow-hidden">
        <div className="flex items-center flex-col ">
          <h3 className="text-black font-bold my-3">Catagories</h3>
          <div className="flex items-center flex-col text-slate-500">
            <Link className="leading-10 hover:underline">Graphic & Design</Link>
            <Link className="leading-10 hover:underline">
              Digital Marketing
            </Link>
            <Link className="leading-10 hover:underline">
              Writing & Translation
            </Link>
            <Link className="leading-10 hover:underline">
              Video & Animation
            </Link>
            <Link className="leading-10 hover:underline">Music & Audio</Link>
            <Link className="leading-10 hover:underline">
              Programming & Tech
            </Link>
            <Link className="leading-10 hover:underline">Business</Link>
            <Link className="leading-10 hover:underline">Lifestyle</Link>
            <Link className="leading-10 hover:underline">Photography</Link>
            <Link className="leading-10 hover:underline">Sitemap</Link>
          </div>
        </div>

        <div className="flex items-center flex-col mr-20">
          <h3 className="text-black text-10xs font-bold my-3">About</h3>
          <div className="flex items-center flex-col text-slate-500">
            <Link className="leading-10 hover:underline">Careers</Link>
            <Link className="leading-10 hover:underline">Press & News</Link>
            <Link className="leading-10 hover:underline">Partnerships</Link>
            <Link className="leading-10 hover:underline">Privacy Policy</Link>
            <Link className="leading-10 hover:underline">Terms of Service</Link>
            <Link className="leading-10 hover:underline">
              Intellectual Property Claims
            </Link>
            <Link className="leading-10 hover:underline">
              Investor Relations
            </Link>
          </div>
        </div>

        <div className="flex items-center flex-col mr-36">
          <h3 className="text-black text-10xs font-bold my-3">Support</h3>
          <div className="flex items-center flex-col text-slate-500">
            <Link className="leading-10 hover:underline">Help & Support</Link>
            <Link className="leading-10 hover:underline">Trust & Safety</Link>
            <Link className="leading-10 hover:underline">
              GSelling on Fiverr
            </Link>
            <Link className="leading-10 hover:underline">Buying on Fiverr</Link>
          </div>
        </div>

        {/* <div className="flex items-center flex-col">
          <h3 className="text-black text-10xs font-bold my-3">Community</h3>
          <div className="flex items-center flex-col text-slate-500">
            <Link className="leading-10 hover:underline">
              Customer Success Stories
            </Link>
            <Link className="leading-10 hover:underline">Community Hub</Link>
            <Link className="leading-10 hover:underline">Forum</Link>
            <Link className="leading-10 hover:underline">Events</Link>
            <Link className="leading-10 hover:underline">Blog</Link>
            <Link className="leading-10 hover:underline">Influencers</Link>
            <Link className="leading-10 hover:underline">Affiliates</Link>
            <Link className="leading-10 hover:underline">Podcast</Link>
            <Link className="leading-10 hover:underline">Invite a Friend</Link>
            <Link className="leading-10 hover:underline">Become a Seller</Link>
            <Link className="leading-10 hover:underline">
              Community Standards
            </Link>
          </div>
        </div> */}

        {/* <div className="flex items-center flex-col">
          <h3 className="text-black text-10xs font-bold my-3">
            More From Fiverr
          </h3>
          <div className="flex items-center flex-col text-slate-500">
            <Link className="leading-10 hover:underline">Fiverr Pro</Link>
            <Link className="leading-10 hover:underline">
              Fiverr Logo Maker
            </Link>
            <Link className="leading-10 hover:underline">Fiverr Guides</Link>
            <Link className="leading-10 hover:underline">Fiverr Select</Link>
            <Link className="leading-10 hover:underline">ClearVoice</Link>
            <Link className="leading-10 hover:underline">Fiverr Workspace</Link>
            <Link className="leading-10 hover:underline">Learn</Link>
            <Link className="leading-10 hover:underline">
              Working Not Working
            </Link>
          </div>
        </div> */}

        <div className="flex items-center flex-col mr-36">
          <div>
            <h1 className="text-black text-10xs font-bold my-3">Contact Me</h1>
          </div>
          <form className="flex items-center flex-col">
            <input
              type="text"
              className="my-3 p-3 w-96 h-10 rounded border-none "
              placeholder="Your Name..."
            />
            <input
              type="text"
              className="my-3 p-3 w-96 h-10 rounded border-none"
              placeholder="Your Email..."
            />
            <textarea
              className="w-full my-3 h-100 rounded border-none p-3"
              name=""
              id=""
              cols="73"
              rows="10"
              placeholder="Your Message..."
            ></textarea>
          </form>
        </div>

        <div className="block w-screen flex items-center flex-row justify-start ">
          <hr className="" />
          <Link className="ml-10 leading-10 flex items-center flex-row ">
            <i className="text-slate-500 text-2xl bi bi-envelope pr-3 "></i>
            <span className="text-slate-500"> contact@example.com</span>
          </Link>
          <Link className="leading-10 flex items-center flex-row ">
            <i className="text-slate-500 text-2xl bi bi-telephone ml-72 "></i>
            <span className="text-slate-500"> contact@example.com</span>
          </Link>
          <div className="ml-72 flex items-center flex-row justify-center ">
            <Link className="text-slate-500 text-3xl ">
              <i class="bi bi-twitter"></i>
            </Link>
            <Link className="text-slate-500 text-3xl pl-3">
              <i class="bi bi-facebook"></i>
            </Link>
            <Link className="text-slate-500 text-3xl pl-3">
              <i class="bi bi-instagram"></i>
            </Link>
            <Link className="text-slate-500 text-3xl pl-3">
              <i class="bi bi-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>

      {/* <hr className="w-full h-0.5 bg-slate-400"/> */}
    </div>
  );
};

export default FooterFiverr;
