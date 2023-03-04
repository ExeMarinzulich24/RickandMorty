import Card from '../Card/Card';

function Cards({characters, onClose}) {
   
   return( 
      <div>
      {
         characters.map(({id, name, species, gender, image}) => {
            return <Card
            key= {id}  //solo para React es key, para evitar problemas en consola de navegador
            name={name}
            species={species}
            gender= {gender}
            image={image}
            id={id}   // esto es independiente a key
            onClose={() => onClose(id)}
            />
         })
      }
      </div>
   )
}

export default Cards