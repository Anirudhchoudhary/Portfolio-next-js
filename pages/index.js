import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import code from "../public/backend.jpg";
import design from "../public/frontend.jpg";
import consulting from "../public/designer.jpg";
import anirudh from "../public/anirudh.jpg"
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

const playfairDisplay = Playfair_Display({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-white'>
      <section>
        <nav className='flex justify-around py-10 leading-tight px-auto bg-primary text-justify'>
          <h1 className={`text-white text-xl py-3 font-sans ${playfairDisplay.className}`} >
            Anirudh Malik
          </h1>
          <ul className='flex justify-between items-center'>
            <li className='bg-gradient-to-r from-secondary to-secondary-one mx-2 rounded-xl px-3 py-3'>Contact Us</li>
            <li className='bg-gradient-to-r from-secondary to-secondary-one mx-2 rounded-xl px-3 py-3'> Hire me</li>
          </ul>
        </nav>

        {/* Second main section */}
        <div className='text-center flex items-center flex-col max-w-7xl mx-auto py-20 px-34 lg:flex-row px-10'>
          <div className='flex items-center justify-center'>
            <div className='relative bg-fuchsia-400 rounded-full overflow-hidden w-80 h-80'>
              <Image
                src={anirudh}
                alt="Anirudh Malik annycodecamp.com"
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <div className='mx-auto'>
            <h2 className='font-mono my-2 py-5 text-3xl'>
              Hello I'm Anirudh Malik.
            </h2>
            <p className='font-serif text-md py-5 leading-8 max-w-lg  md:text-xl'>
              Welcome to my portfolio! I'm a versatile full stack developer, adept at crafting dynamic web solutions.
              With a passion for both frontend elegance and backend robustness, I bring creative visions to life through code.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
            <button className='bg-gradient-to-r from-secondary to-secondary-one my-5 px-10 py-3 rounded-full text-lg'> Hire me</button>
          </div>
        </div>
      </section>
      {/* Service i offer */}
      <section className='mt-20 content-center'>
        <div className='text-center my-10'>
          <h2 className='text-2xl font-mono my-5'> Service I offer</h2>
          <p className='font-serif text-md max-w-lg mx-auto leading-8 px-4 lg:max-w-4xl'>
            Embark on a journey of digital innovation with my comprehensive development services. From crafting seamless user experiences through captivating frontend designs to building powerful and efficient backend systems,
            I offer a holistic approach that transforms ideas into cutting-edge web solutions. Let's collaborate to bring your vision to the digital realm
          </p>
        </div>
        <div>
          <div className="lg:flex gap-10 mx-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-auto">
              <Image src={design} width={100} height={100} className='mx-auto' />
              <h3 className="text-lg font-medium pt-8 pb-2">
                Technology I am Learning.
              </h3>
              <p className="py-2">
                Technology I am learning to improve my skills and knowledge.
              </p>
              <h4 className="py-4 text-teal-600">Tech</h4>
              <p className="text-gray-800 py-1">Express Js</p>
              <p className="text-gray-800 py-1">Node js</p>
              <p className="text-gray-800 py-1">Mongo db</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} className='mx-auto' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Framework I Use
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Framework I Use</h4>
              <p className="text-gray-800 py-1">React Js</p>
              <p className="text-gray-800 py-1">Next Js</p>
              <p className="text-gray-800 py-1">Django</p>
              <p className="text-gray-800 py-1">Express</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} className='mx-auto' />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Framework Js</h3>
              <p className="py-2">
                Technology I know
              </p>
              <h4 className="py-4 text-teal-600">Framework</h4>
              <p className="text-gray-800 py-1">Python3</p>
              <p className="text-gray-800 py-1">Django</p>
              <p className="text-gray-800 py-1">Mysql</p>
              <p className="text-gray-800 py-1">AWS EC2.</p>
              <p className="text-gray-800 py-1">Html and CSS3</p>
              <p className="text-gray-800 py-1">Tailwindcss</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='text-center my-10'>
          <h2 className='text-2xl font-mono my-5'> My Projects</h2>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
      </section>
    </main>
  )
}
