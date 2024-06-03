import "./Header.css"
import { MdOutlineWbSunny } from "react-icons/md";
import { LuMoon } from "react-icons/lu";


export default function Header(props){''

    const {theme , setTheme} = props ; 
    function TooggleTheme() {
        if(theme === "light") {
            setTheme("dark")

        }else{
            setTheme("light")
        }
    }
    return(
        <header>
            <div className=  "logo">
                <span>Task Mangement</span>
                </div>
                <div className="theme-container">
                 
                        {theme === "light" ? <MdOutlineWbSunny/> : <LuMoon/> }
                  
                    
                    <span>{theme}</span>
                    <span className="icon" onClick={TooggleTheme}>{theme === "light" ? "dark" : "light"}</span>
                </div>
                    
           
        </header>
    )
}