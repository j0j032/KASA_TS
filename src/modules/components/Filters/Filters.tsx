const Filters = () => {

    const tags: Array<string> = ["Louvre", "Montmartre", 'Champs Elysées', 'Marais', 'Trocadéro', 'Bastille']

    return (
        <section className='filters__container'>
            <div className='filters__range-container'>
                <p>0<span> €</span></p>
                <input type='range' id='price' name='byPrice' min={0} max={500}/>
                <label htmlFor='price'>500<span> €</span></label>
            </div>
            <div className='filters__tags-container'>
                {
                    tags.map((tag, i) => (
                        <p key={i}>{tag}</p>
                    ))
                }
            </div>
            <select className='sort-btn' name='sort'>
                <option value=''> ⏚ Trier par</option>
                <option value='descPrice'>Prix croissant</option>
                <option value='ascPrice'>Prix décroissant</option>
                <option value='rate'>Les mieux notés</option>
            </select>
        </section>
    )
}

export default Filters
