import React, { useState } from "react";
import NeonKitty from "../Assets/NeonCat.gif"

const Home = () => {
  const [showSections, setShowSections] = useState({
    mission: false,
    artistry: false,
    innovation: false,
    collaboration: false,
    access: false,
    collision: false,
    kitty: false,
  });

  const toggleSection = (section) => {
    setShowSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div  class = "container">
      <div class>
        <h1>
          Welcome To KittyDeluxe, where you can buy your favourite Kitty
          inspired NFT's!
        </h1>
      </div>
      <p>
        Welcome to KittyDeluxe, your purr-fect destination for the most
        enchanting and exclusive kitty-themed NFTs in the digital realm!
        Nestled at the intersection of art, technology, and feline fascination,
        we are proud to present a unique collection that celebrates the charm
        and charisma of our beloved furry friends.
      </p>
      <div class = "container">
        <h3 
          role="button"
          class = "hover"
          onClick={() => toggleSection("mission")}>🐾 Our Mission</h3>
          {showSections.mission && (
            <p>
              At KittyNFTs, our mission is to bring joy, creativity, and a touch of
              whimsy to the world of non-fungible tokens. We believe that every
              kitty has a story to tell, and through our carefully curated
              collection of NFTs, we aim to showcase the diverse diversonalities,
              colors, and emotions that cats bring into our lives.
            </p>
        )}
        <h3 
          role="button"
          onClick={() => toggleSection("artistry")}>🎨 Exquisite Artistry</h3>
          {showSections.artistry && (
            <p>
              Our NFTs are not just digital assets; they are masterpieces crafted
              by talented artists who share a passion for feline beauty. Each NFT
              tells a unique tale, capturing the essence of our feline friends in
              vibrant colors, intricate details, and imaginative scenes. From
              playful kittens to regal cats, our collection is a visual feast for
              cat enthusiasts and art lovers alike.
            </p>
        )}
        <h3 
          role="button"
          onClick={() => toggleSection("innovation")}>🌐 Blockchain Innovation</h3>
          {showSections.innovation && (
            <p>
              Embracing the power of blockchain technology, KittyNFTs ensures the
              authenticity, scarcity, and ownership of each digital masterpiece.
              Our NFTs are securely stored on the blockchain, allowing collectors
              to truly own a piece of the digital art world and participate in a
              global community of cat aficionados.
            </p>
        )}
        <h3
          role="button"
          onClick={() => toggleSection("collaboration")}>🤝 Community and Collaboration</h3>
          {showSections.collaboration && (
            <p>
              At KittyNFTs, we believe in the strength of community. Join us in
              celebrating the beauty of kitties by connecting with fellow
              collectors, artists, and enthusiasts. We encourage collaboration and
              welcome creators to contribute their unique perspectives to our
              growing gallery of feline-inspired NFTs.
            </p>
        )}
        <h3
          role="button" 
          onClick={() => toggleSection("access")}>🛍️ Exclusive Access</h3>
          {showSections.access && (
            <p>
              Be among the privileged few to own limited edition KittyNFTs. Our
              exclusive drops and special editions offer collectors the opportunity
              to own a piece of digital art history. Stay tuned for regular
              releases, events, and collaborations that will keep your collection
              fresh and exciting.
            </p>
        )}
        <h3
          role="button"
          onClick={() => toggleSection("collision")}>🐾 KittyNFTs – Where Art and Cats Collide</h3>
          {showSections.collision && (
            <p>
              Whether you're a seasoned NFT collector, a cat lover, or simply
              someone who appreciates the extraordinary, KittyNFTs invites you to
              explore the enchanting world of digital feline art. Join us on this
              captivating journey, where each NFT is a portal into the heartwarming
              world of cats, forever immortalized in the blockchain.
            </p>
        )}
        <h3
          role="button"
          onClick={() => toggleSection("kitty")}>❗Indulge your passion for feline charm – start your KittyNFT collection today!</h3>
          {showSections.kitty && (
            <img
              class = "container"
              src= {NeonKitty}
            />
        )}
        
      </div>
    </div>
  );
};

export default Home;