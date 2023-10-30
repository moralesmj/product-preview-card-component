export default function Button() {
    return (
        <button type="button" className="flex justify-center items-center bg-dark-cyan hover:bg-super-dark-cyan rounded-lg p-4 space-x-3 w-full">
            <img className="w-4" src="/assets/icon-cart.svg" alt="cart"/>
            <span className="montserrat-700 text-sm text-white">Add to Cart</span>
        </button>
    )
}