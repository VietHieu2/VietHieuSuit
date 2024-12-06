import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LocationIcon from './icons/LocationIcon';
import EmailIcon from './icons/EmailIcon';
import PhoneIcon from './icons/PhoneIcon';
import FbIcon from './icons/FbIcon';
import XIcon from './icons/XIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import Footer from './Footer';
import ArrowUpIcon from './icons/ArrowUpIcon';
import Image from 'next/image';

const Contact = () => {
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#FAFBFC] to-white">
      <div className="relative w-full">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute z-[5] w-full px-6 py-[64px] lg:px-[38px] xl:px-[182px] xl:py-[128px]"
        >
          <div className="card left-0 top-0 flex w-full flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl md:flex-row">
            <div className="flex w-full flex-col justify-between gap-6 bg-gradient-to-br from-[#253858] to-[#1a2942] px-4 py-8 md:max-w-[400px] md:p-10">
              <div className="flex flex-col gap-4 xl:gap-6">
                <h2 className="text-2xl font-bold text-white xl:text-3xl">
                  Liên hệ với chúng tôi
                </h2>
                <div className="flex flex-col gap-4 xl:gap-5">
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex cursor-pointer items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <LocationIcon />
                    </div>
                    <p className="text-sm text-white/90 hover:text-white xl:text-base">
                      191 Hà Huy Tập, Thành phố Vinh, Nghệ An
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex cursor-pointer items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <EmailIcon />
                    </div>
                    <p className="text-sm text-white/90 hover:text-white xl:text-base">
                      viethieu972@gmail.com
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 8 }}
                    className="flex cursor-pointer items-center gap-4"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <PhoneIcon />
                    </div>
                    <p className="text-sm text-white/90 hover:text-white xl:text-base">
                      0914573733
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="group cursor-pointer rounded-full bg-white/10 p-2 transition-all"
                >
                  <FbIcon
                    fill="#FFFFFF"
                    className="transition-colors group-hover:fill-[#23D7BC]"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="group cursor-pointer rounded-full bg-white/10 p-2 transition-all"
                >
                  <XIcon
                    fill="#FFFFFF"
                    className="transition-colors group-hover:fill-[#23D7BC]"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="group cursor-pointer rounded-full bg-white/10 p-2 transition-all"
                >
                  <LinkedInIcon
                    fill="#FFFFFF"
                    className="transition-colors group-hover:fill-[#23D7BC]"
                  />
                </motion.div>
              </div>
            </div>
            <div className="relative w-full overflow-hidden bg-white px-6 py-8 md:p-10">
              <Image
                src="/banner1.png"
                alt="Contact"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
        </motion.div>
        <div className="absolute left-0 top-[350px] flex w-full flex-col gap-[128px] bg-gray-100 px-6 pb-[64px] pt-[400px] md:pt-[250px] lg:px-[38px] xl:px-[182px] xl:pt-[400px]">
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="flex w-full items-center justify-between"
            >
              <motion.p
                whileHover={{ scale: 1.02 }}
                className="text-2xl font-bold uppercase text-[#172B4D] xl:text-4xl"
              >
                Hãy để chúng tôi tạo ra những bộ vest đẹp <br /> dành cho bạn
              </motion.p>
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: '#C0C0C0' }}
                className="flex min-h-10 min-w-10 cursor-pointer items-center justify-center rounded-full bg-gray-800 shadow-lg"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  })
                }
              >
                <ArrowUpIcon />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="text-2xl font-bold text-[#253858] xl:text-4xl"
            >
              Liên hệ với chúng tôi ngay hôm nay để được tư vấn chi tiết hoàn
              toàn miễn phí về các mẫu vải cao cấp và thiết kế độc đáo.
            </motion.div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Contact;
