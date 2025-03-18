import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
function OrderSheet({children}) {
    return (
        <Sheet>
            <SheetTrigger className='w-auto h-auto'>{children}</SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle className="text-sm font-medium text-primary">Orders</SheetTitle>
                    <SheetDescription>
                        This is your Orders 
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default OrderSheet