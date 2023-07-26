'use client'
import { animated } from "@react-spring/web";

const Footnote = ({sources, expand, sourceClick}) => {


    return ( 
        <animated.section style={expand} id="sources" className={`fixed bottom-0 h-fit w-fit px-10 py-5 bg-brown-100 dark:bg-brown-800 shadow-sm rounded-t-xl mt-5`}>
            <div className="flex justify-between text-orange-600 dark:text-orange-300">
                    <h2 className="font-bold text-2xl ">Sources</h2>
                    <b className="cursor-pointer" onClick={sourceClick}>X</b>
            </div>
            <ul className="dark:text-brown-100">
                {
                    sources.map((source, index) => {
                        return(
                                <li key={`${source.name}${index}`}><span className="font-bold text-red-500 dark:text-red-300">{source.number}.</span> {source.author}. <span className="font-bold text-orange-600 dark:text-orange-300 italic">{source.title}</span>. <a href={`${source.link}`}>Link</a></li>
                        )
                    })
                }
            </ul>
        </animated.section>
     );
}
 
export default Footnote;