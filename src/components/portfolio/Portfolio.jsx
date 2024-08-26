import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"React Commence",
        img:"https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam rerum nulla alias officia exercitationem. Sed eligendi, officiis non autem modi mollitia natus vitae perferendis debitis esse iure quos dolore.",
    },
    {
      id:2,
      title:"Next.js Commence",
      img:"https://images.pexels.com/photos/4947765/pexels-photo-4947765.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam rerum nulla alias officia exercitationem. Sed eligendi, officiis non autem modi mollitia natus vitae perferendis debitis esse iure quos dolore.",
  },
  {
    id:3,
    title:"JS APP",
    img:"https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&w=600",
    desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam rerum nulla alias officia exercitationem. Sed eligendi, officiis non autem modi mollitia natus vitae perferendis debitis esse iure quos dolore.",
},
{
  id:4,
  title:"Music App",
  img:"https://images.pexels.com/photos/913215/pexels-photo-913215.jpeg?auto=compress&cs=tinysrgb&w=600",
  desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magnam rerum nulla alias officia exercitationem. Sed eligendi, officiis non autem modi mollitia natus vitae perferendis debitis esse iure quos dolore.",
},
];

const Single = ({item}) =>{

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref, 
    // offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress,[0,1],[-100,100] )

  return <section >
    <div className="container">
      <div className="wrapper">
        <div className="imageContainer" ref={ref}>
         <img src={item.img} alt=""/>
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2 style={{y}}>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </div>
  </section>;
  
}

export const Portfolio = () => {

  const ref = useRef();

  const {scrollYProgress} = useScroll({
    target: ref, 
    offset:["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featued Work</h1>
        <motion.div style={{scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map(item=>(
        <Single item={item} key= {item}/>
      ))}
    </div>
  )
}
