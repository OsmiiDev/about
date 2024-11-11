import styles from './HeadContainer.module.css';

export const HeadContainer = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={`relative -z-10 flex h-[40rem] w-full items-start justify-center border-b border-b-secondary bg-secondary ${className}`}>
      <div
        className={`${styles.grid} absolute left-0 top-0 -z-50 m-0 h-[32.5rem] w-full bg-secondary p-0`}>
        <div className='relative size-full'>
          <div className={`${styles.gridInner} absolute size-full`}></div>
        </div>
      </div>
      <div
        className={`${styles.slideFromLeft} px-4 pt-40 sm:px-8 md:w-270 md:px-16 lg:w-360`}
        {...props}>
        {children}
      </div>
    </div>
  );
};
