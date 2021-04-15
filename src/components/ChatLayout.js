import Header from './Header';
import Body from './Body';
import Footer from './Footer';


const ChatLayout = () => {
    return (
        <>



            <div style={
                {
                    overflow: 'hidden'
                }
            }>


                <Header />

                <Body />


                <Footer />
            </div>


        </>


    )
}

export default ChatLayout