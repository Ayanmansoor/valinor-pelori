import React from 'react'
import BlogBanner from '@/component/Blogs/BlogBanner'
import BlogCard from '@/component/Blogs/BlogCard'
import axios from 'axios'
import { useQuery } from 'react-query'
import { getAllBlogs } from '@/Supabase/SupabaseApi'
import SkeletonGrid from '@/component/Blogs/BlogSkeleton'
import CommonSeoFile from '@/Comman/CommonSeoFile'
const metadata = {
    title: "Blog - Tread & Trend | Style Tips & Fashion Inspiration",
    description: "Read the latest blogs from Tread & Trend. Discover fashion tips, styling advice, and the stories behind our premium ladies' shoes and accessories.",
    robots: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
    },
    openGraph: {
        title: "Blog - Tread & Trend | Style Tips & Fashion Inspiration",
        description: "Get inspired by our fashion blogs. Explore how to style your favorite shoes, bags, and sandals from Tread & Trend.",
        url: "/blog",
        locale: "en_us",
        siteName: "Tread & Trend",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@TreadTrend",
        creator: "@TreadTrend",
        title: "Blog - Tread & Trend | Style Tips & Fashion Inspiration",
        description: "Stay updated with the latest trends and styling guides on Tread & Trend’s blog. Fashion insights at your fingertips.",
    },
    canonical: "/blog",
};


function BlogsPage() {
    const {
        data: blogs,
        isLoading: blogLoading,
        isError: isError,
    } = useQuery({
        queryKey: ["blogs"],
        queryFn: getAllBlogs,
        staleTime: 1000 * 60 * 2,
        retry: 2,
    });


    return (
        <>
            <CommonSeoFile {...metadata} /> 
            <BlogBanner />
            {
                blogLoading ?
                    <SkeletonGrid />
                    :
                    <section className='w-full relative container px-2  md:px-10 py-10   xl:px-20   h-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 '>
                        {
                            blogs?.map((item, index) => (
                                <BlogCard data={item} />
                            ))
                        }


                    </section>
            }

        </>
    )
}

export default BlogsPage