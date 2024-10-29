import ContactForm from "./ContactForm";

function ContactSection () {
    return (
        <section id="contato" className="flex flex-col items-center bg-secondary">
            <div className="container py-8">
                <h1 className="text-4xl pb-4">Contato <br></br><span className="text-primary-700 ml-6">_______</span></h1>
                <div className="flex justify-center">
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}
export default ContactSection;