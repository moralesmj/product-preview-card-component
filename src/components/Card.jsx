import Button from "./Button";

export default function Card({ mobImage, webImage, subText, title, content, discountPrice, price }) {
    return (
        <div className="flex flex-col items-center space-y-6">
            <div className="flex flex-col sm:flex sm:flex-row items-center sm:items-stretch w-11/12 sm:w-fit rounded-lg">
                <section className="sm:hidden w-11/12 sm:w-fit">
                    <img className="rounded-t-lg sm:rounded-l-lg sm:rounded-r-none" src={mobImage} alt="mobile" />
                </section>
                <section className="hidden sm:block w-11/12 sm:w-72">
                    <img className="rounded-t-lg sm:rounded-l-lg sm:rounded-r-none" src={webImage} alt="web" />
                </section>
                <section className="flex flex-col bg-white justify-center w-11/12 sm:w-72 h-fit sm:h-auto p-6 space-y-5 rounded-b-lg sm:rounded-r-lg sm:rounded-bl-none">
                    <span className="montserrat-500 text-xs text-dark-grayish-blue">{subText}</span>
                    <h1 className="fraunces-700 text-3xl text-very-dark-blue">{title}</h1>
                    <p className="montserrat-500 text-sm text-dark-grayish-blue">{content}</p>
                    <p className="flex items-center space-x-5">
                        <ins className="fraunces-700 text-3xl text-dark-cyan no-underline">{discountPrice}</ins>
                        <del className="montserrat-500 text-xs text-dark-grayish-blue line-through">{price}</del>
                    </p>
                    <Button />
                </section>
            </div>
            <div className="flex flex-col montserrat-500 text-center text-sm text-dark-grayish-blue space-y-1">
                <div>
                    Challenge by <a className="underline text-super-dark-cyan" href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
                </div>
                <div>Coded by <a className="italic" href="https://github.com/moralesmj">moralesmj</a>.</div>
            </div>
        </div>
    )
}