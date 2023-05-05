import cartWidget from "../cartWidget/cartwidget";

const Navbar = () => {
    return (
        <nav>
            <h3>Bamboola Kids</h3>
            <div>
                <button>Bebes</button>
                <button>Niñas</button>
                <button>Niños</button>
            </div>
            <cartWidget/>
        </nav>


        
    );
}

export default Navbar