'use client';

import Image from "next/image";
import singleHomeBanner from '@/public/images/singleHomeBanner.png'
import SingleProductSlider from "@/components/EmblaCarousel/SingleProductSlider";
import IconSleepRoom from "@/public/icons/IconSleepRoom";
import IconRoomWhash from "@/public/icons/IconRoomWhash";
import IconCar from "@/public/icons/IconCar";
import image360 from '@/public/images/gallery6.png';
import interier1 from '@/public/images/interier1.png';
import interier2 from '@/public/images/interier2.png';
import interier3 from '@/public/images/interier3.png';
import GallerySlider from "@/components/EmblaCarousel/GallerySlider";
import { useEffect, useState } from "react";
import { Fancybox } from "@fancyapps/ui";
import { Inter } from "next/font/google";
import InterierSlider from "@/components/EmblaCarousel/InterierSlider";

type HomeType = {
    apartment?: {
        code?: string;
        [key: string]: any;
    };
    [key: string]: any;
};

const ProductPage = () => {
    const [home, setHome] = useState<HomeType | null>(null)

    useEffect(() => {
        const stored = localStorage.getItem("selectedHome")
        if (stored) {
            setHome(JSON.parse(stored))
        }
    }, [])

    useEffect(() => {
        Fancybox.bind('[data-fancybox="gallery"]', {})
        return () => {
            Fancybox.destroy()
        }
    }, [])

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
                    <h1>{home?.apartment?.code || "Z01"} PRIVATE HOUSE</h1>
                </div>
            </div>
            <div className="custom_container">
                <div className="product_slider_line">
                    <div className="product_slider">
                        <SingleProductSlider selectedType={home?.apartment?.code?.toLocaleLowerCase() || ""} />
                    </div>
                    <div className="product_main_content">
                        <div className="flex_line">
                            <div className="product_price">{home?.apartment?.area || 0} m2</div>
                        </div>
                        <div className="des">
                            Հարմարավետ միջին չափի տուն` նախատեսված ժամանակակից ապրելու համար: Ունենալով երեք ննջասենյակ, ընդարձակ հյուրասենյակ և ճկուն խոհանոցային տարածք` այս տունը համապատասխանում է ժամանակակից ընտանիքի կարիքներին:
                            <br />
                            <br />
                            Այն ներառում է երկու լոգասենյակ և առաջարկում է սեփական բակ բացօթյա ժամանցի համար, երկու մեքենայի համար նախատեսված կայանատեղիով: Իդեալական է այն ընտանիքների համար, ոքեր փնտրում են հարմարեցված ապրելու միջավայր:
                        </div>
                        <div className='property_item'>
                            x{home?.apartment?.bedroom_count || 0} <IconSleepRoom />
                            x{home?.apartment?.bathroom_count || 0} <IconRoomWhash />
                            x{home?.apartment?.parking_count || 0} <IconCar />
                        </div>
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
                </div>
                <div className="section_title">
                    PLANS and LAYOUTS
                </div>
                <div className="interier_grid">
                    <div className="image_block">
                        <a
                            href={interier1.src}
                            data-fancybox="gallery"
                        >
                            <Image
                                src={interier1}
                                alt="Interior Plan 1"
                                fill
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                        </a>
                    </div>
                    <div className="image_block">
                        <a
                            href={interier2.src}
                            data-fancybox="gallery"
                        >
                            <Image
                                src={interier2}
                                alt="Interior Plan 2"
                                fill
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                        </a>
                    </div>
                    <div className="image_block">
                        <a
                            href={interier3.src}
                            data-fancybox="gallery"
                        >
                            <Image
                                src={interier3}
                                alt="Interior Plan 3"
                                fill
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                        </a>
                    </div>
                </div>
                <div className="section_title">
                    INTERIOR
                </div>
                <InterierSlider selectedType={home?.apartment?.code?.toLocaleLowerCase() || ""} />
            </div>
        </div>
    );
};

export default ProductPage;