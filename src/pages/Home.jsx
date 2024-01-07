export default function Home() {
    return (
        <main>
            <div className="container">
                <div className="column">
                    <h1>Lojas P10 - Onde tudo custa R$10</h1>
                    <p className="hero-text">Essa é a sua oportunidade de fazer <span className="highlight"> compras incríveis.</span></p>
                    <p className="hero-paragraph">O que está na sua lista de compras hoje?</p>
                    <button className="order-button">Ordenar produtos</button>
                    <div className="row">
                        <div className="info-container col-lg-6">
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <span>4.5</span>
                            </div>
                            <div className="items-info">
                                <img src="https://foodbreakbhd.pk/img/hero.png" alt="Item 1" />
                                <span className="deal-name">Deal 1</span>
                            </div>
                            <p>Biryani, Burger, Broast</p>
                            <span>2000 PKR</span>
                        </div>
                        <div className="info-container">
                            <div className="rating">
                                <i className="fas fa-star"></i>
                                <span>4.5</span>
                            </div>
                            <div className="items-info">
                                <img src="https://www.freeiconspng.com/uploads/food-salad-21.png" alt="Item 1" />
                                <span className="deal-name">Deal 2</span>
                            </div>
                            <p>Biryani, Burger, Broast</p>
                            <span>1500 PKR</span>
                        </div>
                    </div>
                </div>
                <div className="column">
                    <div className="curve-background"></div>
                    <img className="food-image" src="https://www.pngarts.com/files/1/Veg-Food-PNG-Transparent-Image.png"
                        alt="Delicious Food Image" id="foodImage" />
                    <div className="slideshow-controls">
                        <i className="fas fa-chevron-left left-icon" onClick="prevImage()"></i>
                        <i className="fas fa-chevron-right right-icon" onClick="nextImage()"></i>
                    </div>
                </div>
            </div>
        </main>
    )
}