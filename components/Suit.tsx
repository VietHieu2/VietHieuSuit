import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Suit = () => {
  const products = [
    {
      id: 1,
      name: 'Dinner Suit',
      image: '/suit8.png',
      description: 'Trang phục dạ tiệc cao cấp dành cho nam giới',
    },
    {
      id: 2,
      name: ' Three-Piece Suit',
      image: '/suit7.png',
      description:
        'Với thiết kế cổ điển và đậm chất lịch lãm, phù hợp với hình tượng quý ông',
    },
    {
      id: 3,
      name: 'Double-Breasted Pinstripe Suit',
      image: '/suit9.png',
      description:
        'Áo vest hai hàng khuy là kiểu thiết kế với hai dãy nút song song',
    },
    {
      id: 4,
      name: 'Single-Breasted Suit',
      image: '/suit10.png',
      description:
        'Vest một hàng khuy màu xanh navy mang phong cách tối giản, hiện đại',
    },
  ];

  return (
    <section className="w-full px-4 pb-12 pt-20 sm:px-6 lg:px-8 xl:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-7xl"
      >
        <motion.h2
          className="mb-12 text-center text-3xl font-bold uppercase tracking-tight text-gray-900 lg:text-5xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Suit & Veston: Lựa chọn tối ưu cho sự lịch lãm
        </motion.h2>

        <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-xl sm:p-6 lg:p-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left Section (Large Image) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] w-full overflow-hidden rounded-xl lg:h-[700px]"
            >
              <Image
                src="/suitmain.png"
                alt="Main Suit Collection"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority
              />
            </motion.div>

            {/* Right Section (Product Grid) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative h-[300px] overflow-hidden rounded-lg bg-gray-100 lg:h-auto"
                >
                  <div className="aspect-w-4 aspect-h-5 relative h-full w-full">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <motion.div
                    className="from-black/80 absolute inset-0 flex flex-col justify-end bg-gradient-to-t p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <h3 className="text-lg font-semibold text-white">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-200">
                      {product.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Suit;
