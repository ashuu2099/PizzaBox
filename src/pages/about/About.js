import "./About.scss";
import { motion } from "framer-motion";
import { pageAnimation } from "../../assets/animations/variants";
import aboutUsImg from "../../assets/images/about-us-img.jpeg";


export const About = () => {
  return (
    <motion.div
      className="about"
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="about-text-box"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.75, ease: "easeIn" }}
      >
        <div className="about-us">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">
            <h1>Welcome to PizzaBox</h1>
            <p>Where passion meets pizza perfection.</p><br/>

            <ul>
              <li>
                <strong>Our Promise</strong>
              </li>
              <ul>
                <li>Exceptional flavors, endless delight.</li>
              </ul><br/>

              <li>
                <strong>Crafted with Care</strong>
              </li>
              <ul>
                <li>Fresh ingredients, artisanal skill.</li>
              </ul><br/>

              <li>
                <strong>Explore and Enjoy</strong>
              </li>
              <ul>
                <li>A symphony of unique creations.</li>
              </ul><br/>

              <li>
                <strong>Customer First</strong>
              </li>
              <ul>
                <li>Your satisfaction is our rule.</li>
              </ul><br/>

              <li>
                <strong>Join Our Pizza Family</strong>
              </li>
              <ul>
                <li>Experience pizza like never before.</li>
              </ul>
            </ul>
          </p>
         
        </div>
        {/* <div className="our-mission">
          <h1 className="about-title">Our Mission</h1>
          <p className="about-text">
            Greater for days morning seasons you unto first. Seed spirit
            multiply air cattle beginning let, open blessed. Own midst divide be
            blessed him over green him.
          </p>
          <p className="about-text">
            Own in. Won't. Very spirit. Without forth Forth saw replenish image.
            And creature. Likeness, dominion female dominion she'd. Appear years
            dry us bring she'd together. Living fruit.
          </p>
        </div> */}
      </motion.div>
      <motion.img
        src={aboutUsImg}
        className="about-img"
        alt="An oven-baked pizza with pesto, rocket and buffalo mozzarella."
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeIn" }}
      />
    </motion.div>
    
  );
};
