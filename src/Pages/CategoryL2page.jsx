import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import ContentLoader from 'react-content-loader'
import Hero from '@/component/ForHome/Hero'
import SecondHero from '@/component/ForHome/SecondHero'
import { Link } from 'react-router-dom'
import CarouselProduct from '@/component/ForHome/CarouselProduct'
import GridRroduct from '@/component/ForHome/GridRroduct'
import CommonSeoFile from '@/Comman/CommonSeoFile'
import ProductFilter from '@/component/ForProduct/ProductFilter'
import MobFilterSheet from '@/Comman/MobFilterSheet'
import { IoFilterOutline } from 'react-icons/io5'
import { getProductBaseOnCollection, getAllCollections, getAllBanner } from '@/Supabase/SupabaseApi'

const getCollectionMetadata = (title, discription, slug) => ({
    title: ` ${title} - MarkLine Fashions | Timeless Ladies' Footwear & Accessories`,
    description: `${discription}`,
    robots: {
        index: true,
        follow: true,
        "max-video-preview": "-1",
        "max-image-preview": "large",
        "max-snippet": "-1",
    },
    openGraph: {
        title: ` ${title} - MarkLine Fashions | Timeless Ladies' Footwear & Accessories`,
        description: { discription },
        url: `https://valinorpelori.com/collection/${slug}`, // Use full URL for better SEO
        locale: "en_US",
        siteName: "Valinor & Pelóri",
        type: "website",
        images: [
            {
                url: "https://valinorpelori.com/images/collection-preview.jpg", // Example image URL for social previews
                width: 1200,
                height: 630,
                alt: "Valinor & Pelóri Luxury Collection",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@ValinorPelori",
        creator: "@ValinorPelori",
        title: ` ${name} - Valinor & Pelóri | Timeless Ladies' Footwear & Accessories`,
        description: "Shop our luxurious collection of footwear and accessories. Elevate your style with elegant shoes, handbags, and sandals.",
        images: ["https://valinorpelori.com/images/collection-preview.jpg"], // Ensure social sharing images are present
    },
    canonical: `/collection/${slug}`, // Ensure canonical URL points to the main collection page
});


function CategoryL2page() {
    const { slug } = useParams()

    

    const { data: products, isLoading, isError } = useQuery({
        queryKey: ["collectiondatabaseonslug", slug],
        enabled: !!slug,
        queryFn: () => getProductBaseOnCollection(slug),
        staleTime: 2 * 60 * 1000, // 2 minutes caching
    });

    console.log("slug",slug ,"products".products)

    const {
        data: allcollection = [],
        isLoading: isLoadingCollections,
        isError: isErrorCollections,
    } = useQuery({
        queryKey: ["collections"],
        queryFn: getAllCollections,
        staleTime: 1000 * 60 * 2,
        retry: 2,
    });
    const {
        data: HomeBanner = [],
        isLoading: bannerLoading,
        isError: isErrorOnBanner,
    } = useQuery({
        queryKey: ["collectionbanner"],
        queryFn: getAllBanner,
        staleTime: 1000 * 60 * 2,
        retry: 2,
    });


    const currentCollection = allcollection.filter((collection, index) => {
        if (collection.slug == slug) return collection;
    })

    const metadata = getCollectionMetadata(currentCollection[0]?.name, currentCollection[0]?.description, currentCollection[0]?.slug)


    return (
        <>
            <CommonSeoFile {...metadata} />
            {/* <Hero categoryName={"category"} /> */}
            <Hero bannerImages={HomeBanner} css={" h-[40vh] sm:h-[60vh]"} />

            {/* <SecondHero categoryName={"category"} /> */}

            {/* <CarouselProduct data={{ categoryName: "all" }} />


            <GridRroduct data={{ categoryName: "category", name: "Top Deal On Fasion " }} />

            <CarouselProduct data={{ categoryName: "all" }} /> */}


            {/* <Discount categoryName={"shoes"} /> */}
            <section className="w-full relative grid grid-cols-1 mt-5 md:mt-10 container lg:grid-cols-[1fr_3fr] 2xl:grid-cols-[0.6fr_auto] px-0  md:px-10   xl:px-20 ">
                <span className=' hidden lg:block'>
                    <ProductFilter collection={allcollection} />
                </span>

                <div className="w-full gap-5 pb-10 relative flex flex-col px-5 md:px-10 xl:px-10">
                    <div className="w-full h-auto flex items-center bg-secondary border-b border-gray-300 py-2 justify-between ">
                        <h1 className="text-lg font-medium text-primary">Total Products ( 300 )</h1>
                        <span className=' block  lg:hidden'>
                            <MobFilterSheet collection={allcollection}>
                                <IoFilterOutline className='text-[20px] text-foreground cursor-pointer ' />
                            </MobFilterSheet>
                        </span>
                    </div>
                    {
                        products?.length ?
                            <GridRroduct data={{ categoryName: "", url: "product", products: products }} /> : <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 container px-0 md:px-10 lg:px-20">
                                {Array.from({ length: 6 }).map((_, index) => (
                                    <ContentLoader
                                        key={index}
                                        speed={2}
                                        width={200}
                                        height={320}
                                        viewBox="0 0 200 320"
                                        backgroundColor="#f3f3f3"
                                        foregroundColor="#ecebeb"
                                        className="w-full"
                                    >
                                        <rect x="10" y="10" rx="10" ry="10" width="180" height="180" />

                                        <rect x="10" y="10" rx="4" ry="4" width="40" height="20" />

                                        <rect x="10" y="200" rx="4" ry="4" width="160" height="15" />
                                        <rect x="10" y="220" rx="4" ry="4" width="100" height="15" />

                                        <rect x="10" y="250" rx="4" ry="4" width="70" height="15" />
                                        <rect x="90" y="250" rx="4" ry="4" width="50" height="15" />

                                        <rect x="10" y="280" rx="4" ry="4" width="120" height="12" />
                                    </ContentLoader>
                                ))}
                            </div>
                    }

                </div>
            </section>

        </>
    )
}

export default CategoryL2page