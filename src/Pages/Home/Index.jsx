import  {Menu}  from '../../components/Menu/index'
import Homepage from '../../assets/Homepage_Image.png'


export default function Home(){
    return(
        <>
            <Menu/>
            <main>
                <img className='w-full h-screen' src={Homepage}/>
            </main>
        </>
    );
}