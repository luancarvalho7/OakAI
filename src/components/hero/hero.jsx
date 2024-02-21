import './hero.css'

import React, { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useLocation } from 'react-router-dom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function Hero() {

    const query = useQuery();
    const headlineIndex = query.get('h') || 0; 
  
    const Headline1 = <span>Como qualquer um pode <br/> <span className='greenText'> mudar de vida em menos de 3 meses </span> <br/>usando Inteligência Artificial.</span>;
    const Headline2 = <span>Descubra como empresários estão <br/><span className='greenText'> dobrando o seu faturamento </span> <br/>com Inteligência Artificial</span>;
    const Headline3 = <span>Como você pode ter mais de <br/><span className='greenText'> 3 horas de sobra </span> todos os dias com <br/> <span className='greenText'> Inteligência Artificial</span></span>;
    const Headline4 = <span>Descubra as <span className='greenText'>estratégias secretas</span><br/> que estão deixando os gringos <span className='greenText'>ricos</span><br/> com Inteligência Artificial.</span>;
    
    const headlines = [
      Headline1,
      Headline2,
      Headline3,
      Headline4
    ];


    const extractTextContent = (element) => {
        const div = document.createElement('div');
        div.innerHTML = ReactDOMServer.renderToStaticMarkup(element);
        return div.textContent;
      };

      useEffect(() => {
        // Update the title of the page with the text content of the selected headline
        document.title = extractTextContent(headlines[headlineIndex]);
      }, [headlineIndex]);
      
    return (
        <header id="hero">
            <span className='heroTransition'></span>
            <div id="heroContent" className="spacing">
                <div id="title">
                    <h1 id='headline'>
                    {headlines[headlineIndex]}</h1>
                </div>
                <iframe className='vslVideo' width="560" height="315" src="https://www.youtube.com/embed/aClEXSTOIVk?si=sTF3MC6zQxBPDC7J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </header>
    )
}