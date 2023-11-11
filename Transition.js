//variants
const transitionVariants = {
  intial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%',
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  },

};


const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#80808026]' 
      variants={transitionVariants} 
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ delay: 0.2, duratio: 0.6, ease: 'easeInOut' }}>
        </motion.div>

        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-[#80808077]' 
      variants={transitionVariants} 
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ delay: 0.4, duratio: 0.6, ease: 'easeInOut' }}>
        </motion.div>

        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-[#8a8a8a9f]' 
      variants={transitionVariants} 
      initial='initial'
      animate='animate'
      exit='exit'
      transition={{ delay: 0.6, duratio: 0.6, ease: 'easeInOut' }}>
        </motion.div>
    </>
  );
};

export default Transition;
