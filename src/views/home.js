import React from 'react'

import { Helmet } from 'react-helmet'

import FeatureCard from '../components/feature-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Stylish Far Mandrill</title>
        <meta property="og:title" content="Stylish Far Mandrill" />
      </Helmet>
      <div className="home-header"></div>
      <div className="home-hero">
        <div className="heroContainer home-hero1">
          <div className="home-container1">
            <h1 className="home-hero-heading">
              <span className="heading1 home-text"> Aryan Gupta</span>
              <br></br>
              <span className="home-text02">Programmer</span>
              <br></br>
            </h1>
            <div className="home-btn-group">
              <a
                href="https://github.com/aryangupta886"
                target="_blank"
                rel="noreferrer noopener"
                className="home-hero-button1 buttonFilled"
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container2">
              <h2 className="home-features-heading heading2">
                Skills and Expertise
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Highlighting my capabilities in programming and
                      development
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container3">
              <FeatureCard
                Heading="Mobile Development"
                SubHeading="Expertise in developing mobile applications for iOS and Android platforms"
              ></FeatureCard>
              <FeatureCard
                Heading="Web Development"
                SubHeading="Proficient in creating responsive and user-friendly websites using HTML, CSS, and JavaScript"
              ></FeatureCard>
              <FeatureCard
                Heading="Game Development"
                SubHeading="Experience in developing interactive and engaging games for various platforms"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Mobile, Web, and Game Development
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span>
                  I am a skilled programmer with experience in mobile, web, and
                  game development. With a strong background in programming
                  languages such as Java, Python, and C++, I have successfully
                  developed and deployed various applications and games. My
                  expertise lies in creating user-friendly interfaces,
                  optimizing performance, and ensuring seamless functionality
                  across different platforms. I am passionate about staying
                  up-to-date with the latest technologies and trends in the
                  industry to deliver cutting-edge solutions. Explore my
                  portfolio to see examples of my work.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <a
            href="https://github.com/aryangupta886"
            target="_blank"
            rel="noreferrer noopener"
            className="home-banner-button buttonFilled"
          >
            Explore My Portfolio
          </a>
        </div>
      </div>
      <div className="home-footer"></div>
    </div>
  )
}

export default Home
