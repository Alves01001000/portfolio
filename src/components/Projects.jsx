function Projects({img, title, desc}){
    return(
        <div className="flex flex-col items-center w-1/3 p-4 ">
            <div className="bg-white w-full flex-col items-center">
                <h2>{title}</h2>
                <p>{desc}</p>
                <Button content="Veja mais" link={link} target="_blank"/>
            </div>
        </div>
    )
}
export default Projects;