import './index.scss'
// import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters';
import { useEffect,  useState } from 'react';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
  useEffect(()=> {

    return (() => {
        setLetterClass('text-animate-hover')
    })
});


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_jaofx74', 'template_z7y18qu', e.target, 'E2aJb67mCIPi5DmF4')
                .then(
                    () => {
                        alert('Message has been sent.')
                        window.location.reload(false)
        
                    },
                    () => {
                        alert('Failed to send the message, Please try again')
                    }
                 )
          
          
          e.target.reset()
          

      };

    return(
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C','o','n','t','a','c','t',' ','m','e']} 
                    idx={15}
                    />
                </h1>
                <p>
                    

                    Mobile :<a href="tel:+9779846955158">9846955158</a> <br/>  E-mail :<a href = "mailto: patelrabin89@gmail.com">patelrabin89@gmail.com</a><br/>
                    Address: Budanilkantha, Kathmandu ; NEPAL. <br/></p>

                    <p>I will be more than happy to work for you. You can contact me directly on the line or fill the form below and I'll get back to you shortly. CHEERS!<br/>
                
                </p>
                <div className='contact-form'>
                    <form onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type="text" name='name' placeholder='Name ' required />
                            </li>
                        
                        
                            <li className='half'>
                                <input type="email" name='email' placeholder='E-mail ' required />
                            </li>
                            <li>
                                <input placeholder='Subject ' type='text' name='subject' required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value="SEND"/>
                            </li>

                    </ul>    
                    </form>

                </div>
            </div>
        </div>

        <Loader type="pacman" />

        </>
    )
}

export default Contact