import './Container.css'

const Container = ({image, nome, url }) => {
    return(
        <div className="imgs">
            <img
                src={image}
                className="capa-jogos"
                onClick={url}
                title={nome}
            />
            {/* <h4>{nome}</h4> */}
        </div>
    );
};

export default Container;
