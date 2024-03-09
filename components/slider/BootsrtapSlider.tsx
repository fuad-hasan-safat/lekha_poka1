import Image from "next/image";

export default function BootstrapSlider() {
    return (
        <>
           <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <Image src={'/sliderPics/eye.png'} width={1920} height={100} alt="1st slide"/>
                </div>
                <div className="carousel-item">
                <Image src={'/sliderPics/girl.png'} width={1920} height={100} alt="1st slide"/>
                </div>
                <div className="carousel-item">
                <Image src={'/sliderPics/painting.png'} width={1920} height={100} alt="1st slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </>
     
    );
}