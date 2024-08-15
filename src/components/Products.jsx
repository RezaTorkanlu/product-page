function Products(props) {
  return (
    <div>
      <h1 className="text-5xl mb-5 ml-3 ">Desserts</h1>
      <ul className='grid lg:grid-cols-3 md:grid-cols-2 md:gap-2 max-sm:grid-cols-1 '>
        {
          props.item.map((item) => {
            return (
              <li key={item.id} className='grid items-center justify-center mb-5'>
                <img src={item.image} className=' rounded-lg size-60 z-10' />
                <button
                  onClick={() => props.addProducts(item)}
                  className='flex items-center z-50 bg-orange-50 p-2 m-auto -mt-5 rounded-full border border-zinc-500 transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white'>
                  <span className='mx-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z" /><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z" /></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z" /></clipPath></defs></svg>
                  </span>
                  add to card
                </button>
                <h4 className='mt-3 text-sm text-zinc-400'>{item.type}</h4>
                <h3 className='text-lg font-bold'>{item.name}</h3>
                <p className='text-orange-600'>${item.price}</p>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Products;