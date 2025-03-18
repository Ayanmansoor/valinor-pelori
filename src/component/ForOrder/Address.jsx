import React from 'react'

function Address() {
  return (
    <>
         <section className="h-auto w-full relative px-5 py-5 col-start-1 col-end-3 md:col-end-2 lg:col-end-3 border">
                    <div className="text-h2 font-medium flex items-end justify-between flex-wrap gap-2 py-2">
                        <h2 className="text-p20 font-medium">Delivery information</h2>
                        <span className="rounded-2xl text-[15px] font-extralight bg-primary  py-1 border cursor-pointer text-primary-foreground border-transparent bg-primary/30 hover:bg-secondary px-2 sm:px-4 hover:text-secondary-foreground hover:border-primary ">
                            Edit Information
                        </span>
                    </div>
                    <hr />
                    {/* user detail */}

                    <table className="w-full raltive  text-p18 font-normal text-third flex items-center gap-10 py-2 ">
                        <tr className="flex items-start flex-col w-fit gap-2">
                            <th>Name :</th>
                            <th>Address :</th>
                            <th>City :</th>
                            <th>Zip Code :</th>
                            <th>Mobile :</th>
                            <th>Email :</th>
                        </tr>
                        <tr className="flex items-start flex-col w-fit  gap-2">
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders </td>
                            <td>Germany</td>
                            <th>804-4840</th>
                            <th>0484-0048</th>
                            <th>Example@gmail.com</th>

                        </tr>
                    </table>
            </section>
    </>
  )
}

export default Address