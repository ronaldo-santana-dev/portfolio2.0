import './menu.css'
import { List } from "@phosphor-icons/react";
function Menu () {
    return (
        <>
            <div className="container">
                <div className="content">
                    <div className="logo minititles">Portfolio</div>
                    <div className="menus">
                        <ul>
                            <li><a href="#">Sobre mim</a></li>
                            <li><a href="#">Serviços</a></li>
                            <li><a href="#">Conhecimentos</a></li>
                            <li><a href="#">Projetos</a></li>
                            <li><a href="#">Contato</a></li>
                            
                        </ul>
                        <li className='hamburguer'><a href="#"><List size={32}/></a></li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;