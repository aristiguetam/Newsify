import Image from "next/image";

import { DataNewsResponse } from "@/interfaces";

interface Props {
  news: DataNewsResponse;
}

export const NewCard = ({ news }: Props) => {
  
  const { author, image, title, description, source, published_at } = news

  return (

    <div className={` flex bg-[#F2F2F2] rounded-lg shadow-lg ${image ? "h-[250px]" : ""}`}>

      <div className={`flex flex-col  p-4 ${image ? "w-1/2" : "w-full"}`}>

        <div className="flex justify-between">
          <h3 className="text-black font-bold text-sm first:capitalize">{source}</h3>
          <h3 className="text-black font-bold text-sm first:capitalize">{published_at}</h3>
        </div>

        <div className="flex flex-col overflow-hidden space-y-4 mt-4">
          <h2 className="text-black font-bold text-lg text-start">{title}</h2>
          <p className="text-black text-base text-start text-ellipsis ellipsis overflow-hidden">{description}</p>
        </div>

        <p className="text-xs text-black font-semibold text-start mt-2">
          Author: <span className="first:capitalize">{author}</span>
        </p>
      </div>

      <div className={`${image ? "w-1/2" : "hidden"}`}>
        {
          image && (
            <Image
              src={image}
              alt={title}
              width={0}
              height={0}
              sizes="(100vw)"
              priority
              className="w-full h-full object-cover object-center rounded-tr-lg rounded-br-lg shadow-lg"
            />
          )
        }
      </div>

    </div >

  )
}
