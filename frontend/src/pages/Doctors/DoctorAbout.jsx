import { formatDate } from "../../utils/formatDate";


const DoctorAbout = () => {
    return (
        <div>
            <div>
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
             About of
             <span className="text-irishBlueColor font-bold text-[24px] leading-9">
                Abdul kalam
                </span>
                </h3>
                <p className="text_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas corrupti
                 beatae iusto, dolorum temporibus quibusdam error dolores sit velit officiis vel odio 
                 commodi, accusantium suscipit reiciendis ab! Minima, non voluptatem repudiandae
                  voluptatibus perspiciatis similique fugit libero tempora dicta. 
                  Dolorem repudiandae cupiditate asperiores tempora 
                  voluptates a eligendi, magnam iusto architecto nisi.
                  </p>
            </div>
            <div className="mt-12">
                <h3 className="text-[20px] leading-[30px] text-headingColor font-semiBold">
                    Education
                </h3>
                <ul className="pt-4 md:p-5">
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                            {formateDate('09-13-2014')} - {formateDate('09-13-2016')}
                                </span>
                                <p className="text-[16px] leading-6 font-medium text-textColor">
                                     PHD in Surgeon
                                     </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                                     New Castle,New York,US
                                     </p>
                    </li>
                    <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 md-[30px]">
                        <div>
                            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                                {formateDate('07-04-2010')} - {formateDate('07-04-2010')}
                                </span>
                                <p className="text-[15px] leading-6 font-medium text-textColor">
                                     PHD in Surgeon
                                     </p>
                        </div>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                                     New Castle,New York,US
                                     </p>
                    </li>
                </ul>
            </div>

            <div className="mt-12">
            <h3 className="text-[20px] leading-[30px] text-headingColor font-semiBold">
                    Experience
                </h3>
                
                <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
                    <li className="p-4 rounded bg-[#fff9e]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate('07-04-2010')} - {formateDate('08-13-2014')}

                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                                     Sr. Surgeon
                                </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                                    manchester United,Liverpool
                                     </p>

                    </li>
                </ul>
                <li className="p-4 rounded bg-[#fff9e]">
                        <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                        {formateDate('07-04-2010')} - {formateDate('08-13-2014')}

                        </span>
                        <p className="text-[16px] leading-6 font-medium text-textColor">
                                     Sr. Surgeon
                                </p>
                        <p className="text-[14px] leading-5 font-medium text-textColor">
                                    manchester United,Liverpool
                                     </p>

                    </li>

            </div>
        </div>
    )
}

export default DoctorAbout;