import Button from "./Button";

function HeroSection() {
    return (
        <section className="bg-secondary-700 flex justify-center h-hvm">
            <div className="container flex items-center">
                <div className="w-1/2 text-white font-semibold">
                    <h1 className="text-4xl mb-2">Olá, eu sou o <span className="text-primary-900 font-bold text-5xl">Pietro Alves</span>,</h1>
                    <h2 className="text-3xl mb-8">Estudante de programação.</h2>
                    <Button />
                </div>
                <div className="w-1/2 flex justify-end">
                    
                </div>
            </div>
        </section>
    )
}

export default HeroSection;