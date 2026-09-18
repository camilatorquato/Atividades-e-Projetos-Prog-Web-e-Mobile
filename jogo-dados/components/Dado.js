export default function Dado({ valor }) {
    return (
        <img 
            src={'/dado' + valor + '.png'}
            alt={'Dado' + valor}
            width="70"
            height="70"
            style={{margin:'5px'}}
            />
      ); 
    }