import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyCard from './ui/CaseStudyCard';

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const Contract = () => {
  return (
    <div className="flex flex-col gap-[64px] bg-[#FAFBFC] px-6 py-[64px] lg:px-[38px] xl:px-[182px] xl:py-[128px]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.h2
          className="mb-8 text-center text-3xl font-bold uppercase tracking-tight text-gray-900 lg:text-5xl"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          Các hợp đồng đã thực hiện
        </motion.h2>
      </motion.div>
      <div className="flex flex-col gap-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="min-h-full w-full"
        >
          <CaseStudyCard
            imgSrc="vnpt.png"
            companyName="Công ty VNPT"
            description="Trực tiếp tham gia thiết kế và may đo hoàn chỉnh hợp đồng cung cấp sơ mi cho VNPT, đảm bảo từng chi tiết từ chất liệu, kiểu dáng đến đường kim mũi chỉ đều đạt tiêu chuẩn chất lượng cao, đáp ứng yêu cầu chuyên nghiệp và sự kỳ vọng của đối tác. Đây là một dự án quan trọng mà tôi đã dồn tâm huyết để mang lại sản phẩm không chỉ đẹp mắt mà còn thể hiện được hình ảnh chuyên nghiệp của VNPT."
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="min-h-full w-full"
        >
          <CaseStudyCard
            imgSrc="duongmia.png"
            companyName="Công ty cổ phần mía đường sông con"
            description="Hoàn thành hợp đồng may đo và cung cấp quần đồng phục cho Công ty Đường Mía Sông Con. Với sự chú trọng đến từng chi tiết, từ việc chọn chất liệu vải chất lượng cao, thiết kế phù hợp với tính chất công việc đến quy trình sản xuất tỉ mỉ"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cardVariants}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="min-h-full w-full"
        >
          <CaseStudyCard
            imgSrc="agri.png"
            companyName="Ngân hàng Agribank Hà Tĩnh"
            description="Nhà may Viết Hiếu hoàn thiện hợp đồng may đo và cung cấp vest đồng phục cho Ngân hàng Agribank Hà Tĩnh. Với sự chuyên nghiệp và tận tâm, Viết Hiếu đã lựa chọn chất liệu cao cấp, thiết kế sang trọng, hiện đại nhưng vẫn đảm bảo sự thoải mái để phù hợp với môi trường làm việc của ngân hàng."
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Contract;
