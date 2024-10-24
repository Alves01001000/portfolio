import Technology from "./Technology";

function AboutSection() {
    return(
        <section id="sobre" className="flex flex-col items-center bg-third-100">
            <div className="container py-8">
                <h1 className="text-6xl pb-4">Sobre <span className="text-primary-900">Mim;</span></h1>
                <p className="text-2xl pb-3">Sou um estudante do ensino médio da escola SESI-099 e futuramente entrarei como estudante do SENAI em <span className="text-primary-900 font-bold">Desenvolvimento de Sistemas.</span></p>
                <p className="text-xl pb-3">Tenho conhecimento em diversas áreas da programação e do desenvolvimento de páginas web.</p>
            </div>
            <div className="container py-8">
                <h1 className="text-4xl pb-4">Tecnologias</h1>
                <div className="flex justify-stretch">
                    <Technology img= "devicon-javascript-plain" name="JavaScript"/>
                    <Technology img= "devicon-css3-plain" name="CSS"/>
                    <Technology img= "devicon-html5-plain" name="HTML"/>
                    <Technology img= "devicon-python-plain" name="Python"/>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;