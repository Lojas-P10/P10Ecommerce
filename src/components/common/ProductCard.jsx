function Star() {
    return (
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.04944 1.34316C5.34975 0.423863 6.65026 0.423861 6.95057 1.34316L7.21285 2.14603C7.61589 3.37979 8.76662 4.21445 10.0645 4.21445H10.9089C11.8789 4.21445 12.2808 5.45681 11.4946 6.02497L10.8301 6.50516C9.77295 7.26909 9.33051 8.62851 9.73552 9.8683L9.99016 10.6478C10.2908 11.5681 9.23865 12.3359 8.45388 11.7688L7.75714 11.2653C6.70831 10.5074 5.2917 10.5074 4.24287 11.2653L3.54613 11.7688C2.76136 12.3359 1.70919 11.5681 2.00985 10.6478L2.26449 9.8683C2.6695 8.62851 2.22706 7.26909 1.16993 6.50516L0.505434 6.02497C-0.280792 5.45681 0.121117 4.21445 1.09115 4.21445H1.93547C3.23339 4.21445 4.38412 3.37979 4.78716 2.14603L5.04944 1.34316Z" fill="#5B616E" />
        </svg>
    )
}

export default function ProductCard() {
    return (
        <div className="card">
            <div className="image"></div>
            <div className="starPrice">
                <div>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <span>R$40.98</span>
            </div>
            <div className="titleMarca">
                <span>Sabão massa pra caramba</span>
                <span>OMO</span>
            </div>
            <div className="addCart">
                <select name="" id="">
                    <option value="1">1</option>
                </select>
                <button>Adicionar ao carrinho</button>
            </div>
        </div>
    )
}