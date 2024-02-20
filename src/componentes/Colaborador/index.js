import { IoMdCloseCircle } from "react-icons/io";
import { FaHeart, FaRegHeart  } from "react-icons/fa";
import './colaborador.css'


const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {
    function favoritar(){
        aoFavoritar(colaborador.id);
    }

    const propsFavorito = {
        size:25,
        onclick: favoritar
    }

    return (<div className="colaborador">
        <IoMdCloseCircle
            size={25}
            className="deletar"
            onClick={() => aoDeletar(colaborador.id)}
        />
        <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
            <img src={colaborador.imagem} alt={colaborador.nome} />
        </div>
        <div className="rodape">
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <div className='favoritar'>
                {colaborador.favorito 
                    ? <FaHeart onClick={favoritar} color='#ff0000'/> 
                    : <FaRegHeart onClick={favoritar}/>
                }
            </div>
        </div>
    </div>)
}

export default Colaborador