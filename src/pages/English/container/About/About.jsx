import React, { useState, useEffect } from "react";

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='border-container-contact'>
          <div className='border-timeline'></div>
          <p className='header-contact'>About me</p>
        </div>
        <div className='aboutme'>
          <div className='aboutme2'>
            <div className='aboutme-text'>
              {/* <h4>Bartosz Płaza</h4>
               <p>
                <span className='yellow'>Wykształcenie</span>: wyższe, kierunek:
                informatyka.
                <p>Stypendium naukowe przez cały przebieg studiów.</p>
              </p>
              <p>
                <span className='yellow'>Praktyki zawodowe</span>: MRSolutions
                <br></br>
                <span>
                  <span>Wykonane projekty: </span>
                  <br></br>
                  <a
                    href='https://szamborambo.pl/szamba-z-wykopem/'
                    target='_blank'
                    rel='noreferrer'
                    className='yellow-link'
                  >
                    szamborambo.pl/szamba-z-wykopem
                  </a>
                </span>{" "}
                <br></br>
                <span>
                  <a
                    href='https://betonpref.pl/'
                    target='_blank'
                    rel='noreferrer'
                    className='yellow-link'
                  >
                    betonpref.pl
                  </a>
                </span>
              </p>

              <p>
                <p className='programming-methods'>
                  <span className='yellow'> Umiejętnośći: </span>
                  <span className='yellow-method'>React</span>{" "}
                  <span className='yellow-method'>JavaScript</span>{" "}
                  <span className='yellow-method'>HTML</span>{" "}
                  <span className='yellow-method'>CSS</span>{" "}
                  <span className='yellow-method'>TypeScript</span>{" "}
                  <span className='yellow-method'>Git</span>{" "}
                  <span className='yellow-method'>NodeJS</span>{" "}
                  <span className='yellow-method'>PHP</span>
                </p>
              </p> */}

              <div className='aboutme-container-grid'>
                <div>
                  <h4>I'm Bartosz Płaza.</h4>
                  <p>
                    <span className='yellow'>Education</span>: IT, engineering
                    studies.
                    <p>
                      Academic scholarship throughout the studies for good
                      academic performance
                    </p>
                  </p>
                  <p>
                    <span className='yellow'>Apprenticeship</span>: MRSolutions
                    company
                    <br></br>
                    <span>
                      <span>Websites made: </span>
                      <br></br>
                      <a
                        href='https://szamborambo.pl/szamba-z-wykopem/'
                        target='_blank'
                        rel='noreferrer'
                        className='yellow-link'
                      >
                        szamborambo.pl/szamba-z-wykopem
                      </a>
                    </span>{" "}
                    <br></br>
                    <span>
                      <a
                        href='https://betonpref.pl/'
                        target='_blank'
                        rel='noreferrer'
                        className='yellow-link'
                      >
                        betonpref.pl
                      </a>
                    </span>
                  </p>
                  <p>
                    <span className='yellow'>Guarantees 100% commitment.</span>
                  </p>
                </div>
                <div>
                  <h4>Skills</h4>
                  <div className='aboutme-grid'>
                    <div className='aboutme-grid-div'>
                      <div className='aboutme-grid-border'>React</div>
                    </div>
                    <div className='aboutme-grid-div'>
                      <div className='aboutme-grid-border'>JavaScript</div>
                    </div>
                    <div className='aboutme-grid-div'>
                      <div className='aboutme-grid-border'> HTML</div>
                    </div>
                    <div className='aboutme-grid-div'>
                      <div className='aboutme-grid-border'>CSS</div>
                    </div>
                    <div className='aboutme-grid-div'>
                      <div className='aboutme-grid-border'>TypeScript</div>
                    </div>
                    <div className='aboutme-grid-div'>
                      <div className='aboutme-grid-border'>Git</div>
                    </div>
                    <div className='aboutme-grid-div'>
                      <div className='aboutme-grid-border'>NodeJS</div>
                    </div>
                    <div className='aboutme-grid-div'>
                      <div className='aboutme-grid-border'>PHP</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <h4>Nazywam się Bartosz Płaza.</h4>
              <p>
                Ukończyłem studia na kierunku
                <span className='yellow'> informatyka</span> na UTH w Radomiu.
                Przez cały przebieg studiów pobierałem
                <span className='yellow'> stypendium naukowe</span> za
                wyróżniające wyniki w nauce. Studiując rozwinąłem wszechstronną
                wiedzę informatyczną.
              </p>
              <p>
                Umiejętność programowania stron internetowych rozwijam od 2020,
                tworząc różne <span className='yellow'> projekty</span>. Podczas
                nauki wykonałem wiele kursów na Udemy i YT oraz korzystałem z
                różnych źródeł, takich jak, dokumentacje, książki o
                programowaniu lub stackoverflow {":)"}.
              </p>
              <p>
                Odbyłem praktyki zawodowe w firmie MRSolutions, która zajmuje
                się tworzeniem stron internetowych. Samodzielnie stworzyłem
                landing page{" "}
                <span>
                  <a
                    href='https://szamborambo.pl/szamba-z-wykopem/'
                    target='_blank'
                    rel='noreferrer'
                    className='yellow-link'
                  >
                    szamborambo.pl/szamba-z-wykopem
                  </a>
                </span>
                , oraz pomogłem przy stworzeniu strony{" "}
                <span>
                  <a
                    href='https://betonpref.pl/'
                    target='_blank'
                    rel='noreferrer'
                    className='yellow-link'
                  >
                    betonpref.pl
                  </a>
                </span>
                .
              </p>
              <p className='programming-methods'>
                Poznane metodyki: <span className='yellow-method'>React</span>{" "}
                <span className='yellow-method'>JavaScript</span>{" "}
                <span className='yellow-method'>HTML</span>{" "}
                <span className='yellow-method'>CSS</span>{" "}
                <span className='yellow-method'>TypeScript</span>{" "}
                <span className='yellow-method'>Git</span>{" "}
                <span className='yellow-method'>NodeJS</span>{" "}
                <span className='yellow-method'>PHP</span>
              </p>
              <p>Gwarantuje 100% zaangażowania. </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
