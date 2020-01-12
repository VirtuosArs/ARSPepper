import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import P1 from "../images/aadesh.jpg";
import P2 from "../images/anirudh.jpg";
import logoImg from "../images/logo.png";
import heroImg from "../images/undraw_team_spirit_hrr4.svg";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
};

var settings1 = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // arrows: true,
};

var data = [{
  "n1": 'Name1', position: 'Position1', desc: 'Desccfbd kdbfhkgbjkfgb ljdfnjldgb', imagP: 'P1',
  "n1": 'Name2', position: 'Position2', desc: 'jkgfjkbjkbj kdbfhkgbjkfgb ljdfnjldgb', imagP: 'P2',
}];

function Layout({ children }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  const team =  Object.keys(data).map((key, i) => 
    (
      <div>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      style={{padding: '3rem'}}
      >
      <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
      {/* <h1 className="my-4 text-5xl font-bold leading-tight headAbout" style={{color: '#16224f'}}>Name 1</h1> */}
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-gray-800" 
      style={{color: '#16224f'}}
      >{data[key].n1}</h2>
      <h2 className="w-full my-2 text-5xl font-bold leading-tight text-gray-800" 
      style={{color: '#16224f'}}
      >Position</h2>
      <p className="mx-2 my-3 text-gray-600 mb-8" style={{color: '#000', textAlign: 'center'}}>
      {data[key].desc}
      </p>
      </div>
        <div className="w-full md:w-3/5 py-6 text-center">
          <img className="w-full md:w-4/5 z-50" src={data[key].imagP} />
        </div>
      </div>
      </div>
    )
  )

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title,
              github,
              blog
            }
          }
        }
      `}
      render={data => (
        <body className="leading-normal tracking-normal text-white gradient">

            {children}

            {/* Navigation */}
            <nav id="header" className="fixed w-full z-30 top-0 text-white shadow" style={{backgroundColor: '#f5f5f5'}}>

              <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                  
                <div className="pl-4 flex items-center">
                  <a className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-gray-800"  href="#"> 
                  <img src={logoImg} style={{width: '40px', height: '45px'}} />

                    {/* <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                    <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" fill="rgb(0,0,0)" />
                    <path className="plane-take-off" d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "/>
                    </svg> LANDING */}
                  </a>
                </div>
                
                <div className="block lg:hidden pr-4">
                  <button id="nav-toggle" 
                          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                  </button>
                </div>

                <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
                  <ul className="list-reset lg:flex justify-start flex-1 items-center"
                  style={{textTransform: 'uppercase'}}
                  >
                    <li className="mr-1">
                      <a className="inline-block py-2 px-4 text-black no-underline" href="#">Business</a>
                    </li>
                    <li className="mr-1">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Writers</a>
                    </li>
                    <li className="mr-1">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Blog</a>
                    </li>
                    <li className="mr-1">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">FAQ</a>
                    </li>
                    <li className="mr-1">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">About Us</a>
                    </li>
                  </ul>
                  <ul className="list-reset lg:flex justify-end flex-1 items-center"
                  >
                  <li className="mr-1">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Apply as a freelancer</a>
                    </li>
                    <li className="mr-1">
                      <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">Request a quote</a>
                    </li>
                  </ul>
                  {/* <form action={data.site.siteMetadata.github}>
                    <button type="submit" id="navAction" 
                            className="mx-auto lg:mx-0 hover:underline font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 gradient text-white">Get Sources</button>
                  </form> */}

                </div>
              </div>
              
              <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
            </nav>

            {/* Hero */}
            <div className="pt-24">

              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

                <div className="w-full md:w-3/5 py-6 text-center">
                  <img className="w-full md:w-4/5 z-50" src={heroImg} />
                </div>

                <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                  {/* <p className="uppercase tracking-loose w-full">Open-Source project</p> */}
                  <h1 className="my-4 text-5xl font-bold leading-tight headAbout">About Us</h1>
                 
                  <div className="max-w-sm rounded overflow-hidden shadow-lg"
                  // style={{maxWidth: '34rem'}}
                  >
                    {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <div className="px-6 py-4" style={{background: '#ffffff 0% 0% no-repeat padding-box',
                    paddingTop: '3rem', paddingBottom: '3rem'
                    }}>
                    <Slider {...settings}>
        <div>
        <h1 className="mx-2 my-2 text-3xl font-bold leading-tight" style={{color: '#16224f'}}>Our team of writers</h1>
        <p className="mx-2 my-3 text-gray-600 mb-8" style={{color: '#000'}}>
                                Pepper serves over 200 clients, ranging from the
                                best of the media houses to the biggest digital
                                agencies and enterprises. We can fulfil a wide
                                variety of content needs, from blogs and website
                                content to even product descriptions and
                                research-based articles.
                            </p>
        </div>
        <div>
        <h1 className="mx-2 my-2 text-3xl font-bold leading-tight" style={{color: '#16224f'}}>Our team of writers</h1>
        <p className="mx-2 my-3 text-gray-600 mb-8" style={{color: '#000'}}>
                                Pepper serves over 200 clients, ranging from the
                                best of the media houses to the biggest digital
                                agencies and enterprises. We can fulfil a wide
                                variety of content needs, from blogs and website
                                content to even product descriptions and
                                research-based articles.
                            </p>
        </div>
        <div>
        <h1 className="mx-2 my-2 text-3xl font-bold leading-tight" style={{color: '#16224f'}}>Our team of writers</h1>
        <p className="mx-2 my-3 text-gray-600 mb-8" style={{color: '#000'}}>
                                Pepper serves over 200 clients, ranging from the
                                best of the media houses to the biggest digital
                                agencies and enterprises. We can fulfil a wide
                                variety of content needs, from blogs and website
                                content to even product descriptions and
                                research-based articles.
                            </p>
        </div>
      </Slider>
                    </div>
                    </div>

                </div>

                
              </div>


              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
              style={{padding: '8rem'}}
              >

                <div className="container max-w-2xl mx-auto m-6" 
                style={{borderRadius: '20 !important', background: '#ffffff'}}>
                <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 borderStuff">Stuff that matters to us</h2>
                
                </div>
                <div className="container max-w-3xl mx-auto m-8">
                <p className="mx-2 my-3 text-gray-600 mb-8" style={{color: '#000', textAlign: 'center'}}>
                                
                    We wish to revolutionize India's content creation landscape
                    with the best way we know of, by marrying humans with tech.
                    We've started by creating an AI-enabled platform to bring in
                    content creators to fulfil the ever-increasing content needs
                    across domains, genres and boundaries. At the risk of
                    sounding a little tacky, for us, Pepper has always been "for
                    content, by content and of content".
                
                            </p>
    </div>


              </div>



              

              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
              style={{paddingTop: '5rem'}}
              >
              <div className="container max-w-6xl mx-auto m-6" style={{background: '#ffffff'}}>

              <Slider {...settings1}>
        <div>
              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
              style={{padding: '3rem'}}
              >
              <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              {/* <h1 className="my-4 text-5xl font-bold leading-tight headAbout" style={{color: '#16224f'}}>Name 1</h1> */}
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-gray-800" 
              style={{color: '#16224f'}}
              >Name 1</h2>
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-gray-800" 
              style={{color: '#16224f'}}
              >Position 1</h2>
              <p className="mx-2 my-3 text-gray-600 mb-8" style={{color: '#000', textAlign: 'center'}}>
                hbfdjf kfdhjkb .ldfhkldfhlk lshfklgnslkblb
              </p>
              </div>
                <div className="w-full md:w-3/5 py-6 text-center">
                  <img className="w-full md:w-4/5 z-50 cimg" src={P1} />
                </div>
              </div>
              </div>

                    <div>
              <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
              style={{padding: '3rem'}}
              >
              <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              {/* <h1 className="my-4 text-5xl font-bold leading-tight headAbout" style={{color: '#16224f'}}>Name 1</h1> */}
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-gray-800" 
              style={{color: '#16224f'}}
              >Name 2</h2>
              <h2 className="w-full my-2 text-5xl font-bold leading-tight text-gray-800" 
              style={{color: '#16224f'}}
              >Position 2</h2>
              <p className="mx-2 my-3 text-gray-600 mb-8" style={{color: '#000', textAlign: 'center'}}>
                ddfdkhfjdf kjbfjdbfjkb
              </p>
              </div>
                <div className="w-full md:w-3/5 py-6">
                  <img className="w-full md:w-4/5 z-50 cimg" src={P2} />
                </div>
              </div>
              </div>

                    
              </Slider>
              </div>
              </div>

            </div>


            
            {/* Footer */}
            <footer className="bg-white" style={{background: '#16224f'}}>
              <div className="container mx-auto  px-8" style={{padding: '3.5rem'}}>

                    <div className="w-full flex flex-col md:flex-row py-6">
                    <div className="flex-1 fColor">
                            <p className="uppercase text-gray-500 md:mb-6" style={{color: '#ffffff', fontWeight: '600'}}>Industries we serve</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-300">Healthcare</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Education</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Technical</a>
                                </li>
                            </ul>
                        </div>
                
                
                        <div className="flex-1 fColor">
                            <p className="uppercase text-gray-500 md:mb-6"
                            style={{color: '#ffffff', fontWeight: '600'}}
                            >Links</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">FAQ</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Help</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Support</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 fColor">
                            <p className="uppercase text-gray-500 md:mb-6"
                            style={{color: '#ffffff', fontWeight: '600'}}
                            >Legal</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Terms</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Privacy</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 fColor">
                            <p className="uppercase text-gray-500 md:mb-6"
                            style={{color: '#ffffff', fontWeight: '600'}}
                            >Social</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Facebook</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Linkedin</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Twitter</a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 fColor">
                            <p className="uppercase text-gray-500 md:mb-6"
                            style={{color: '#ffffff', fontWeight: '600'}}
                            >Company</p>
                            <ul className="list-reset mb-6">
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Official Blog</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">About Us</a>
                                </li>
                                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                    <a href="#" className="no-underline hover:underline hover:text-orange-500">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>

        </body>
      )}
    />
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
