import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Props {
  handleToTab: (tab: string) => void;
}

const Home = ({ handleToTab }: Props) => {
  return (
    <section className="relative h-[80dvh] w-full overflow-hidden md:h-full md:px-[38px] xl:px-[72px]">
      <div className="home-background pointer-events-none absolute inset-0 left-0 top-0 z-0 h-full w-full animate-pulse"></div>
      <div className="relative z-10 flex h-full w-full flex-col-reverse items-center pt-10 md:flex-row md:pt-10 xl:pt-10 2xl:pt-10">
        <div className="flex w-full flex-col gap-6 xl:flex-row xl:justify-between">
          <div className="flex w-full flex-col justify-start gap-6 lg:h-[400px]">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
              className="flex flex-col gap-2"
            >
              <motion.p
                className="px-4 text-[40px] font-bold uppercase leading-[50px] text-black-base md:px-0 md:text-[50px] md:leading-[56px] lg:text-[65px] lg:leading-[70px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Veston hoàn hảo cho mọi sự kiện
              </motion.p>
              <div className="flex flex-col gap-6 px-4 py-3 md:px-0 lg:flex-row lg:items-center lg:gap-10">
                <motion.button
                  className="hover:bg-black h-12 w-full border border-[#000] text-base font-bold transition-all duration-300 hover:text-white md:h-[56px] md:w-[194px]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Liên hệ chúng tôi
                </motion.button>
                <motion.div
                  className="hidden items-center gap-2 md:flex lg:gap-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <h2 className="text-[30px] font-bold leading-10 text-black-base lg:text-[40px] lg:leading-[56px]">
                    25
                  </h2>
                  <p className="text-base font-bold text-black-base lg:text-[20px] lg:leading-[24px]">
                    Năm kinh nghiệm
                  </p>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              className="hidden max-w-[415px] flex-col gap-4 md:flex"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.h3
                className="text-xl font-bold text-black-base lg:text-[24px] lg:leading-[28px]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                Mục tiêu của chúng tôi
              </motion.h3>
              <motion.p
                className="text-sm text-[#42526E] lg:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Chúng tôi tạo ra những bộ veston chất lượng, giá cả phải chăng
                phù hợp với nhu cầu của bạn. Chúng tôi tự hào cung cấp dịch vụ
                may đo và sản xuất theo hợp đồng với cam kết chất lượng vượt
                trội và sự chuyên nghiệp trong từng sản phẩm.
              </motion.p>
            </motion.div>
          </div>
        </div>
        <div className="flex w-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            className="absolute bottom-0 z-[-1] h-full w-full md:relative lg:h-[710px] lg:w-[737px] xl:h-[930px] xl:w-[800px]"
          >
            <Image
              src="hero.png"
              width={0}
              height={0}
              alt=""
              className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-white via-white/50 to-transparent md:hidden" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
