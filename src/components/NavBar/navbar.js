import cartWidget from "../cardWidget/cardwidget";

const Navbar = () => {
    return (
        <nav>
            <h3>Bamboola Kids</h3>
            <div>
                <button>Bebes</button>
                <button>Niñas</button>
                <button>Niños</button>
            </div>
        </nav>
        <cartWidget/>

        
    );
}

export default Navbar