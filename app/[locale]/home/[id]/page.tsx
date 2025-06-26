'use client';

import Image from "next/image";
import singleHomeBanner from '@/public/images/singleHomeBanner.png'
import SingleProductSlider from "@/components/EmblaCarousel/SingleProductSlider";
import IconSleepRoom from "@/public/icons/IconSleepRoom";
import IconRoomWhash from "@/public/icons/IconRoomWhash";
import IconCar from "@/public/icons/IconCar";
import image360 from '@/public/images/image360.png';
import interier1 from '@/public/images/interier1.png';
import interier2 from '@/public/images/interier2.png';
import interier3 from '@/public/images/interier3.png';
import GallerySlider from "@/components/EmblaCarousel/GallerySlider";

const ProductPage = () => {
    return (
        <div className='product_inner_page pb-[50px]'>
            <div className='banner_img'>
                <Image
                    src={singleHomeBanner}
                    priority
                    alt='Homes Banner'
                    fill
                    style={{ objectFit: 'cover' }}
                    unoptimized
                />
                <div className='custom_container'>
                    <h1>Z01 PRIVATE HOUSE</h1>
                </div>
            </div>
            <div className="custom_container">
                <div className="product_slider_line">
                    <div className="product_slider">
                        <SingleProductSlider />
                    </div>
                    <div className="product_main_content">
                        <div className="flex_line">
                            <div className="product_title">Description</div>
                            <div className="product_price">[129.6] m2</div>
                        </div>
                        <div className="des">
                            Հարմարավետ միջին չափի տուն` նախատեսված ժամանակակից ապրելու համար: Ունենալով երեք ննջասենյակ, ընդարձակ հյուրասենյակ և ճկուն խոհանոցային տարածք` այս տունը համապատասխանում է ժամանակակից ընտանիքի կարիքներին:
                            <br />
                            <br />
                            Այն ներառում է երկու լոգասենյակ և առաջարկում է սեփական բակ բացօթյա ժամանցի համար, երկու մեքենայի համար նախատեսված կայանատեղիով: Իդեալական է այն ընտանիքների համար, ոքեր փնտրում են հարմարեցված ապրելու միջավայր:
                        </div>
                        <div className='property_item'>
                            x3 <IconSleepRoom />
                            x2 <IconRoomWhash />
                            x2 <IconCar />
                        </div>
                        <button className="check_avelable">CHECK AVAILABLE OPTIONS</button>
                    </div>
                </div>
                <div className="product_360">
                    <Image
                        src={image360}
                        alt='360 View'
                        fill
                        style={{ objectFit: 'cover' }}
                        unoptimized
                    />
                    <button className="view_360">VIEW 360</button>
                </div>
                <div className="section_title">
                    PLANS and LAYOUTS
                </div>
                <div className="interier_grid">
                    <div className="image_block">
                        <Image
                            src={interier1}
                            alt="Interior Plan 1"
                            fill
                            style={{ objectFit: 'cover' }}
                            unoptimized
                        />
                    </div>
                    <div className="image_block">
                        <Image
                            src={interier2}
                            alt="Interior Plan 1"
                            fill
                            style={{ objectFit: 'cover' }}
                            unoptimized
                        />
                    </div>
                    <div className="image_block">
                        <Image
                            src={interier3}
                            alt="Interior Plan 1"
                            fill
                            style={{ objectFit: 'cover' }}
                            unoptimized
                        />
                    </div>
                </div>
                <div className="section_title">
                    INTERIOR
                </div>
                <GallerySlider />
            </div>
        </div>
    );
};

export default ProductPage;