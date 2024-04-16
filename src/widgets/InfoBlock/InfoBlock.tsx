import styles from './InfoBlock.module.css';

export const InfoBlock = () => {
  return (
    <section className={`${styles.InfoBlockSection} min-w-80 h-[80%] bg-[url('/bg.jpg')] bg-cover`}>
      <div className="bg-[rgb(172,124,232)] bg-opacity-[80%] min-w-80 h-[100%] grid grid-rows-2 grid-cols-4 gap-4 p-[2%]">
        <div className={`${styles.NewsBlock} bg-red-900 mr-[2%] `} />
        <div className={`${styles.ProductBlockTheDay} bg-cyan-600 mb-[2%]`} />
        <div className={`${styles.BlockShares} bg-purple-950`} />
      </div>
    </section>
  );
};
