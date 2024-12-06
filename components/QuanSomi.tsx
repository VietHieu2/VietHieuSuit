import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const QuanSomi = () => {
  return (
    <section className="why-choose-us-background w-full px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <div className="flex flex-col gap-16">
          {/* Top Section (Suits) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start gap-8 md:flex-row"
          >
            {/* Text Content */}
            <div className="space-y-6 md:w-1/2">
              <motion.h2
                className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold uppercase text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Quần Tây: Đẳng cấp thời trang không bao giờ lỗi mốt
              </motion.h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Quần tây là biểu tượng của sự lịch lãm và chuyên nghiệp, được
                thiết kế từ những chất liệu cao cấp mang đến sự thoải mái và vẻ
                đẹp tinh tế cho người mặc. Lấy cảm hứng từ phong cách thời trang
                châu Âu, quần tây mang đến sự thanh lịch và phù hợp cho mọi môi
                trường, từ công sở đến các sự kiện trang trọng.
              </p>
            </div>
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[700px] md:w-1/2"
            >
              <Image
                src="/quan2.png"
                alt="Premium Suits"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700"
              />
            </motion.div>
          </motion.div>

          {/* Bottom Section (Formal Wear) */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start gap-8 md:flex-row"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-2xl md:h-[700px] md:w-1/2"
            >
              <Image
                src="/somi.png"
                alt="Formal Wear"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover transition-transform duration-700"
              />
            </motion.div>
            {/* Text Content */}
            <div className="space-y-6 md:w-1/2">
              <motion.h2
                className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-4xl font-bold uppercase text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Sơ Mi Cao Cấp – Chìa Khóa Của Phong Cách Quý Ông
              </motion.h2>
              <p className="text-lg leading-relaxed text-gray-700">
                Áo sơ mi không chỉ là trang phục – nó là biểu tượng của sự lịch
                lãm và tự tin. Với chất liệu cao cấp, thiết kế tôn dáng, và sự
                thoải mái trong từng chi tiết, áo sơ mi giúp bạn luôn nổi bật ở
                bất kỳ đâu.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default QuanSomi;
