import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import ProductFilter from '@/component/ForProduct/ProductFilter'
export default function MobFilterSheet({children , collection}) {
    return (
        <Sheet >
            <SheetTrigger className='w-auto h-auto  block  md:hidden '>{children}</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-lg font-medium text-foreground pb-3 border-b ">Use Filter </SheetTitle>
                    <SheetDescription className="w-full  h-auto">
                        <ProductFilter collection={collection} />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}
