import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const Map: React.FC = () => {
  return (
    <div className="flex w-full flex-col gap-[64px] bg-gradient-to-b from-[#FAFBFC] to-white px-6 pb-[64px] lg:px-[38px] xl:px-[182px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.h2
          className="mb-4 text-center text-3xl font-bold uppercase tracking-tight text-gray-900 lg:text-5xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Địa chỉ cửa hàng
        </motion.h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        transition={{ duration: 0.3 }}
        className="mx-auto w-full max-w-6xl"
      >
        <div className="hover:shadow-3xl group relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300">
          <div className="relative h-0 w-full pb-[50%] transition-transform duration-500 hover:scale-[1.02]">
            <iframe
              className="absolute left-0 top-0 h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214.3711095272035!2d105.6770902628059!3d18.69409076385201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3139cf20f9fef5a5%3A0x58a657733f61969!2zTmjDoCBtYXkgVmVzdG9uLUNvbXBsZSBWaeG6v3QgSGnhur91!5e1!3m2!1svi!2s!4v1733284968798!5m2!1svi!2s"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            Cửa hàng Veston - Comple Viết Hiếu
          </h3>
          <div className="mt-4 space-y-2">
            <p className="text-lg text-gray-700 hover:text-gray-900">
              <span className="mr-2">📍</span>
              Số 191 Hà Huy Tập, Thành phố Vinh, Nghệ An
            </p>
            <p className="text-lg text-gray-700 hover:text-gray-900">
              <span className="mr-2">📞</span>
              <a href="tel:0914573733" className="hover:underline">
                0914573733
              </a>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
