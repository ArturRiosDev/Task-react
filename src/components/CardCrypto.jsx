export default function Label({cryptoList}) {
    return (
        <div id="app">
            <section className="Items">
              {
                cryptoList.map(({image, name, current_price},index)=>{
                  return (
                    <article key={index}>
                       <img src={image} alt='Crypto' /><h3>${name}</h3><h1>${current_price}</h1>
                    </article>
                  )
                })
              }
            </section>
          </div>
    )
}