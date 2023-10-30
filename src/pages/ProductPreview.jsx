import Card from "../components/Card";

export default function ProductPreview() {
    return (
        <main className="flex justify-center items-center bg-cream min-h-screen">
            <Card mobImage = "/assets/image-product-mobile.jpg" webImage = "/assets/image-product-desktop.jpg" subText = "P E R F U M E" title = "Gabrielle Essence Eau De Parfum" content = "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL." discountPrice = "$149.99" price = "$169.99"/>
        </main>
    )
}