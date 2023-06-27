
export default function Description(props) {
    function handleClick() {
        var prod = document.getElementsByClassName("large_img")[0];
        var smallimg = document.getElementsByClassName("small_img");

        for (let i = 0; i < smallimg.length; i++) {
            smallimg[i].addEventListener('click', function () {
                const smallImageSrc = this.src;
                prod.src = smallImageSrc;
            });
        }
    }

    return (
        <div className='container mt-5 mb-5'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='img1.webp' alt='..' className='large_img' style={{ height: "500px", width: "400px" }} />
                </div>
                <div className='col-md-6'>
                    <div className='mt-5 fs-2 mb-4'>  Silver Mini Dress
                    </div>
                    <div className='mb-4 fs-3'> ₹ 2999
                    </div>
                    <div className='mb-5 fs-5'>  A corset dress made as a combination of two silhouettes : Sequins and Fur.
                        The perfect outfit for that glam night party, your own birthday ,prom night & basically every event!
                    </div>
                    <div className='row'>
                        <div className='col-md-3'>
                            <img src='img1.webp' alt='..' style={{ width: "110px", height: "110px" }} onClick={handleClick} className='small_img' />
                        </div>
                        <div className='col-md-3'>
                            <img src='img2.webp' alt='..' style={{ width: "110px", height: "110px" }} onClick={handleClick} className='small_img' />
                        </div>
                        <div className='col-md-3'>
                            <img src='img3.webp' alt='..' style={{ width: "110px", height: "110px" }} onClick={handleClick} className='small_img' />
                        </div>
                        <div className='col-md-3'>
                            <img src='img4.webp' alt='..' style={{ width: "110px", height: "110px" }} onClick={handleClick} className='small_img' />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
