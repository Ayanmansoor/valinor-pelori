import React from 'react'
import BlogBanner from '@/component/Blogs/BlogBanner'
import { getblog } from '@/Supabase/SupabaseApi'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import CommonSeoFile from '@/Comman/CommonSeoFile'


const getProductMetadata = (name, slug, description) => ({
    title: `${name || "Elegant Footwear"} - Tread & Trend | Ladies' Shoes & Bags`,
    description: `${description}`,
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: `${name}` || "",
        description: `${description}` || "",
        url: "/new-arrivals",
        locale: "en_us",
        siteName: "Tread & Trend",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@TreadTrend",
        creator: "@TreadTrend",
        title: `${name}`  || "" ,
        description: `${description}` || "",
    },
    canonical: `/blog/${slug}`,
});


function BlogPage() {
    const { slug } = useParams()

    const {
        data: blog,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["blog", slug],
        queryFn: () => getblog(slug),
        enabled: !!slug,
        staleTime: 1000 * 60 * 2,
        retry: 2,
    });

    const metadata = getProductMetadata(blog?.title,blog?.slug,blog?.discription)

    return (
        <>
            <CommonSeoFile {...metadata} />
            <BlogBanner />
            <section className='w-full py-5 md:py-10 relative h-auto flex flex-col gap-3 container px-5 md:px-20 lg:px-40'>
                <h2 className=' text-p35 md:text-p40 font-semibold text-primary'>
                    {blog?.title}
                </h2>
                <img src={blog?.image || ""} alt="" className=' max-h-[250px] md:max-h-[300px] lg:max-h-[500px]  h-auto w-full object-cover reative ' />
            </section>
            <div className='w-full relative h-auto container px-5 md:px-20 lg:px-40 pb-20' dangerouslySetInnerHTML={{
                __html: blog?.content
            }} />
        </>
    )
}

export default BlogPage