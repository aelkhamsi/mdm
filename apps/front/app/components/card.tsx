import { PlusIcon } from '@mdm/ui';
import { EventHandler, MouseEvent } from 'react';

const Card = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: EventHandler<MouseEvent>,
}) => {
  return (
    <div
      onClick={onClick}
      className="border group/canvas-card flex items-center justify-center border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[20rem] relative hover:cursor-pointer"
    >
      <PlusIcon className="absolute h-6 w-6 -top-3 -left-3 text-white" />
      <PlusIcon className="absolute h-6 w-6 -bottom-3 -left-3 text-white" />
      <PlusIcon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <PlusIcon className="absolute h-6 w-6 -bottom-3 -right-3 text-white" />
 
        <h2 className="relative z-20 text-white text-xl group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
    </div>
  );
};

export { Card }