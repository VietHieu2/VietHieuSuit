import { motion } from 'framer-motion';
import React from 'react';

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="relative h-2 w-full rounded-full bg-gray-200">
      <motion.div
        className="absolute left-0 top-0 h-full rounded-full bg-[#23D7BC]"
        initial={{ width: 0 }}
        whileInView={{ width: `${progress}%` }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      />
      <span className="absolute -top-7 right-0 transform text-sm text-[#7A869A]">
        {progress}%
      </span>
      {/* <div className="flex h-full w-full gap-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-full w-full"
        >
          <CardInformation
            numericalOrder="01"
            icon="accountIcon.png"
            content="With many years of providing services, we are proud to have received the trust of many businesses both domestically and internationally, in Vietnam and Australia."
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="h-full w-full"
        >
          <CardInformation
            numericalOrder="02"
            icon="greentech-icon.png"
            content="We offer solutions customized to meet your specific needs and challenges."
          />
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="h-full w-full"
        >
          <CardInformation
            numericalOrder="03"
            icon="money-box-icon.png"
            content="We provide all our services at a fraction of the cost compared to local agencies, ensuring you get the best value for your investment."
          />
        </motion.div>
      </div> */}
    </div>
  );
};

export default ProgressBar;
