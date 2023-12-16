import "./contact.scss"
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
// import emailjs from '@emailjs/browser';




const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });


const initial = { opacity: 0, x: -100 };
const animate = { opacity: 1, x: 0 };
const transition = { delay: 0.5};


  return (
    <motion.div className="Contact" > 
      <motion.div className="textContainer"
        ref={ref} 
        initial={initial}
        animate={inView ? animate : initial}
        transition={transition}
        >

            <motion.div className="item" >
                <h2>E-mail</h2>
                <span>Marek@Dobrzyk.inpo.pl</span>
            </motion.div>
            <motion.div className="item" >
                <h2>Telefon</h2>
                <span>+48 509 373 993</span>
            </motion.div>   
      </motion.div>
      <div className="formContainer">
        <motion.form
        ref={ref}
        initial={{opacity:0 , x: 150}}
        animate={inView ? animate : {initial}}
        transition={transition}>
            <p>Imie i Nazwisko</p>   
            <input type="text"  name="name" id="" />
            <p>Adres Email</p>   
            <input type="email"  name="email" id="" />
            <p>Wiadomość</p>   
            <textarea  rows={8}  name="message"></textarea>
            <button>Wyślij</button>
        </motion.form>
      </div>
    </motion.div>
  )
}

export default Contact