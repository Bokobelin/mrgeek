'use client'; // Ensure this component runs client-side

import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const Card = ({ title = "style.css", text = "" }) => {
  const [decodedText, setDecodedText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const cleanedText = text.replace(/<br\/?>/g, '\n');
      setDecodedText(decodeHTML(cleanedText));
    }
  }, [text]);

  useEffect(() => {
    // Adjust textarea height based on its content
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Adjust height
    }
  }, [decodedText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(decodedText)
      .then(() => alert('Texte copié!'))
      .catch((err) => console.error('Erreur durant la copie du texte: ', err));
  };

  const decodeHTML = (html: string): string => {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <StyledWrapper>
      <div className="card">
        <div className="header">
          <div className="top">
            <div className="circle">
              <span className="red circle2" />
            </div>
            <div className="circle">
              <span className="yellow circle2" />
            </div>
            <div className="circle">
              <span className="green circle2" />
            </div>
            <div className="title">
              <p id="title2">{title}</p>
            </div>
          </div>
        </div>
        <div className="code-container">
          <textarea
            ref={textareaRef}
            className="area"
            id="code"
            name="code"
            readOnly
            value={decodedText}
          />
          <CopyButton onClick={handleCopy}>Copier le code</CopyButton>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    background-color: #24233b;
    border-radius: 8px;
    box-shadow: 0px 10px 10px rgb(73, 70, 92);
    transition: 0.5s;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-7px);
    box-shadow: 0px 10px 10px black;
  }

  .top {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  .circle {
    padding: 0 4px;
  }

  .circle2 {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .red {
    background-color: #ff605c;
  }

  .yellow {
    background-color: #ffbd44;
  }

  .green {
    background-color: #00ca4e;
  }

  #title2 {
    color: white;
    padding-left: 50px;
    font-size: 15px;
  }

  .code-container {
    text-align: center;
    padding: 10px;
  }

  #code {
    width: 100%;
    min-height: 150px;
    resize: none;
    background-color: rgb(73, 70, 92);
    border-radius: 5px;
    border: none;
    color: white;
    padding: 10px;
    font-family: monospace;
    overflow-y: hidden;
  }

  #code:focus {
    outline: none !important;
  }
`;

const CopyButton = styled.button`
  background-color: #4f46e5;
  color: white;
  font-size: 14px;
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4338ca;
  }

  &:active {
    background-color: #3730a3;
  }
`;

export default Card;
